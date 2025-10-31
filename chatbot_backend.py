"""
Intelligent Chatbot Backend with File Access
This Flask application scans your website files and creates an AI-powered chatbot
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import re
import json
from pathlib import Path
from datetime import datetime
import mimetypes

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Configuration
WEBSITE_ROOT = "./website"  # Change this to your website root directory
KNOWLEDGE_BASE_FILE = "knowledge_base.json"
SUPPORTED_EXTENSIONS = ['.js', '.jsx', '.tsx', '.html', '.css', '.md', '.txt', '.json']

class FileScanner:
    """Scans and indexes all website files"""
    
    def __init__(self, root_dir):
        self.root_dir = root_dir
        self.knowledge_base = {}
        
    def scan_directory(self):
        """Recursively scan directory and extract content"""
        print(f"Scanning directory: {self.root_dir}")
        
        for root, dirs, files in os.walk(self.root_dir):
            # Skip node_modules, build, and hidden directories
            dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['node_modules', 'build', 'dist', '__pycache__']]
            
            for file in files:
                file_path = os.path.join(root, file)
                file_ext = os.path.splitext(file)[1]
                
                if file_ext in SUPPORTED_EXTENSIONS:
                    self._process_file(file_path)
        
        print(f"Scanned {len(self.knowledge_base)} files")
        return self.knowledge_base
    
    def _process_file(self, file_path):
        """Extract content and metadata from a file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract meaningful information
            relative_path = os.path.relpath(file_path, self.root_dir)
            
            self.knowledge_base[relative_path] = {
                'content': content,
                'type': os.path.splitext(file_path)[1],
                'size': len(content),
                'modified': datetime.fromtimestamp(os.path.getmtime(file_path)).isoformat(),
                'keywords': self._extract_keywords(content, file_path)
            }
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    def _extract_keywords(self, content, file_path):
        """Extract important keywords from content"""
        keywords = set()
        
        # Extract from filename
        filename = os.path.basename(file_path)
        keywords.update(re.findall(r'\w+', filename.lower()))
        
        # Extract common patterns
        # Class names
        keywords.update(re.findall(r'class\s+(\w+)', content))
        # Function names
        keywords.update(re.findall(r'(?:function|const|let|var)\s+(\w+)', content))
        # Component names (React)
        keywords.update(re.findall(r'export\s+(?:default\s+)?(?:function|class|const)\s+(\w+)', content))
        # HTML headings
        keywords.update(re.findall(r'<h[1-6]>(.*?)</h[1-6]>', content, re.IGNORECASE))
        
        # Clean and filter keywords
        keywords = {k.lower() for k in keywords if len(k) > 2}
        
        return list(keywords)[:50]  # Limit to 50 keywords per file

class IntelligentChatbot:
    """Intelligent chatbot with file-based knowledge"""
    
    def __init__(self, knowledge_base):
        self.knowledge_base = knowledge_base
        self.conversation_history = []
    
    def search_knowledge(self, query):
        """Search through knowledge base for relevant content"""
        query_lower = query.lower()
        query_words = set(re.findall(r'\w+', query_lower))
        
        results = []
        
        for file_path, data in self.knowledge_base.items():
            score = 0
            
            # Check keywords
            matching_keywords = query_words.intersection(set(data['keywords']))
            score += len(matching_keywords) * 10
            
            # Check content
            content_lower = data['content'].lower()
            for word in query_words:
                if len(word) > 3:  # Only search meaningful words
                    score += content_lower.count(word)
            
            if score > 0:
                results.append({
                    'file': file_path,
                    'score': score,
                    'type': data['type'],
                    'content_preview': self._get_relevant_snippet(data['content'], query_words)
                })
        
        # Sort by relevance
        results.sort(key=lambda x: x['score'], reverse=True)
        return results[:5]  # Return top 5 results
    
    def _get_relevant_snippet(self, content, query_words, context_chars=200):
        """Extract relevant snippet from content"""
        content_lower = content.lower()
        
        # Find first occurrence of any query word
        for word in query_words:
            if len(word) > 3:
                pos = content_lower.find(word)
                if pos != -1:
                    start = max(0, pos - context_chars // 2)
                    end = min(len(content), pos + context_chars // 2)
                    snippet = content[start:end].strip()
                    return f"...{snippet}..."
        
        # Return beginning if no match
        return content[:context_chars] + "..."
    
    def generate_response(self, user_message):
        """Generate intelligent response based on knowledge base"""
        
        # Search for relevant information
        search_results = self.search_knowledge(user_message)
        
        if not search_results:
            return {
                'response': "I couldn't find specific information about that in our documentation. Could you rephrase your question or ask about our services, pricing, team, or technologies we use?",
                'sources': []
            }
        
        # Build response from search results
        response_parts = []
        sources = []
        
        for result in search_results[:3]:  # Use top 3 results
            response_parts.append(result['content_preview'])
            sources.append({
                'file': result['file'],
                'type': result['type'],
                'relevance': result['score']
            })
        
        # Create coherent response
        response = f"Based on our documentation, here's what I found:\n\n"
        response += "\n\n".join(response_parts)
        response += f"\n\nThis information comes from {len(sources)} relevant file(s) in our system."
        
        return {
            'response': response,
            'sources': sources,
            'confidence': search_results[0]['score'] if search_results else 0
        }

# Initialize scanner and chatbot
scanner = FileScanner(WEBSITE_ROOT)
chatbot = None

def initialize_knowledge_base():
    """Initialize or reload knowledge base"""
    global chatbot
    
    # Try to load existing knowledge base
    if os.path.exists(KNOWLEDGE_BASE_FILE):
        print("Loading existing knowledge base...")
        with open(KNOWLEDGE_BASE_FILE, 'r') as f:
            knowledge_base = json.load(f)
    else:
        print("Building new knowledge base...")
        knowledge_base = scanner.scan_directory()
        # Save knowledge base
        with open(KNOWLEDGE_BASE_FILE, 'w') as f:
            json.dump(knowledge_base, f, indent=2)
    
    chatbot = IntelligentChatbot(knowledge_base)
    return len(knowledge_base)

# API Routes

@app.route('/api/chat', methods=['POST'])
def chat():
    """Main chat endpoint"""
    try:
        data = request.json
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Generate response
        result = chatbot.generate_response(user_message)
        
        return jsonify({
            'success': True,
            'response': result['response'],
            'sources': result['sources'],
            'confidence': result['confidence'],
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/refresh-knowledge', methods=['POST'])
def refresh_knowledge():
    """Refresh knowledge base by rescanning files"""
    try:
        # Delete existing knowledge base
        if os.path.exists(KNOWLEDGE_BASE_FILE):
            os.remove(KNOWLEDGE_BASE_FILE)
        
        # Rescan
        file_count = initialize_knowledge_base()
        
        return jsonify({
            'success': True,
            'message': f'Knowledge base refreshed with {file_count} files',
            'file_count': file_count
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/search', methods=['GET'])
def search():
    """Search endpoint for finding specific files/content"""
    try:
        query = request.args.get('q', '')
        
        if not query:
            return jsonify({'error': 'No query provided'}), 400
        
        results = chatbot.search_knowledge(query)
        
        return jsonify({
            'success': True,
            'results': results,
            'count': len(results)
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stats', methods=['GET'])
def stats():
    """Get knowledge base statistics"""
    try:
        kb = chatbot.knowledge_base
        
        stats = {
            'total_files': len(kb),
            'file_types': {},
            'total_size': 0,
            'last_updated': None
        }
        
        for file_path, data in kb.items():
            file_type = data['type']
            stats['file_types'][file_type] = stats['file_types'].get(file_type, 0) + 1
            stats['total_size'] += data['size']
        
        if os.path.exists(KNOWLEDGE_BASE_FILE):
            stats['last_updated'] = datetime.fromtimestamp(
                os.path.getmtime(KNOWLEDGE_BASE_FILE)
            ).isoformat()
        
        return jsonify(stats)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'knowledge_base_loaded': chatbot is not None
    })

if __name__ == '__main__':
    print("=" * 50)
    print("Intelligent Chatbot Backend Starting...")
    print("=" * 50)
    
    # Initialize knowledge base
    try:
        file_count = initialize_knowledge_base()
        print(f"✓ Knowledge base initialized with {file_count} files")
    except Exception as e:
        print(f"✗ Error initializing knowledge base: {e}")
        print("Please check the WEBSITE_ROOT path in the code")
    
    print("\nAPI Endpoints:")
    print("  POST /api/chat - Send messages")
    print("  POST /api/refresh-knowledge - Refresh file index")
    print("  GET  /api/search?q=query - Search files")
    print("  GET  /api/stats - Get statistics")
    print("  GET  /api/health - Health check")
    print("=" * 50)
    
    app.run(debug=True, host='0.0.0.0', port=5000)
import {useState, useEffect} from 'react';
import { Facebook, Linkedin, Youtube, Instagram, X, TicketCheckIcon } from 'lucide-react';
import logo from '../assets/Images/logo.jpg';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';    
const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
const [newsletterStatus, setNewsletterStatus] = useState('');
const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

const handleNewsletterSubmit = async () => {
  if (!newsletterEmail) {
    setNewsletterStatus('error-empty');
    setTimeout(() => setNewsletterStatus(''), 3000);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newsletterEmail)) {
    setNewsletterStatus('error-invalid');
    setTimeout(() => setNewsletterStatus(''), 3000);
    return;
  }

  setIsSubmittingNewsletter(true);

  try {
    // Check if email already exists
    const { query, where, getDocs } = await import('firebase/firestore');
    const q = query(
      collection(db, 'newsletterSubscriptions'), 
      where('email', '==', newsletterEmail)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      setNewsletterStatus('error-duplicate');
      setTimeout(() => setNewsletterStatus(''), 3000);
      setIsSubmittingNewsletter(false);
      return;
    }

    // If email doesn't exist, proceed with subscription
    await addDoc(collection(db, 'newsletterSubscriptions'), {
      email: newsletterEmail,
      subscribedAt: serverTimestamp(),
      status: 'active'
    });

    console.log('Newsletter subscription successful');
    setNewsletterStatus('success');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus(''), 5000);
    
  } catch (error) {
    console.error('Error subscribing to newsletter: ', error);
    setNewsletterStatus('error-send');
    setTimeout(() => setNewsletterStatus(''), 3000);
  } finally {
    setIsSubmittingNewsletter(false);
  }
};
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className=" mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 items-baseline">
          {/* Left: Logo and Newsletter */}
          <div>
            <div className="w-32 mb-4">
              <img src={logo} />
            </div>
             <p className="text-gray-300 text-sm font-medium italic">
              Innovation tomorrow. Delivery today.
            </p>
            
            <h4 className="font-semibold mb-3 text-white text-lg">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Select topics and stay current with our latest insights
            </p>
            
           <div>
  <div className="flex gap-2 mb-6">
    <input
      type="email"
      placeholder="Email address"
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
      className="flex-1 bg-white text-black border-2 border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition-colors"
    />
    <button 
      onClick={handleNewsletterSubmit}
      disabled={isSubmittingNewsletter}
      className="bg-purple-700 hover:bg-purple-600 disabled:bg-purple-900 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded font-semibold text-sm transition-colors duration-300"
    >
      {isSubmittingNewsletter ? 'Submitting...' : 'Submit'}
    </button>
  </div>

  {/* Status Messages */}
  {newsletterStatus === 'success' && (
    <div className="mb-4 p-3 bg-green-900/50 border border-green-600 rounded-lg text-green-400 text-sm">
      ✓ Successfully subscribed to newsletter!
    </div>
  )}
  
  {newsletterStatus === 'error-empty' && (
    <div className="mb-4 p-3 bg-red-900/50 border border-red-600 rounded-lg text-red-400 text-sm">
      ✗ Please enter your email address
    </div>
  )}
  
  {newsletterStatus === 'error-invalid' && (
    <div className="mb-4 p-3 bg-red-900/50 border border-red-600 rounded-lg text-red-400 text-sm">
      ✗ Please enter a valid email address
    </div>
  )}
  
  {newsletterStatus === 'error-send' && (
    <div className="mb-4 p-3 bg-red-900/50 border border-red-600 rounded-lg text-red-400 text-sm">
      ✗ Failed to subscribe. Please try again.
    </div>
  )}
  {newsletterStatus === 'error-duplicate' && (
  <div className="mb-4 p-3 bg-yellow-900/50 border border-yellow-600 rounded-lg text-yellow-400 text-sm">
    ✗ This email is already subscribed to our newsletter
  </div>
)}
</div>

           
          </div>

          {/* Right: Links and Social */}
          <div className="md:text-right space-y-6">
            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact us</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy policy</Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">Terms of use</Link>
              <Link to="/accessibility-statement" className="text-gray-400 hover:text-white transition-colors">Accessibility statement</Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 md:justify-end">
              <a 
                href="https://www.linkedin.com/company/delacruz-innovations/"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1Ex9gJwHCi/" 
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/delacruzinnovations?igsh=dGxhZ2Q0Yncxd2cx" 
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/Delacruz_Inno/status/1983874642042613850?t=5tg2otbR1DHWUhHv4Dv1uQ&s=19" 
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
              </a>
               <a 
                href="https://www.tiktok.com/@delacruzinnovation?_r=1&_t=ZS-910LcadcHbO" 
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-700 hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
</svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Delacruz Innovations. Reg No - 8432281. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
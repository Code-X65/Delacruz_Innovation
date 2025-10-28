import React, { useState } from 'react';
import { Search, MapPin, Building2, Briefcase, ArrowLeft } from 'lucide-react';

// Jobs data stored in a JSON-like structure
const jobsData = [
  {
    id: 15178,
    title: "Associate",
    company: "McKinsey",
    type: "Consulting",
    locations: ["Abu Dhabi", "Addis Ababa", "Almaty", "Amsterdam", "Astana", "Athens", "Atlanta"],
    description: "Do you want to work on complex and pressing challenges—the kind that bring together curious, ambitious, and determined leaders who strive to become better every day? If this sounds like you, you've come to the right place.",
    impact: "As an associate, you will join a client service team and take ownership of a workstream to solve some of the toughest challenges our clients face.",
    impactDetails: "And these aren't just any clients—they're some of the most influential organizations around, from Fortune 500 giants to innovative startups. We will expect you to go the extra mile: delivering solutions that solve immediate problems and drive long-term change. And we'll rely on your judgment and integrity to ensure our recommendations are effective and long-lasting.",
    responsibilities: [
      "Working with clients and other McKinsey colleagues",
      "Conducting research, analyzing data, interviews, and brainstorming",
      "Collaborating directly with clients",
      "Solving complex problems and refining strategies",
      "Implementing transformations"
    ],
    growth: "Driving lasting impact and building long-term capabilities with our clients is not easy work. We seek people who thrive in a high performance/high-reward culture - doing hard things, picking yourself up when you stumble, and having the resilience to work.",
    qualifications: [
      "Typically an advanced graduate degree (e.g., MBA, PhD, etc.) or equivalent work experience",
      "Requirements may vary by country or practice"
    ],
    industries: ["Agriculture & Farming"],
    capabilities: ["Operations Organizational Structure"]
  },
  {
    id: 10234,
    title: "Business Operations Manager, Dubai",
    company: "Defence Innovations",
    type: "Internal",
    locations: ["Abu Dhabi", "Addis Ababa", "Almaty", "Amsterdam", "Astana", "Athens"],
    description: "As a Business Operations Manager at Defence Innovations, we are a private dynamic operations team and take ownership of critical business processes to ensure efficiency and growth. You'll tackle complex challenges that impact our business strategy and client delivery.",
    impact: "Lead operational excellence initiatives across multiple departments.",
    impactDetails: "You will work with senior leadership to streamline processes, implement new systems, and drive organizational efficiency.",
    responsibilities: [
      "Managing business operations",
      "Process optimization",
      "Strategic planning",
      "Cross-functional collaboration"
    ],
    growth: "Opportunity to shape the operational framework of a growing organization.",
    qualifications: [
      "Bachelor's degree in Business Administration or related field",
      "5+ years of operations management experience",
      "Strong analytical and problem-solving skills"
    ],
    industries: ["Defense & Security"],
    capabilities: ["Operations Management", "Strategic Planning"]
  },
  {
    id: 10567,
    title: "Project Manager",
    company: "Global Consulting",
    type: "Consulting",
    locations: ["Abu Dhabi", "Addis Ababa", "Almaty"],
    description: "As a Project Manager, you will have ownership of end-to-end project delivery – leading cross-functional teams to plan, execute, and deliver transformative solutions for some of the most influential organizations and their business and the public sector.",
    impact: "Drive successful project delivery for Fortune 500 clients.",
    impactDetails: "Lead teams of 10-15 professionals across multiple workstreams.",
    responsibilities: [
      "Project planning and execution",
      "Stakeholder management",
      "Risk management",
      "Team leadership"
    ],
    growth: "Fast-track career progression to senior leadership roles.",
    qualifications: [
      "PMP or equivalent certification preferred",
      "7+ years of project management experience",
      "Experience with Agile and Waterfall methodologies"
    ],
    industries: ["Technology", "Finance"],
    capabilities: ["Project Management", "Agile Delivery"]
  },
  {
    id: 10789,
    title: "Chief Technology Officer",
    company: "Tech Innovations",
    type: "Consulting",
    locations: ["Abu Dhabi", "Amsterdam", "Atlanta"],
    description: "As Chief Technology Officer, you'll lead the strategy, vision, design, and delivery of cutting-edge digital solutions that power our organization and clients. You will provide visionary leadership from thought to the technological direction of their-growing.",
    impact: "Shape the technological future of the organization.",
    impactDetails: "Lead a team of 50+ engineers and architects.",
    responsibilities: [
      "Technology strategy and vision",
      "Team building and leadership",
      "Architecture design",
      "Innovation and R&D"
    ],
    growth: "C-suite executive position with equity opportunities.",
    qualifications: [
      "15+ years of technology leadership experience",
      "Proven track record of scaling technology organizations",
      "Deep expertise in cloud, AI/ML, and modern architecture"
    ],
    industries: ["Technology", "SaaS"],
    capabilities: ["Technology Strategy", "Engineering Leadership"]
  },
  {
    id: 10912,
    title: "Office Admin",
    company: "Defence Innovations",
    type: "Internal",
    locations: ["Abu Dhabi", "Addis Ababa"],
    description: "At Defence Innovations, we are part of a strategic operations. We are looking at established as an Administrative Officer who will play a vital role in ensuring the smooth and efficient functioning to diverse operational in a sophisticated or complex project. You'll play a key role in forming an environment where efficiency, organization, and precision directly impact.",
    impact: "Support organizational efficiency and operations.",
    impactDetails: "Manage administrative functions for a team of 100+ employees.",
    responsibilities: [
      "Office management",
      "Administrative support",
      "Facilities coordination",
      "Vendor management"
    ],
    growth: "Career progression to senior administrative roles.",
    qualifications: [
      "Bachelor's degree preferred",
      "3+ years of administrative experience",
      "Proficiency in MS Office suite"
    ],
    industries: ["Defense & Security"],
    capabilities: ["Administration", "Office Management"]
  }
];

const JobListingsApp = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    interests: '',
    industries: '',
    capabilities: ''
  });

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (selectedJob) {
    return <JobDetailsPage job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Jobs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-black rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="bg-white text-black rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Interests"
              value={filters.interests}
              onChange={(e) => setFilters({...filters, interests: e.target.value})}
              className="bg-white text-black rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Industries"
              value={filters.industries}
              onChange={(e) => setFilters({...filters, industries: e.target.value})}
              className="bg-white text-black rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Capabilities"
              value={filters.capabilities}
              onChange={(e) => setFilters({...filters, capabilities: e.target.value})}
              className="bg-white text-black rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Jobs Count */}
      <div className="max-w-6xl mx-auto py-8 px-6">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-purple-500 mb-2">{filteredJobs.length}+</h1>
          <p className="text-gray-400 text-lg">Jobs Available</p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-all cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-purple-400 font-semibold uppercase">{job.type}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-purple-400 mb-3 hover:text-purple-300">
                {job.title}
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>{job.locations.join(' | ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const JobDetailsPage = ({ job, onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-purple-200 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Jobs
          </button>
          <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
          <p className="text-purple-200">Job ID: {job.id}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Locations */}
        <div className="flex items-center text-gray-400 mb-6">
          <MapPin size={18} className="mr-2" />
          <span>{job.locations.join(' | ')}</span>
        </div>

        {/* Apply Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply Now
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply Later
          </button>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-300 leading-relaxed">{job.description}</p>
        </div>

        {/* Your Impact */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">YOUR IMPACT</h2>
          <p className="text-purple-300 text-lg mb-4">{job.impact}</p>
          <p className="text-gray-300 leading-relaxed mb-4">{job.impactDetails}</p>
          
          {job.responsibilities && (
            <div className="mt-4">
              <p className="text-gray-300 mb-2">Your responsibilities include:</p>
              <ul className="text-gray-300 space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>• {resp}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Your Growth */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">YOUR GROWTH</h2>
          <p className="text-gray-300 leading-relaxed">{job.growth}</p>
        </div>

        {/* Qualifications */}
        <div className="mb-8 bg-purple-900 bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">YOUR QUALIFICATION SKILLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {job.qualifications.map((qual, idx) => (
              <div key={idx} className="text-gray-300">
                <p>{qual}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries & Capabilities */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Industries</h3>
            {job.industries.map((industry, idx) => (
              <p key={idx} className="text-gray-300">{industry}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Capabilities</h3>
            {job.capabilities.map((capability, idx) => (
              <p key={idx} className="text-gray-300">{capability}</p>
            ))}
          </div>
        </div>

        {/* Bottom Apply Buttons */}
        <div className="flex gap-4 pt-6 border-t border-gray-800">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply Now
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListingsApp;
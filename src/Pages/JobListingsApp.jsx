import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import jobsData from '../jobsData';

const JobListingsPage = () => {
  const navigate = useNavigate();
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

  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-black py-24 text-white">
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
              className="w-full bg-white text-black pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              onClick={() => handleJobClick(job.id)}
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

export default JobListingsPage;
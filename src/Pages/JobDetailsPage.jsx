import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import jobsData from '../jobsData';

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  // Find the job by ID from the URL
  const job = jobsData.find(j => j.id === parseInt(jobId));

  // If job not found, show error message
  if (!job) {
    return (
      <div className="min-h-screen bg-black py-24 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Job Not Found</h1>
          <button
            onClick={() => navigate('/jobs')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-24 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/jobs')}
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
          <p className="text-gray-100 leading-relaxed">{job.description}</p>
        </div>

        {/* Your Impact */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">YOUR IMPACT</h2>
          <p className="text-purple-300 text-lg mb-4">{job.impact}</p>
          <p className="text-gray-100 leading-relaxed mb-4">{job.impactDetails}</p>
          
          {job.responsibilities && (
            <div className="mt-4">
              <p className="text-gray-100 mb-2">Your responsibilities include:</p>
              <ul className="text-gray-100 space-y-2">
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
          <p className="text-gray-100 leading-relaxed">{job.growth}</p>
        </div>

        {/* Qualifications */}
        <div className="mb-8 bg-purple-900 bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">YOUR QUALIFICATION SKILLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {job.qualifications.map((qual, idx) => (
              <div key={idx} className="text-gray-100">
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
              <p key={idx} className="text-gray-100">{industry}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Capabilities</h3>
            {job.capabilities.map((capability, idx) => (
              <p key={idx} className="text-gray-100">{capability}</p>
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

export default JobDetailsPage;
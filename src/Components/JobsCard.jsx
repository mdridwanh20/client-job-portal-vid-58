import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function JobsCard({ job }) {
  const {_id, title, location, company_logo, jobType, category, description,company,requirements,} = job;

  // salaryRange: { min, max, currency },

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col">
      <div className="p-4 flex-grow">
        {/* Header Section */}
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <img
              src={company_logo}
              alt="Company Logo"
              className="w-10 h-10"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-xl font-semibold text-gray-800">{company}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-1" /> {location}
            </p>
          </div>
        </div>

        {/* Job Title and Description */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2 flex items-center">
          <FaBriefcase className="text-blue-500 mr-1" /> {jobType} | {category}
        </p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Skills Tags */}
        {/* <div className="flex flex-wrap gap-2 mb-4">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div> */}


        {/* Salary Section */}
        {/* <div className="mb-4 flex items-center">
          <FaMoneyBillWave className="text-blue-500 mr-2" />
          <p className="text-sm font-semibold text-gray-800">
            Salary: {min} - {max} {currency.toUpperCase()}
          </p>
        </div> */}



      </div>

      {/* Apply Now Button */}
      <div className="p-4 bg-gray-100 border flex items-center justify-between">

        <Link to={`/jobDetails/${_id}`} className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Job Details
        </Link>

      </div>
    </div>
  );
}

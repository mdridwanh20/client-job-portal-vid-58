import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function JobDetails() {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange: { min, max, currency },
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <div className="flex py-16 justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-200 md:w-1/3 p-6 flex items-center justify-center">
            <img src={company_logo} alt={company} className="max-h-24 object-contain" />
          </div>

          <div className="p-6 md:w-2/3">

            <div className='flex items-center justify-between'>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{company}</p>
              </div>

              <div>
                <Link to={`/jobApply/${_id}`} className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Apply Now
                </Link>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{jobType}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{category}</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{location}</span>
            </div>
            <p className="text-gray-800 mb-2">
              <span className="font-bold">Salary:</span> {currency} {min} - {max}
            </p>
            <p className="text-gray-800 mb-2">
              <span className="font-bold">Application Deadline:</span> {applicationDeadline}
            </p>
            <p className="text-gray-800 mb-4">{description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-600">
                <span className="font-bold">HR Contact:</span> {hr_name} ({hr_email})
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Status:</span> {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

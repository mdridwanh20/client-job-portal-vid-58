import React, { useEffect, useState } from 'react';
import { useAuth } from '../Hook/useAuth';
import { useNavigate } from 'react-router-dom';

export default function My_Application() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">My Job Applications ({jobs.length})</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-6 text-left">S/N</th>
                <th className="py-3 px-6 text-left">Job ID</th>
                <th className="py-3 px-6 text-left">Applicant Email</th>
                <th className="py-3 px-6 text-left">LinkedIn</th>
                <th className="py-3 px-6 text-left">GitHub</th>
                <th className="py-3 px-6 text-left">Resume</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(({ _id, job_id, applicant_email, linkedin, github, resume }, index) => (
                <tr key={_id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{job_id}</td>
                  <td className="py-3 px-6">{applicant_email}</td>
                  <td className="py-3 px-6">
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </td>
                  <td className="py-3 px-6">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub Profile
                    </a>
                  </td>
                  <td className="py-3 px-6">
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Resume
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

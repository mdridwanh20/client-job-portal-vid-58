
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../Hook/useAuth';

export default function AddJob() {

  const navigate = useNavigate()
  const {user} = useAuth()

  const handlerJobForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries())
    // console.log(initialData);

    // data remove 
    const { max, min, currency, ...newJob } = initialData;
    // console.log(newJob);

    // data object create ;
    newJob.salaryRange = { min, max, currency }
    // console.log(newJob);

    // array convert
    newJob.requirements = newJob.requirements.split('\n')
    // console.log(newJob);

    // array convert
    newJob.responsibilities = newJob.responsibilities.split('\n')
    console.log(newJob);


    // data send to server;
    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }, body: JSON.stringify({...newJob, addedEmail: user.email})
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset()
        }
        
        navigate('/my-posted-job')

        console.log(data);
      })
      
  };


  return (
    <div>
      <div className="py-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Job Application Form</h1>

          <form onSubmit={handlerJobForm}>
            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  readOnly
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border bg-gray-100 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Job Field */}
              <div>
                <label htmlFor="jobField" className="block text-gray-700 font-medium mb-2">Job Field</label>
                <select
                  id="jobField"
                  name="jobField"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled value="">Pick a job field</option>
                  <option>Full Time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                  <option>Remote</option>
                  <option>Temporary</option>
                  <option>Volunteer</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            {/* Salary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Min Salary */}
              <div>
                <label htmlFor="minSalary" className="block text-gray-700 font-medium mb-2">Min Salary</label>
                <select
                  id="minSalary"
                  name="min"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled value="">Select Min Salary</option>
                  <option>$1000</option>
                  <option>$2000</option>
                  <option>$3000</option>
                  <option>$4000</option>
                  <option>$5000</option>
                </select>
              </div>

              {/* Max Salary */}
              <div>
                <label htmlFor="maxSalary" className="block text-gray-700 font-medium mb-2">Max Salary</label>
                <select
                  id="maxSalary"
                  name="max"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled value="">Select Max Salary</option>
                  <option>$5000</option>
                  <option>$6000</option>
                  <option>$7000</option>
                  <option>$8000</option>
                  <option>$9000</option>
                </select>
              </div>

              {/* Currency */}
              <div>
                <label htmlFor="currency" className="block text-gray-700 font-medium mb-2">Currency</label>
                <select
                  id="currency"
                  name="currency"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled value="">Select Currency</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>BDT</option>
                  <option>INR</option>
                </select>
              </div>
            </div>


            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* LinkedIn URL */}
              <div>
                <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">LinkedIn URL</label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/your-profile"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* GitHub URL */}
              <div>
                <label htmlFor="github" className="block text-gray-700 font-medium mb-2">GitHub URL</label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  placeholder="https://github.com/your-username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Resume URL */}
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Resume URL</label>
                <input
                  type="text"
                  id="resume"
                  name="resume"
                  placeholder="https://your-resume-link.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>


            <div className='grid grid-cols-3 gap-5'>
              {/* Job Requirements */}
              <div className="mb-8">
                <label htmlFor="bio" className="block text-gray-700 font-medium mb-2">Job Requirements</label>
                <textarea
                  id="Requirements"
                  name="requirements"
                  className="textarea textarea-bordered w-full px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Put each requirements in a new line"
                ></textarea>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <label htmlFor="bio" className="block text-gray-700 font-medium mb-2">Responsibilities</label>
                <textarea
                  id="Requirements"
                  name="responsibilities"
                  className="textarea textarea-bordered w-full px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Put each requirements in a new line"
                ></textarea>
              </div>

              {/* Application Date Line */}
              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2"> Application Date Line </label>
                <input
                  type="date"
                  id="dateLine"
                  name="dateLine"
                  placeholder="Application Date Line"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>





            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

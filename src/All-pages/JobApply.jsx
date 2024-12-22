import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Hook/useAuth';
import Swal from 'sweetalert2';

export default function JobApply() {

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate()

  const { user } = useAuth()
  console.log(user);


  const handlerJobForm = (e) => {
    e.preventDefault();
    const from = e.target;

    // Capture the values of all form inputs
    const name = from.name.value;
    const email = from.email.value;
    const linkedin = from.linkedin.value;
    const github = from.github.value;
    const resume = from.resume.value;

    // Log the values to the console
    console.log('Name:', name); console.log('Email:', email); console.log('LinkedIn URL:', linkedin); console.log('GitHub URL:', github); console.log('Resume URL:', resume);


    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume
    }

    fetch(`http://localhost:5000/job-application`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(jobApplication)
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
        }
       navigate('/my-application')
        console.log(data);
      })

    from.reset()

  }

  return (
    <div className="bg-gray-100 py-16 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Application Form</h1>

        <form onSubmit={handlerJobForm}>
          {/* Personal Information Section */}

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>

            {/* Name */}
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user.email}
                readOnly
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-100 text-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h2>

            {/* LinkedIn URL */}
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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

  );
}

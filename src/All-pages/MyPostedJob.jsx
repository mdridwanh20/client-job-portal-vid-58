import React, { useEffect, useState } from 'react'
import { useAuth } from '../Hook/useAuth'
import { Link } from 'react-router-dom'

export default function MyPostedJob() {

  const [jobs, setJobs] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [user.email])

  console.log(jobs);


  return (
    <div className='py-8'>

      <div className=''>
        <p className='bg-red-100 text-black font-medium inline-block py-1 rounded-full px-4'>My Posted Job:{jobs.length} </p>
      </div>

      <div className='py-10'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className='bg-red-100'>
              <tr className='text-black'>
                <th>Serial</th>
                <th>Name</th>
                <th>Date</th>
                <th>Job Field</th>
                <th>Application</th>
              </tr>
            </thead>
            <tbody>


              {
                jobs.map((job, index) =>

                  <tr className="">
                    <th>{index + 1}</th>
                    <td>{job.name}</td>
                    <td>{job.dateLine}</td>
                    <td>{job.jobField}</td>

                    <td>
                      <Link to={`/view-details-application/${job._id}`} className=''>
                        <button className='text-green-700 font-medium'>View Details Application</button>
                      </Link>
                    </td>

                  </tr>

                )
              }

            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

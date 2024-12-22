import React, { useEffect, useState } from 'react'
import JobsCard from './JobsCard';
import { useAuth } from '../Hook/useAuth';

export default function Jobs() {

    const [jobs, setJobs] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    }, [])

    console.log(jobs);

    return (
        <div>


            <div className='grid grid-cols-4 py-16 container m-auto gap-10'>
                {
                    jobs.map((job) => <JobsCard
                        key={job._id}
                        job={job}>
                    </JobsCard>)
                }
            </div>


        </div>
    )
}

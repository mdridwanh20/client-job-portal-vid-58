import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function View_Details_Application() {
const application = useLoaderData()

const {id} = useParams()

console.log(application);

  return (
    <div>View_Details_Application {application.length} </div>
  )
}

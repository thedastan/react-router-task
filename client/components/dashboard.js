import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="mb-20 focus:outline-none focus:shadow-outline text-4xl text-center text-white font-black  p-5"
      >
        Dashboard
      </div>
      <NavLink
        to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF"
        className="mr-10 text-3xl focus:outline-none focus:shadow-outline text-center bg-purple-500 text-white font-bold rounded-lg shadow-lg p-5"
      >
        Go To Profile
      </NavLink>
      <NavLink
        to="/dashboard/main"
        className="mr-10 text-3xl focus:outline-none focus:shadow-outline text-center bg-purple-600 text-white font-bold rounded-lg shadow-lg p-5"
      >
        Go to Main
      </NavLink>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard

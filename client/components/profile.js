import React from 'react'

import { NavLink, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user: userName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-5xl text-center  text-white font-black    p-5"
      >
        Profile
      </div>
      <div id="userName" className="text-center mb-20">
        {userName}
      </div>
      <NavLink
        to="/dashboard/"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mr-10 text-3xl focus:outline-none focus:shadow-outline text-center bg-purple-500 text-white font-bold rounded-lg shadow-lg p-5"
      >
        Go To Root
      </NavLink>
      <NavLink
        to="/dashboard/main"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mr-10 focus:outline-none focus:shadow-outline text-3xl text-center bg-purple-600 text-white font-bold rounded-lg shadow-lg p-5"
      >
        Go to Main
      </NavLink>
    </div>
  )
}

Profile.propTypes = {}

export default Profile

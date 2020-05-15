import React from 'react'
import { NavLink } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-20 focus:outline-none focus:shadow-outline text-5xl text-center text-white font-black"
      >
        Main
      </div>
      <NavLink
        to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mr-10 focus:outline-none focus:shadow-outline text-3xl text-center bg-purple-400 text-white font-bold rounded-lg shadow-lg p-5"
      >
        Go To Profile
      </NavLink>
      <NavLink
        to="/dashboard/"
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mr-10 focus:outline-none focus:shadow-outline text-3xl text-center bg-purple-500 text-white font-bold rounded-lg  shadow-lg p-5"
      >
        Go to Root
      </NavLink>
    </div>
  )
}

Main.propTypes = {}

export default Main

import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-indigo-800 text-white font-bold
         text-2xl rounded-lg border shadow-lg p-10"
        >
          <Switch>
            <Route>
              <Link to="/dashboard/main"> This is dummy component</Link>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy

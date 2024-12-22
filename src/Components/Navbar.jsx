import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

export default function Navbar() {

 const {signOutUser, user} = useContext(AuthContext)
console.log(user);


  return (
    <div className="navbar bg-base-100 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Link to='/' className="font-bold text-xl">JobPortal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-2 menu-horizontal px-1">

          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/my-application'> My Application</NavLink></li>
          <li><NavLink to='/addJob'>Add Job</NavLink></li>
          <li><NavLink to='/my-posted-job'>My Posted Job</NavLink></li>

        </ul>
      </div>
      <div className="navbar-end space-x-2">

        <Link className='btn h-10 min-h-10 rounded-md ' to='/register'>Register</Link>

        {
          user && user?.email ? 
          <button onClick={signOutUser} className='btn h-10 min-h-10 rounded-md'>Log out</button> 
          : 
          <Link className='btn h-10 min-h-10 rounded-md ' to='/login'>Login</Link>
        }


      </div>
    </div>
  )
}

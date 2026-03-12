import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-indigo-700 text-white p-3 flex justify-between border-amber-100 rounded-2xl my-4 mx-1.5'>
        <div className='justify-center items-center flex'>
         <div>
         
        </div>
        </div>


        <div className='flex mr-90 ml-80 justify-center items-center'> 
            <h1>Learn. Leap. Lead</h1>
        </div>


        <div className='justify-center items-center flex gap-10 mr-5'>
          <img
            src="https://seeklogo.com/images/S/srm-institute-of-science-and-technology-logo-381994BE6F-seeklogo.com.png"
            alt="SRM Institute of Science and Technology logo"
            className="h-10 bg-white rounded-full p-1"
          />
          <Link to="/">Home</Link>
          <div>
            <Link to="/attendance">Attendance</Link>
          </div>
          <div>
            <Link to="/ragging">Ragging</Link>
          </div>
          <div>
            <Link to="/vision">Vision</Link>
          </div>
       </div> 
       </div>
       <hr></hr>

    

    </>
  )
}

export default NavBar
import React from 'react'

const Navigation = ( isMenu ) => {
  return <>
  
  <ul className={`hidden xl:flex items-center `} >
          <li className="text-white hover:text-green-400 text-xl cursor-pointer p-5 ">
            home
          </li>
          <li className="text-white hover:text-green-400 text-xl cursor-pointer p-5 ">
            Upload Resume
          </li>
          <li className="text-white hover:text-green-400 text-xl cursor-pointer p-5 ">
            About
          </li>
        </ul>
  
  </>
}

export default Navigation
import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import { GoGlobe } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const [display, setDisplay] = useState(false)
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    if (location.state === 'none') {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }, [])

  return (
    <>
      {display && (
        <div className="bg-transparent z-10 absolute top-[15px] left-0 right-0 flex justify-between items-center mx-auto w-[50%] h-[80px] ">
          <div className="flex flex-col w-[83%] h-full ">
            <div className=" flex w-full h-[50%] ">
              <ul className="group flex justify-center items-start w-fit px-[5px] h-full border-x-0 border-t-0 border-2 border-b-white  hover:border-blue-700 duration-200 hover:duration-200 ">
                <li>
                  <Link
                    to="/"
                    className="font-[600] text-[16px] text-white group-hover:text-blue-700"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="group flex justify-center items-start w-fit px-[5px] h-full border-x-0 border-t-0 border-2 border-b-white  hover:border-blue-700 duration-200 hover:duration-200 ">
                <li>
                  <Link
                    to="/Magazine"
                    className="font-[600] text-[16px] text-white group-hover:text-blue-700"
                  >
                    Magazine
                  </Link>
                </li>
              </ul>
              <ul className="group flex justify-center items-start w-fit px-[5px] h-full border-x-0 border-t-0 border-2 border-b-white  hover:border-blue-700 duration-200 hover:duration-200 ">
                <li>
                  <Link
                    to="/Podcasts"
                    className="font-[600] text-[16px] text-white group-hover:text-blue-700"
                  >
                    Podcasts
                  </Link>
                </li>
              </ul>
              <ul className="group flex justify-center items-start w-fit px-[5px] h-full border-x-0 border-t-0 border-2 border-b-white  hover:border-blue-700 duration-200 hover:duration-200 ">
                <li>
                  <Link
                    to="/Events"
                    className="font-[600] text-[16px] text-white group-hover:text-blue-700"
                  >
                    Events
                  </Link>
                </li>
              </ul>
              <ul className="group flex justify-center items-start w-fit px-[5px] h-full border-x-0 border-t-0 border-2 border-b-white  hover:border-blue-700 duration-200 hover:duration-200">
                <li>
                  <Link
                    to="Esports"
                    className="font-[600] text-[16px] text-white group-hover:text-blue-700"
                  >
                    Esports
                  </Link>
                </li>
              </ul>
              <ul className="group flex justify-center items-start w-fit px-[5px] h-full border-x-0 border-t-0 border-2 border-b-white  hover:border-blue-700 duration-200 hover:duration-200 ">
                <li>
                  <Link
                    to="Models"
                    className="font-[600] text-[16px] text-white group-hover:text-blue-700"
                  >
                    Models
                  </Link>
                </li>
              </ul>
              <div className="flex justify-center items-center  w-[60px] h-[full] border-2 border-b-white border-x-0 border-t-0">
                <VscSearch className="text-white text-[18px]" />
              </div>
              <div className="w-[150px] h-[full] text-white  text-[10px] font-[600] border-2 border-b-white border-x-0 border-t-0">
                <div className="w-full h-[75%] border-[1px] border-l-white border-y-0 border-r-0 flex justify-end items-end">
                  <GoGlobe className="w-[17px] h-[17px] border-[1px] border-white rounded-full mr-[4px]" />
                  BMW in your country
                </div>
              </div>
            </div>
            <div className="w-full h-[50%]    flex justify-end items-center">
              <p className="text-white text-[14px] font-[600]">
                Sheer Driving Pleasure
              </p>
            </div>
          </div>
          <div className="w-[90px] h-full">
            <img
              src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-light.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

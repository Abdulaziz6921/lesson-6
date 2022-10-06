import React from 'react'
import { useLocation } from 'react-router-dom'

function NotFound() {
  const location = useLocation()
  location.state = 'none'
  return (
    <div className="bg-[#1A181A] text-[100px] w-full h-[100vh] text-white flex justify-center items-center">
      Page-NotFound Error-404
    </div>
  )
}

export default NotFound

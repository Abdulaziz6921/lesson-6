import React from 'react'

function Section3() {
  return (
    <div className="flex justify-center items-center w-ful h-[116vh]">
      <div className="w-[59%] h-[95%]">
        <div className="w-full h-[70%] ">
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude-forever/issue-1/ss-nsc-2.png?imwidth=1280"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[30%] ">
          <p className="text-[30px] font-[600]">BMW presents</p>
          <p className="text-[80px]">FREUDO.FOREVER</p>
          <button className="w-[170px] h-[45px] border-2 border-black text-[15px] font-[600] bg-white ">
            Order copy
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section3

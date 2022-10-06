import React from 'react'

function Section1() {
  return (
    <div className="flex justify-start items-end relative w-full h-[80vh] text-white  font-[600] group ">
      <div className=" w-full h-full absolute -z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[2s]  overflow-hidden">
        <img
          src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude-forever/issue-1/ss-00-teaser-hd.jpg?imwidth=1280"
          alt=""
          className=" w-full h-full object-cover  group-hover:scale-[1.2] duration-[10s]"
        />
      </div>

      <div className="left-[70px] bottom-[70px] w-fit h-fit  absolute  ">
        <p className="text-[26px]">FREUDE.FOREVER</p>
        <p className="text-[55px] mb-[25px]">
          A new magazine presented by <br /> BMW
        </p>
        <button className="w-[170px] h-[45px] border-2 border-white text-[15px] font-[700] hover:text-black hover:bg-white hover:duration-200 duration-200">
          Read More
        </button>
      </div>
    </div>
  )
}

export default Section1

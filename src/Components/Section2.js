import React from 'react'

function Section2() {
  return (
    <div className=" flex h-[90vh] w-full">
      <div className="flex justify-start items-end relative w-[50%] h-full  text-white   group ">
        <div className=" w-full h-full absolute -z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[2s]  overflow-hidden">
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/Coldplay/cp_00_teaser_square.jpg?imwidth=1024"
            alt=""
            className=" w-full h-full object-cover  group-hover:scale-[1.2] duration-[7s]"
          />
        </div>

        <div className="left-[50px] bottom-[50px] w-fit h-fit  absolute  ">
          <p className="text-[26px]">Circular power</p>
          <p className="text-[40px] mb-[25px] font-[600] leading-11">
            Touring into the future with <br /> Coldplay
          </p>
          <button className="w-[170px] h-[45px] border-2 border-white text-[15px] font-[700] hover:text-black hover:bg-white hover:duration-200 duration-200">
            Read More
          </button>
        </div>
      </div>

      <div className="flex justify-start items-end relative w-[50%] h-full  text-white   group ">
        <div className=" w-full h-full absolute -z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[2s]  overflow-hidden">
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/berlin-marathon/bm-00-teaser-square.jpg?imwidth=1024"
            alt=""
            className=" w-full h-full object-cover  group-hover:scale-[1.2] duration-[7s]"
          />
        </div>

        <div className="left-[50px] bottom-[50px] w-fit h-fit  absolute  ">
          <p className="text-[26px]">BMW BERLIN MARATHON</p>
          <p className="text-[40px] mb-[25px] font-[600] leading-11">
            The joy of pushing limits
          </p>
          <button className="w-[170px] h-[45px] border-2 border-white text-[15px] font-[700] hover:text-black hover:bg-white hover:duration-200 duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section2

import React from 'react'

function Section4() {
  return (
    <div className="flex justify-center w-full h-[540px]  bg-[#262626]">
      <div className="flex mt-[30px] w-[90%] h-[83%] ">
        <div className=" flex flex-col justify-between h-full w-[23%]  text-white">
          <p className="text-[40px] font-[600] leading-[43px]">
            THE BMW PODCAST: CHANGING LANES
          </p>
          <p>
            "Changing Lanes” is the official podcast of BMW. Featuring new
            episodes each week, in which our hosts take you on exciting journeys
            and talk about innovative technologies, lifestyle, design, cars and
            more. Find and subscribe to Changing Lanes on all major podcasting
            platforms.
          </p>
          <button className="w-[170px] h-[45px] border-2 border-white text-[15px] text-white font-[700] hover:text-black hover:bg-white hover:duration-200 duration-200">
            Listen now
          </button>
        </div>

        <div className=" flex justify-end items-start relative w-[275px] h-[360px]  text-white  ml-[50px] group ">
          <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[2s]  overflow-hidden">
            <img
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/kasper-sage/ks-00-teaser-high.jpg?imwidth=768"
              alt=""
              className=" w-full h-full object-cover  group-hover:scale-[1.2] duration-[7s]"
            />
          </div>
          <div className="absolute z-20 bottom-3 left-3 w-[200px] h-fit ">
            Audio column <br />
            The future of industrial technology trends
          </div>
        </div>

        <div className=" flex justify-end items-start relative w-[275px] h-[360px]  text-white  ml-[50px] group ">
          <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[2s]  overflow-hidden">
            <img
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/fat-bw/fat-00-teaser-high.jpg?imwidth=768"
              alt=""
              className=" w-full h-full object-cover  group-hover:scale-[1.2] duration-[7s]"
            />
          </div>
          <div className="absolute z-20 bottom-3 left-3 w-[200px] h-fit ">
            Audio column <br />
            The future of audio and acoustics
          </div>
        </div>

        <div className=" flex justify-end items-start relative w-[275px] h-[360px]  text-white  ml-[50px] group ">
          <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[2s]  overflow-hidden">
            <img
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/Norwegen-roadtrip/ang-00-teaser-high.jpg?imwidth=768"
              alt=""
              className=" w-full h-full object-cover  group-hover:scale-[1.2] duration-[7s]"
            />
          </div>
          <div className="absolute z-20 bottom-3 left-3 w-[200px] h-fit ">
            Audio column <br />
            The future of circularity
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4

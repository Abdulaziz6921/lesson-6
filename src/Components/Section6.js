import React from 'react'

function Section6() {
  return (
    <>
      <div className="w-full h-[810px]  flex flex-row-reverse">
        <div className="w-2/3 h-full flex flex-col ">
          <div className=" flex relative w-full h-2/3 border-r-0 border-2 border-white text-white  border-b-0 group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/4-Zylinder/4Z-00-teaser-hd.jpg?imwidth=1280"
                alt=""
                className=" w-full h-full object-cover  group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              50 years: modernity <br />
              Celebrating half a century of BMW innovation
            </div>
          </div>
          <div className=" flex h-1/3 w-full">
            <div className=" flex relative h-full w-1/2 border-2 border-white border-r-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <img
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/events/esports-hub/pimpmyrivarly/TEASER-HD-1920x1080px.jpg?imwidth=768"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
                />
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                BMW Esports Pimp my Rivalry
                <br />
                Sports meet design
              </div>
            </div>

            <div className=" flex relative h-full w-1/2 border-2 border-white border-r-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <img
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/RLH/rlh-00-teaser-hd.jpg?imwidth=768"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
                />
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                Rafael Lozano-Hemmer
                <br />
                Visualizing the invisible
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 h-full ">
          <div className=" flex relative h-1/3 w-full border-2 border-white border-x-0 border-b-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/cd/cd-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Dream drive <br />
              On the road with the new BMW 8 Series
            </div>
          </div>

          <div className=" flex relative h-1/3 w-full border-2 border-white border-x-0 border-b-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/gbi3/gbi3-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Goodbye, BMW i3
              <br />
              This love never gets rusty
            </div>
          </div>
          <div className=" flex relative h-1/3 w-full border-2 border-white border-r-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/fat-bw/fat-bw-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Audio column <br />
              The future of audio and acoustics
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section6

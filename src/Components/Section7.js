import React from 'react'

function Section7() {
  return (
    <>
      <div className="w-full h-[810px]  flex">
        <div className="w-2/3 h-full flex flex-col ">
          <div className=" border-x-0  border-y-0 flex relative w-full h-2/3 border-2 border-white text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://s1.1zoom.ru/big3/461/BMW_Concept_Coupe_473225.jpg"
                alt=""
                className=" w-full h-full object-cover  group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              BMW
              <br />
              Gran Couple
            </div>
          </div>
          <div className=" flex h-1/3 w-full">
            <div className=" flex relative h-full w-1/2 border-2 border-white border-x-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <video
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/with-yamanashi02-ix/com_220303_withbmw_yamanashi_hd.mp4"
                  className="w-full h-full object-cover"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                ></video>
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                Sustainable Journey <br />
                Discover Japan with a horticulturist and the BMW iX
              </div>
            </div>

            <div className=" flex relative h-full w-1/2 border-2 border-white border-r-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <video
                  src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/fwd-01-stage-hd.mp4"
                  className="w-full h-full object-cover"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                ></video>
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                THIS IS FORWARDISM
                <br />
                An audio series with the shapers of future
              </div>
            </div>
          </div>
        </div>

        <div className="w-[33%] h-full ">
          <div className=" flex relative h-1/3 w-full border-2 border-white border-y-0 border-r-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/events/dreams/220531_BMW_iX1_lower_images_Desktop_1920x1080.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              The iX Metaverse Experience <br />
              Enter a world full of dreams
            </div>
          </div>

          <div className=" flex relative h-1/3 w-full border-2 border-white border-r-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/Finest-Fabrics/ff-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit  text-black">
              Looks meet feel
              <br />
              luxurious comfort zone; the magic fabric <br />
              materials
            </div>
          </div>
          <div className=" flex relative h-1/3 w-full border-2 border-white border-r-0  text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/Norwegen-roadtrip/ang-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Audio column
              <br />
              The future of circularity
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section7

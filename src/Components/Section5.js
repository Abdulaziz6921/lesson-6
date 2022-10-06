import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

function Section5() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[280px] ">
        <p className="text-[37px] font-[400]">BMW in your country</p>
        <p className="text-[75px] font-[500]">ALL BMW MODELS</p>
        <p className="text-[33px] font-[600] flex justify-center items-center">
          <FiChevronRight /> Find your BMW
        </p>
      </div>

      <div className="w-full h-[810px]  flex">
        <div className="w-2/3 h-full flex flex-col ">
          <div className=" flex relative w-full h-2/3 border-2 border-white text-white border-l-0  border-b-0 group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/kasper-sage/ks-00-teaser-hd.jpg?imwidth=1280"
                alt=""
                className=" w-full h-full object-cover  group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Audio column <br />
              The future of industrial technology trends
            </div>
          </div>
          <div className=" flex h-1/3 w-full">
            <div className=" flex relative h-full w-1/2 border-2 border-white border-x-0 border-b-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <img
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/Giorgio-Giugiaro-meets-Adrian-van-Hooydonk/gg-00-teaser-hd.jpg?imwidth=768"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
                />
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                Car design <br />
                Masters of form
              </div>
            </div>

            <div className=" flex relative h-full w-1/2 border-2 border-white text-white  border-b-0 group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <img
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/neerpasch/np-00-teaser-hd.jpg?imwidth=768"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
                />
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                BMW M legend
                <br />
                Jochen Neerpasch: the motosport mentor
              </div>
            </div>
          </div>
        </div>

        <div className="w-[33%] h-full">
          <div className=" flex relative h-1/3 w-full border-2 border-white border-x-0 border-b-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <video
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/with-kyoto-320d/withbmw_kyoto_hd_movie.mp4"
                className="w-full h-full object-cover"
                autoPlay={true}
                loop={true}
                muted={true}
              ></video>
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Dynamic connection <br />
              Discover Japan with a textile artist and the BMW 3 <br />
              Series
            </div>
          </div>

          <div className=" flex relative h-1/3 w-full border-2 border-white border-x-0 border-b-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/european-championships/ec-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Driven by your cheers
              <br />
              The dawn of an electric era
            </div>
          </div>
          <div className=" flex relative h-1/3 w-full border-x-0 border-t-white border-2 border-b-0 text-white   group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden border-r-0">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/tantris/ts-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              New luxury <br />
              Tantris starred restaurant: the future of indulgence
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5

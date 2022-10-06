import React from 'react'

function Section8() {
  return (
    <>
      <div className="w-full h-[810px]  flex flex-row-reverse">
        <div className="w-2/3 h-full flex flex-col ">
          <div className=" flex relative w-full h-2/3 text-white  border-l-white border-2 group border-y-0 border-r-0">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/cannes/cs-00-teaser-hd.jpg?imwidth=1280"
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
            <div className=" flex relative h-full w-1/2 border-2 border-white border-r-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <img
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/doja/dj-00-teaser-hd.jpg?imwidth=768"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
                />
              </div>
              <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
                Car design <br />
                Masters of form
              </div>
            </div>

            <div className=" flex relative h-full w-1/2 border-2 border-white border-r-0 text-white   group ">
              <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
                <img
                  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/sustainability/linari-1/al-000-teaser-hd.jpg?imwidth=768"
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

        <div className="w-1/3 h-full ">
          <div className=" flex relative h-1/3 w-full border-2 border-white text-white border-x-0  border-t-0 group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/performance/milestones/ms-00-teaser-hd.jpg?imwidth=768"
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-[7s]"
              />
            </div>
            <div className="absolute z-20 bottom-6 left-6 w-fit h-fit ">
              Dynamic connection <br />
              Discover Japan with a textile artist and the BMW 3 <br />
              Series
            </div>
          </div>

          <div className=" flex relative h-1/3 w-full border-2 border-white text-white  border-x-0 group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/NickKnight/nk-00-teaser-hd.jpg?imwidth=768"
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
          <div className=" flex relative h-1/3 w-full border-2 border-white text-white  border-x-0 group ">
            <div className=" w-full h-full absolute  z-10 group-hover:brightness-[60%] duration-[3s] group-hover:duration-[3s]  overflow-hidden">
              <img
                src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/swarosvki-i7/sw-00-teaser-hd1.jpg?imwidth=768"
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

      <div className="flex justify-center items-center w-full h-[140px]">
        <button className="w-[320px] h-[50px] border-2 border-black font-[700]">
          Show More
        </button>
      </div>
    </>
  )
}

export default Section8

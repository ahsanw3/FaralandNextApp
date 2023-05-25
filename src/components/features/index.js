import Card from "./Card";
import left from '../../assets/features/images/features-prev.847ecbee.svg'
import React from "react";
import right from '../../assets/features/images/features-next.c601439a.svg'
import Image from "next/image";

const Features = () => {

  return (
      <div className="flex flex-col justify-center text-white mt-72">
        <div className="flex text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan justify-center p-4">Features</div>
        <div>
          <div className="relative w-[71%] m-auto">
            <div className="h-[420px] w-full m-auto flex flex-wrap overflow-hidden justify-center relative">
              {[...Array(10)].map((_, i) => {
                return (
                  <div key={i} >
                    <Card />

                  </div>
                );
              })}
            </div>

            <button className="absolute -right-10 top-[40%] disabled opacity-70 hover:cursor-auto">
              <Image src={right} alt="" />
            </button>
            <button className="absolute -left-10 top-[40%] disabled opacity-70 hover:cursor-auto">
              <Image src={left} alt="" />
            </button>

          </div>
        </div>
      </div>
  
  );
};

export default Features
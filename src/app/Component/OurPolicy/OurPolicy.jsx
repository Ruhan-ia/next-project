import Image from "next/image";
import React from "react";
import pic1 from "../../../../public/image/latte-hot-hand-coffee-cup.jpg";
import pic2 from "../../../../public/image/cheerful-barista-with-hot-drink.jpg";
const OurPolicy = () => {
  return (
    <div className="mt-20 relative">
      <div className="grid   lg:grid-cols-2 w-auto  rounded-2xl">
        <div >
          <div className="avatar">
            <div className="w-auto rounded">
              <Image
               className= " overflow-hidden transition delay-150 duration-300 ease-in-out  hover:scale-110"
                src={pic2}
               
                alt="poster"
              ></Image>{" "}
            </div>
          </div>
        </div>
        <div >
          
        <div className="avatar">
            <div className="w-auto rounded">
              <Image
                className= " overflow-hidden transition delay-150 duration-300 ease-in-out  hover:scale-110  "
                src={pic1}
               
                alt="poster"
              ></Image>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="border-2 border-white/100 p-5">

        <div className="bg-white/20  flex-row justify-items-center backdrop-blur-md p-12 rounded-lg shadow-lg border border-white/10">
          <h2 className="text-3xl font-bold text-white">The Organic Coffee</h2>
          <p className="text-white/80 text-xl font-italic ">Just For You</p>
          <button className="text-white/80  border-b-2">Click Here</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurPolicy;

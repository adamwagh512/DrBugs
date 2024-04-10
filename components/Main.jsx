import React from "react";
import hero from "../public/assets/hero1.jpg";
import Image from "next/image";

const Main = () => {
  return (
    <div>
      {/* Little extra padding */}
      <div className="pt-[9vh]"></div>
      <div
        id="home"
        className="h-[70vh] flex justify-center relative lg:mx-[10vw]"
      >
        <Image src={hero} alt="/" fill={true} />
      </div>
    </div>
  );
};

export default Main;

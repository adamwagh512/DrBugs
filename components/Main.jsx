import React from "react";
import hero from "../public/assets/hero.jpeg";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="pt-[9vh] w-[100vw] h-[70vh] flex justify-center relative">
      <Image src={hero} alt="/" fill={true} />
    </div>
  );
};

export default Main;

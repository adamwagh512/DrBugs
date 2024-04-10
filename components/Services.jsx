// pages/index.js
import React from "react";
import cockroach from "../public/assets/cockroach.jpg";
import ant from "../public/assets/ant.jpg";
import mouse from "../public/assets/mouse.jpg";
import spider from "../public/assets/spider.jpg";
import mosquito from "../public/assets/mosquito.jpg";
import cricket from "../public/assets/cricket.jpg";
import fly from "../public/assets/fly.jpg";
import rat from "../public/assets/rat.jpg";
import tech from "../public/assets/tech.jpg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="pt-6" id="services">
      <div className="pt-12">
        <div className="p-4">
          <h2>Services Provided</h2>
          {/* <p className="text-lg py-2">Services that Make Bugs Say, "No Thanks!" and You Say "Yes, Please!" </p>
<p>Welcome to the Dr. Bugs Bug-Banishing Extravaganza!</p> */}
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300">
              {/* Use the next/image component */}
              <Image src={cockroach} className="h-[30vh]" />

              <h2 className="text-xl font-semibold mb-2">
              Roach, Ant and Cricket Treatment Options
              </h2>
              {/* <p className="text-gray-600">
                {" "}
                Watch those cockroaches scatter as we implement our Roach
                Runaway Plan. Say goodbye to surprise kitchen visits and hello
                to a roach-free zone!{" "}
              </p> */}
            </div>
          </div>

          {/* <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300">
              <Image src={ant} className="h-[30vh]" />

              <h2 className="text-xl font-semibold mb-2">
                {" "}
                Ant Avengers Unleashed:{" "}
              </h2>
              <p className="text-gray-600">
                {" "}
                Tired of ant highways in your home? Our Ant Avengers are on the
                scene, ready to disrupt their picnic plans and restore your
                kitchen's order!{" "}
              </p>
            </div>
          </div> */}

          <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300 xl:">
              {/* Use the next/image component */}
              <Image className="h-[30vh]" src={mouse} />
              <h2 className="text-xl font-semibold ">
                Rodent extermination and exclusion
              </h2>
              {/* <p className="text-gray-600">
                Those mice won't stand a chance against our Mouse Mission
                Impossible team. From stealthy traps to ingenious strategies,
                we'll make sure your cheese stash is safe and sound.{" "}
              </p> */}
            </div>
          </div>

       

          <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300">
              {/* Use the next/image component */}
              <Image className="h-[30vh]" src={mosquito} />
              <h2 className="text-xl font-semibold mb-2">Mosquito Control and Prevention</h2>
              {/* <p className="text-gray-600">
                Don't let mosquitoes turn your backyard into a no-fly zone. Our
                Mosquito Meltdown treatment will have you enjoying your outdoor
                oasis bug-bite free!{" "}
              </p> */}
            </div>
          </div>

          {/* <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300"> */}
              {/* Use the next/image component */}
              {/* <Image className="h-[30vh]" src={cricket} />
              <h2 className="text-xl font-semibold mb-2">
                Cricket Carnival Exit:
              </h2>
              <p className="text-gray-600">
                If crickets are throwing a loud party in your home, it's time
                for their eviction notice. Our Cricket Carnival Exit will
                restore peace and quiet in no time.{" "}
              </p>
            </div>
          </div> */}

          <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300 pb-10">
              {/* Use the next/image component */}
              <Image className="h-[30vh]" src={fly} />
              <h2 className="text-xl font-semibold mb-2">Fly and Other Insect Extermination</h2>
              {/* <p className="text-gray-600">
                Flies bugging you during meals? Our Fly Away Home program will
                ensure your dining experience is fly-free and enjoyable.{" "}
              </p> */}
            </div>
          </div>

          {/* <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300 pb-10">
              <Image className="h-[30vh]" src={rat} />
              <h2 className="text-xl font-semibold mb-2">
                Rat Race Eliminator:{" "}
              </h2>
              <p className="text-gray-600">
                Say farewell to the rat race in your attic or basement. Our Rat
                Race Eliminator will restore your space to a rodent-free zone.{" "}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-300">
              <Image className="h-[30vh]" src={tech} />
              <h2 className="text-xl font-semibold mb-2">
                Tech-Savvy Pest Control:{" "}
              </h2>
              <p className="text-gray-600">
                {" "}
                Introducing the future of pest control! Our Tech-Savvy Pest
                Control utilizes cutting-edge technology to detect, prevent, and
                eliminate pests with the power of innovation.{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;

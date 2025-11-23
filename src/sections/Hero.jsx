import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import HeroExperince from "../components/HeroExperince";
import { useState } from "react";



const Hero = () => {

  const [showModal, setShowModal] = useState(false);

  const downloadFile = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };  

  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 px-10"
    >
          <GradientSpheres sphere1Class={"gradient-sphere sphere-1"} sphere2Class={"gradient-sphere sphere-2"} />  
      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">

          <div className="md:mt-20 mt-20">
            <p className="font-medium md:text-2xl text-base">
              👋 Hey, I'm Here
            </p>
            <h1 className="font-bold md:text-8xl text-5xl">
              INDUWARA MIHISARA
            </h1>
            <h1 className="font-bold md:text-8xl text-5xl">PORTFOLIO</h1>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 px-3 py-2 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer relative z-10"
          >
            CV ⬇
          </button>

          <div className="absolute w-full z-30 bottom-30 right-0">
            <div className="flex justify-between items-end">
              <a href="#about">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                  <p className="md:text-base text-xs">Explore</p>
                <img className='size-7 animate-bounce'src="images/arrowdown.svg" alt="arrowdown" />
              </div>
              </a>
              <div className="flex flex-col items-end">
                <img src="images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-5xl text-4xl">Se&DevOps</h1>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <HeroExperince />

      </div>
     
      {showModal && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
  >
    <div
      className="w-[90%] max-w-md p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center"
      style={{
        backgroundColor: "var(--color-black-100)",
        color: "var(--color-white-50)",
        fontFamily: "aeonik",
      }}
    >
      <h2 className="text-3xl font-extrabold mb-3 text-center tracking-wide">
        Download CV
      </h2>
      <p className="text-center mb-6 text-gray-300">
        Choose the CV you want to download:
      </p>

      <div className="flex flex-col gap-4 w-full">
        <button
          onClick={() => downloadFile("/cv/Software_Engineer_Intern_CV.pdf")}
          className="w-full py-3 rounded-2xl font-semibold text-white transform transition-transform duration-300 hover:scale-105 shadow-lg"
          style={{
            background: "linear-gradient(90deg, var(--color-blue-300), #4f9fff)",
          }}
        >
          Download SE CV
        </button>

        <button
          onClick={() => downloadFile("/cv/DevOps_Engineer_Intern_CV.pdf")}
          className="w-full py-3 rounded-2xl font-semibold text-white transform transition-transform duration-300 hover:scale-105 shadow-lg"
          style={{
            background: "linear-gradient(90deg, var(--color-pink-100), #ff7acc)",
          }}
        >
          Download DevOps CV
        </button>
      </div>

      <button
        onClick={() => setShowModal(false)}
        className="mt-6 w-full py-3 font-medium rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 text-center"
        style={{ color: "var(--color-primary)" }}
      >
        Cancel
      </button>
    </div>
  </div>
)}



    </section>
  );
};

export default Hero;

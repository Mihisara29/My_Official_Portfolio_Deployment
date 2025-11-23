import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    //Slide-in animation for cards
    gsap.fromTo(
      "#card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
        },
      }
    );

    //staggered text animations
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
  }, []);

  return (
    <section id="about" className="flex-center relative px-10 mb-30 md:mt-20 mt-10 scroll-mt-[70px]">
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
       
      <div className="container w-full h-full relative z-10">

        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />

        <div className="md:mt-20 mt-10">
        <div className="grid grid-cols-12 gap-5 items-start">
          {/* About / Intro */}
          <div className="md:col-span-7 col-span-12">
            <div className="bg-black-300 rounded-2xl p-7 w-full">
              <div>
                <img
                  src="/images/flower.svg"
                  alt="flower"
                  className="md:w-32 w-16 flower"
                />
              </div>
              <div className="mt-5">
                <h1 className="md:text-5xl text-3xl">Induwara Mihisara</h1>
                <p className="md:text-2xl mt-2">
                  A highly motivated Software Engineering undergraduate with
                  strong hands-on experience in full-stack development, DevOps
                  practices, and cloud technologies. Passionate about solving
                  real-world problems, building scalable systems, and
                  continuously learning modern tools. Skilled in collaboration,
                  creative thinking, and delivering high-quality software
                  through practical, project-based learning.
                </p>
              </div>
            </div>
          </div>

          {/* 3D cute alien */}
          <div className="md:col-span-5 col-span-12 w-full md:h-full">
            <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
              <div className="w-full h-full">
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                  <OrbitControls enableZoom={false} />
                  <Alien
                    scale={2}
                    position={[0, -5, 0]}
                    rotation={[0, -0.5, 0]}
                  />
                </Canvas>
              </div>
            </div>
          </div>

          {/* Software Engineering Card */}
          <div id="card" className="md:col-span-6 col-span-12">
            <div className="bg-black-300 rounded-2xl p-7 w-full font-medium">
              <div className="flex flex-col justify-center gap-2">
                <h1 className="gradient-title md:text-3xl text-2xl animated-text">
                  Software Engineering
                </h1>
                <p className="md:text-2xl max-w-96 animated-text">
                  Clean, quality coding with modern tech and design principles.
                </p>
              </div>
            </div>
          </div>

          {/* DevOps Card */}
          <div id="card" className="md:col-span-6 col-span-12">
            <div className="bg-black-300 rounded-2xl p-7 w-full font-medium">
              <div className="flex flex-col justify-center gap-2">
                <h1 className="gradient-title md:text-3xl text-2xl animated-text">
                  DevOps Engineering
                </h1>
                <p className="md:text-2xl max-w-105 animated-text">
                  Scalable, maintainable, and efficient software with modern
                  tech.
                </p>
              </div>
            </div>
          </div>

          {/* Motivation Cards */}
          <div id="card" className="md:col-span-4 col-span-12">
            <div className="bg-black-300 rounded-2xl p-7 w-full font-medium flex flex-col gap-4">
              <div className="flex flex-col justify-between h-full">
                {["BE YOURSELF!", "BE DIFFERENT!", "BUILD DIFFERENT!"].map(
                  (motio, index) => (
                    <h1
                      key={index}
                      className="gradient-title md:text-3xl text-2xl font-bold animated-text"
                    >
                      {motio}
                    </h1>
                  )
                )}
              </div>
            </div>
          </div>

          {/* bento social links */}
          {bentoSocialLinks.map((item, index) => (
            <div key={index} className="md:col-span-2 col-span-4 row-span-2">
              <div className="bg-black-300 rounded-2xl p-7  h-full group cursor-pointer flex align-items-center justify-center gap-5 transition-colors">
                <div>
                  <div className="flex items-center h-full">
                    <a href={item.href}
                         target="_blank">
                        <img src={item.icon} alt={item.icon} />
                      </a>
                    <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <a href={item.href}
                         target="_blank"
                      >
                        <img
                        src="/images/arrowupright.svg"
                        alt="arrow-up"
                        className="md:scale-100 scale-50"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>  

      

      
    </section>
  );
};

export default About;

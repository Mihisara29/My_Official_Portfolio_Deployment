import React from 'react'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import Carousel from '../components/Carousel'
import { SeSlides } from '../constants'
import { DevOpsSlides } from '../constants'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";




const Project = () => {
  
  useGSAP(() => {
  gsap.from(".project-section", {
    scrollTrigger: {
      trigger: ".project-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out",
  });
  gsap.from(".project-title-1", {
    scrollTrigger: {
      trigger: ".project-section",
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
  });
  gsap.from(".project-carousel-1", {
    scrollTrigger: {
      trigger: ".project-carousel-1",
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
  });


  gsap.from(".project-title-2", {
    scrollTrigger: {
      trigger: ".project-section",
      start: "top 60%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
  });

  gsap.from(".project-carousel-2", {
    scrollTrigger: {
      trigger: ".project-carousel-2",
      start: "top 75%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
  });
}, []);


  return (
    <section className='project-section w-full h-full flex-center relative md:my-60 my-30 scroll-mt-[70px]' id='projects'>
      <GradientSpheres 
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      
    <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container px-10 md:mb-10 mb-0 project-title-1">
          <TitleHeader
            title="SE PROJECTS"
            number="04"
            text="Check my recent project brloe for your Goal."
          />
        </div>
        <div className='md:mt-20 mt-10 project-carousel-1'>
           <Carousel slides={SeSlides} sliderItem="slider_item_se"/>
        </div>
    </div>

        <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container px-10 md:mb-10 mb-0 project-title-2">
          <TitleHeader
            title="DevOps PROJECTS"
            number="05"
            text="Check my recent project brloe for your Goal."
          />
        </div>
        <div className='md:mt-20 mt-10 project-carousel-2'>
           <Carousel slides={DevOpsSlides} sliderItem="slider_item_devOps"/>
        </div>
    </div>
    </section>
  )
}

export default Project
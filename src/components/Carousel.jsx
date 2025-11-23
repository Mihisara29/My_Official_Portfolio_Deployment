import React, { useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

const Carousel = ({ slides, sliderItem }) => {
  // Each carousel has its own currentSlide
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides.length - 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (slides.length - 1)) % (slides.length - 1))
  }

  useGSAP(() => {
    gsap.to(`.${sliderItem}`, {
      x: `-${currentSlide * 63}vw`,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
    })

    gsap.fromTo(
      `.${sliderItem}:nth-child(${currentSlide + 2}) img`,
      { scale: 2 },
      { scale: 1, duration: 1, ease: "power2.out" }
    )
  }, [currentSlide, sliderItem])

  return (
    <div className='relative flex flex-col items-center'>
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[40vh] mb-40vh">
        <div className="w-full -left-[43vw] top-0 absolute">
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[40vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div key={index} className={`${sliderItem} w-[60vw] h-full flex-none relative overflow-hidden`}>
                <img src={slide.img} alt="slide" className='w-full h-full object-cover object-center'/>

                <div className='absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5'>
                  <div className='flex justify-between h-full items-center'>
                    <div className='flex gap-2 justify-center'>
                      <p>{slide.id}.</p>
                      <p>{slide.title}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                      <p>Preview Project</p>
                      <a href={slide.link} target="_blank" rel="noopener noreferrer"
                        className="inline-block transition-transform duration-300 hover:scale-130 hover:opacity-80"
                      >
                        <img className='md:size-10 size-7' src="/images/arrowupright.svg" alt="arrowup" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-white-50 flex justify-between gap-5">
        <div onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-blue-950 active:scale-90 transition-all w-12 h-12 flex items-center justify-center"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
        </div>

        <div onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-blue-950 active:scale-90 transition-all w-12 h-12 flex items-center justify-center"
        >
          <img src="/images/CaretRight.svg" alt="right" className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default Carousel

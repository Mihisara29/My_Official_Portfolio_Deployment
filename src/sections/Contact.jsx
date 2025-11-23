import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactForm from '../components/ContactForm'
import ContactExperience from '../components/ContactExperience'

const Contact = () => {
  return (
    <section id='contact'
             className='flex justify-center relative px-10 scroll-mt-[70px]'
    >
      <div className="w-full h-full container md:my-0 my-10">
        <TitleHeader
            title="CONTACT ME"
            number="06"
            text="Let's collaborate on tailored, sustainable solutions."
          />

          <div className="mt-20">
            <div className="grid grid-cols-12">
              <div className="md:col-span-5 col-span-12">
                <ContactForm />
              </div>
              <div className="md:col-span-7 col-span-12">
                <div className="w-full h-full md:m-0 -mt-1000">
                    <ContactExperience />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact
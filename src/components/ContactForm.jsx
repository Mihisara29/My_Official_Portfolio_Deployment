import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import * as Z from "zod";
import { zodResolver} from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


const ContactForm = () => {

  const initialValues = {
    name: '',
    email:'',
    subject:'',
    message:'',  
  }

const contactFormSchema = Z.object({
  name: Z.string().nonempty("Name is required"),
  email: Z.string().email({ message: "Invalid email" }),
  subject: Z.string().nonempty("Subject is required"),
  message: Z.string().nonempty("Message is required")
})


  const {register,handleSubmit,formState: {errors},reset} = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  })

  const [loading, setLoading] = useState(false);

  const onSubmit = async(data) => {
    setLoading(true);
    try {
      const payload = {
        title:data.subject,
        name:data.name,
        email:data.email,
        message:data.message,
        time: new Date().toLocaleString(), 
      }
      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID,templateID,payload,{
        publicKey:userID,
      })

      toast.success("Message sent successfully! 🎉");

    } catch (error) {
      console.log("FAILED...",error)
      toast.error("Failed to send message. Please try again!");
    } finally {
      setLoading(false);
      reset(initialValues);
    }
  }

  useEffect(()=>{
      console.log(errors)
  },[errors])

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full text-primary flex flex-col gap-7'>
        <div>
            <label htmlFor="name" className='label'>Name</label>
            <input
             {...register("name")} 
             type="text" id='name' placeholder='Alex' className='input' />
             {
              errors.name && (
                <span className='text-red-500'>{errors.name.message}</span>
              )
             }
        </div>

                <div>
            <label htmlFor="email" className='label'>Email</label>
            <input
             {...register("email")} 
             type="text" id='email' placeholder='alex@gmail.com' className='input' />
             {
              errors.email && (
                <span className='text-red-500'>{errors.email.message}</span>
              )
             }
        </div>

                <div>
            <label htmlFor="subject" className='label'>Subject</label>
            <input
             {...register("subject")}  
            type="text" id='subject' placeholder='Alex' className='input' />
            {
              errors.subject && (
                <span className='text-red-500'>{errors.subject.message}</span>
              )
             }
        </div>

                <div>
            <label htmlFor="message" className='label'>Message</label>
            <textarea
             {...register("message")} 
             type="text"
             id='name' placeholder='Alex' rows={5}
             className='input' />
             {
              errors.message && (
                <span className='text-red-500'>{errors.message.message}</span>
              )
             }
        </div>

        <button type='sabmit'
        disabled={loading}
        className='w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer disabled:opacity-70'>{loading ? "Loading..." : "Send Message"}</button>
      </form>
    </div>
  )
}

export default ContactForm 
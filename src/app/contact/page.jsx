"use client"
import {motion} from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
const ContactPage = () => {
  const text = "Hello Everyone"
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl">
            <div>
                {text.split("").map((letter,index)=>(
                  <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3,repeat:Infinity,delay:index*0.1}}>{letter}</motion.span>
                ))}
            </div>
        </div>
        {/* FORM CONTAINER */}
        <form onSubmit={sendEmail} ref={form} className="h-full lg:h-full lg:w-1/2 ring-2 ring-black rounded-xl text-xl flex flex-col gap-8 justify-center p-24 ">
            <span className="text-3xl font-bold md:text-2xl lg:text-3xl xl:text-4xl flex items-center justify-center mb-10">Contact Me!</span>
            <span>Your Name:</span>                    
            <input type="text" name="name" className="bg-transparent border-b-2 border-b-black outline-none" required/>
            <span>Your Email:</span>                    
            <input type="text" name="email" className="bg-transparent border-b-2 border-b-black outline-none" required/>
            <span>Message:</span>                    
            <input type="text" name="message" className="bg-transparent border-b-2 border-b-black outline-none" required/>
            <button className="bg-green-300 rounded font-semibold text-gray-600 p-4">Send</button>
            {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
            {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
    
  )
}

export default ContactPage
"use client"
import {motion, useScroll, useTransform, useInView} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react"

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6778658/pexels-photo-6778658.jpeg?auto=compress&cs=tinysrgb&w=600",
    
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Landing Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600",
    
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Javascript Travel App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600",
    
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "PHP PDO CURD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/3995905/pexels-photo-3995905.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    
  },
];



const PortfolioPage = () => {

  const ref = useRef();
 

  const imgRef = useRef();
  const isImgRefInView = useInView(imgRef);

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"],
   
  });

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} ref={ref}>
      <div className="h-full relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center relative overflow-hidden">
          
          <motion.h1 style={{translateY: yText}} className="flex items-center justify-center text-center z-10 font-title text-gray-900 text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl">My Works</motion.h1>

          <motion.div className="bg-mountains sm:bg-contain sm:bg-no-repeat md:bg-contain md:bg-no-repeat xl:bg-cover bg-contain bg-no-repeat bg-bottom absolute h-full w-full z-10"></motion.div>
          <motion.div style={{translateY: yBg}} className="bg-planets bg-bottom absolute h-full w-full z-2 sm:bg-contain sm:bg-no-repeat md:bg-contain md:bg-no-repeat xl:bg-cover bg-contain bg-no-repeat"></motion.div>
          <motion.div style={{x: yBg}} className="bg-stars bg-cover absolute h-full w-full z-1"></motion.div>

          

        </div>

       

        

<div class="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-gray-700 to-black" ref={imgRef}>
  <motion.h1 className="flex justify-center items-center text-5xl text-indigo-100 py-5 font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" initial={{ x: "-1200px" }} animate={isImgRefInView ? {x:"0"} : {}} transition={{delay:0.3}}>PROJECT</motion.h1>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" >
    {items.map(item => (
      <div
        key={item.id}
        class={`group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ${item.color}`}
      >
        <motion.div class="h-96 w-80" initial={{ x: "-300px" }} animate={isImgRefInView ? {x:"0"} : {}} transition={{delay:0.2}}> 
          <img
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={item.img}
            alt=""
            
          />
        </motion.div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white p-3">{item.title}</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {item.desc.length > 40 ? `${item.desc.slice(0, 40)}...` : item.desc}
          </p>

          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>

    </motion.div>
    
  )
}

export default PortfolioPage
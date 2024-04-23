"use client"
import Brain from "@/components/Brain"
import { motion, useScroll, useInView } from "framer-motion"
import { useRef } from "react"
const AboutPage = () => {

  const containerRef = useRef();
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);

  const {scrollYProgress} = useScroll({container:containerRef});

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}> 
      {/* TEXT CONTAINER  */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
        {/* BIOGRAPHY CONTAINER  */}
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="font-bold text-2xl">ABOUT ME</h1>
          <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam accusamus in ex nisi minus cum repellat odio? Nemo suscipit, vel repudiandae hic quam perspiciatis. Amet incidunt dolor, ipsam adipisci cupiditate vel voluptatem, quas vero in soluta impedit dignissimos inventore ab nihil asperiores est unde provident. Fuga libero possimus ut tempore.</p>          

        </div>
        {/* SKILLS CONTAINER  */}
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
          <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? {x:"0"} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
          {/* SKILLS LIST */}
          <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? {x:"0"} : {}} className=" flex gap-4 flex-wrap">
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Javascript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PHP</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MySQL</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Laravel</div>
            
          </motion.div>
           {/* SKILLS SCROLL SVG */}
        </div>
        {/* EXPERIENCE CONTAINER */}
        <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
        {/* EXPERIENCE TITLE*/}
          <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div initial={{ x: "-300px" }} animate={isExperienceRefInView ? {x:"0"} : {}} className="">
          {/* EXPERIENCE LIST ITEM  */}
          <div className="flex justify-between h-48">
            {/* LEFT  */}
            <div className="w-1/3">
              {/* JOB TITLE  */}
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Web Developer</div>
              {/* JOB DESC  */}
              <div className="p-3 text-sm italic">My current employment Wat better than the position before</div>
              {/* JOB DATE  */}
              <div className="p-3 text-black text-sm font-semibold">2022-2023</div>
              {/* JOB COMPANY  */}
              <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Mega Planet</div>
            </div>
            {/* CENTER  */}
            <div className="w-1/6">
              {/* LINE  */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3"></div>
          </div>

          {/* EXPERIENCE LIST ITEM  */}
          <div className="flex justify-between h-48">
            {/* LEFT  */}
            <div className="w-1/3">
              
            </div>
            {/* CENTER  */}
            <div className="w-1/6">
              {/* LINE  */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3">
              {/* JOB TITLE  */}
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Freelancer</div>
              {/* JOB DESC  */}
              <div className="p-3 text-sm italic">My current employment Wat better than the position before</div>
              {/* JOB DATE  */}
              <div className="p-3 text-black text-sm font-semibold">2022-2023</div>
             
            </div>
          </div>

          </motion.div>
        </div>
      </div>
      {/* SVG CONTAINER  */}
      <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress}/>
      </div>
      </div>
    </motion.div>
    
  )
}

export default AboutPage
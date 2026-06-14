"use client";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion"

export default function About() {
  return (
    <>
    <div id="about" className=" my-15 bg-gray-800 px-6 md:px-20">
      <div className="text-white md:flex-row flex flex-col  ">
        
        {/* TEXT SECTION */}
      <motion.div
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
         className="w-full md:w-1/2 max-w-2xl"
      >
          <h1 className="text-red-400 text-3xl font-playfair font-bold">
            FRONTEND WEB DEVELOPER
          </h1>

          <h1 className="font-extrabold my-5 font-playfair text-4xl  md:text-5xl">
            Hello, my name is Adunade Asiwaju
          </h1>

          <p className="leading-8 text-lg">
            Experienced Front-end Developer, passionate about building modern,
            responsive, and user-focused web applications and websites using
            advanced <u className=" decoration-red-400 decoration-2">HTML </u>, <u className=" decoration-red-400 decoration-2"> Tailwind CSS</u>, <u className=" decoration-red-400 decoration-2">Next.js</u>, <u className=" decoration-red-400 decoration-2">TypeScript</u>, and modern UI
            technologies, with a strong focus on clean design, performance, and
            scalability.
          </p>
          <p className="mt-4 text-lg">Stick around to see some of my work.</p>
           {/* view my works button  */}
          <button className="bg-red-300 flex items-center gap-2  hover:bg-red-400 text-black px-6 py-2 my-7 cursor-pointer rounded-md ">
          <Link 
             href="/projects"
          > 
             View my works
          </Link>
          <ArrowRight size={25}/>
           </button>
      </motion.div>

        {/* IMAGE SECTION */}
      <motion.div
         initial={{ opacity: 0, x: -80 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
        className="md:w-1/2 md:h-100 h-75 flex mt-5 md:justify-end"
      >
          <Image
            src="/svgs/my image.png"
            alt="my picture"
            width={500}
            height={200}
            className="rounded-lg"
          />
      </motion.div>
      </div>
    </div>
      <hr className="border-red-300 border-2 w-full" />
    </>
  );
}

"use client";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Projects() {
  const projects = [
  {
    id: 1,
    title: "Quiz App",
    description:"A responsive Quiz App with topic based questions.It enables users to answer questions and get instant score feedbacks with realtime countdown timers. It also secures user authentication.",
    tools: ["HTML", "Tailwind CSS", "TypeScript", "Next.js", "Firebase"],
    image: "/svgs/quizapp.png",
    link: "https://myquizapp-beige.vercel.app/",
  },

  {
    id: 2,
    title: "E-commerce Website",
    description: "This is a modern and responsive E-commerce Website. It allows users to search products, view product details, add products to cart, remove products from cart, and manage their shopping experience seamlessly.",
    tools: ["HTML", "Tailwind CSS", "TypeScript", "Next.js"],
    image: "/svgs/ecommerce.png",
    link: "https://adune-commercewebsite.netlify.app/",
  },

  {
    id:3,
    title: "BudgetPal",
    description:"This is a budget tracker that helps you track your income and expenses, understand where your money goes and organize your spending habits.",
    tools: ["HTML", "Tailwind CSS", "TypeScript", "Next.js", "Firebase"],
    image: "/svgs/budgetpalimg.png",
    link: "https://budgetpaltracker.netlify.app/",
  }
];
  return (
    <>
    <div id="projects" className="w-full bg-gray-800 text-white mt-10">
      <div className="mx-auto px-6 md:px-20">
        <div className="flex items-center gap-2">
          <hr className="border-red-300 border-2 w-10" />
          <h1 className="text-xl">Projects</h1>
        </div>
         <p className="my-4">Here are some of the projects I have worked on :</p>

       {/* projects section */}
        {projects.map((project, index) => (
        <motion.div
           key={project.id}
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: index * 0.05 }}
           viewport={{once: true, amount: 0.2 }}
           className="mb-10"
        >
          <div className="flex md:flex-row flex-col justify-between gap-10">
      
            {/* TEXT PART */}
            <div className="w-full md:w-2/3 max-w-2xl">
              <h1 className="font-bold text-xl mb-3 font-playfair text-red-300">
               {project.title}
              </h1>

            <p className="leading-7">
               {project.description}
            </p>

            <h1 className="underline decoration-red-300 decoration-3 my-3">
              Tools:
            </h1>

              <ul className="leading-8">
                {project.tools.map((tool, i) => (
               <li key={i}>{tool}</li>
        ))}
               </ul>

             {/* view project button  */}
            <a 
             href={project.link}
             className="bg-red-300 hover:bg-red-400 cursor-pointer text-black px-4 mt-4 py-2 rounded-md inline-block font-medium transition-colors"
            >
              View Project
            </a>
        </div>

      {/* IMAGE PART */}
      <div className="md:mx-0 mx-auto">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={100}
          priority={false}
          loading="lazy"
          className="rounded-lg"
        />
      </div>
    </div>
  </motion.div>
))}
      </div>
    </div>
    <hr className="border-red-300 border-2 w-full" />
    </>
  );
}


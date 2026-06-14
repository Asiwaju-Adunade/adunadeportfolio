import Image from "next/image";
import {Card} from "@/components/ui/card";
import {motion} from "framer-motion"

export default function Skills() {
const skillData = [
  { id: 1,
    title: "HTML",
    image:"/svgs/html-5.png"
  },

  { 
    id: 2,
    title: "CSS",
    image:"/svgs/css.png"
  },
  
  { 
    id: 3,
    title: "Tailwind CSS",
    image:"/svgs/tailwind.png"
  },

  { 
    id: 4,
    title: "JavaScript",
    image:"/svgs/java-script.png"
  },
  
  { 
    id: 5,
    title: "React.js",
    image:"/svgs/react.png"
  },

  { 
    id: 6,
    title: "TypeScript",
    image:"/svgs/typescript.png"
  },

  { 
    id: 7,
    title: "Next.js",
    image:"/svgs/next.svg"
  },
  
  { 
    id: 8,
    title: "Firebase",
    image:"/svgs/firebase.png"
  },

  { 
    id: 9,
    title: "Git & GitHub",
    image:"/svgs/github.png"
  },

  { 
    id: 10,
    title: "Netlify",
    image:"/svgs/netlify.png"
  },

  { 
    id: 11,
    title: "Vercel",
    image:"/svgs/vercel.svg"
  },
]
  return (
    <>
        <div id="skills" className="w-full bg-gray-700 text-white py-15">
          <div className=" mx-auto px-3 md:px-20">
                <div className="flex items-center gap-2">
                 <hr className="border-red-300 border-2 w-10" />
                 <h1 className="text-xl"> Skills & Tools</h1>
                </div>
                {/* skills and tools images part */}
            <div className="grid grid-cols-3 md:grid-cols-6 mr-2 gap-5 mt-6">
                    {skillData.map((skill, index) => (
                       <motion.div
                         key={skill.id}
                         initial={{ y: 50, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 0.8, delay: index * 0.05 }}
                         viewport={{once:true, amount: 0.2 }}
                        >
                        <Card className="bg-white md:w-30 md:h-30 w-25 h-28 flex flex-col group cursor-pointer items-center justify-center p-5">
                            <Image
                             src={skill.image}
                             alt={skill.title}
                             width={50}
                             height={50}
                             className="object-contain relative mt-2 transition-transform duration-500 group-hover:scale-125"
                            />
                            <p className= "text-sm text-center text-black mt-2 font-medium">{skill.title}</p>
                        </Card>
                      </motion.div>
                    ))}
                </div>
            </div>
        </div>
        <hr className="border-red-300 border-2 w-full" />
    </>
  );
}

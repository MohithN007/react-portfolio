import logo from "../assets/logo.webp"
import { HERO_CONTENT } from "../../constants/index"
import { motion } from "framer-motion"

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:
    {
        x:0,opacity:1,
        transition:{duration:1,delay:delay},
    }
})


const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img 
                        
                         initial={{x:100,opacity:0}}
                         animate={{x:0,opacity:1}}
                         transition={{duration:1,dely:1.2}}
                        src={logo} alt="Ravi Kumar"
                            className="border-none rounded-3xl " />

                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center 
                    lg:items-start mt-10">
                        <motion.h2 
                        variants={container(0.3)}
                        initial="hidden"
                        animate="visible"
                        className="pb-2 text-8xl tracking-tighter
                     lg:text-8xl">Mohith N</motion.h2>
                     <motion.span
                      variants={container(0.7)}
                      initial="hidden"
                      animate="visible"
                       className="bg-gradient-to-r from-stone-300
                      to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer</motion.span>
                        <motion.p  variants={container(1.2)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a 
                          variants={container(1.6)}
                          initial="hidden"
                          animate="visible"
                          href="/resume.pdf" target="_blank"
                        rel="noopener noreferrer" download
                        className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                            Download Resume
                        </motion.a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Hero
import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { animate, motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className="pb-24  mb-10">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-6xl">
            Technologies</motion.h1>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            >
                <RiReactjsLine className="text-7xl text-cyan-400"/>

            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="p-4">
                <TbBrandNextjs className="text-7xl"/>

            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
             className="p-4">
                <SiMongodb className="text-7xl text-cyan-500" />

            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="p-4">
                <SiExpress className="text-7xl text-black-700" />

                </motion.div>
                <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />

                </motion.div>
                <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700" />

                </motion.div>

            </motion.div>
        
    </div>
  )
}

export default Technologies
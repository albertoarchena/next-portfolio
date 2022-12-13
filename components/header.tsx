import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

function Header() {

  return (
    <header className="sticky p-5 flex items-start justify-between top-0 max-w-7xl mx-auto z-20">
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <a className="text-xl cursor-pointer text-[#66FCF1]">
                {"{"}Alberto Moreno{"}"}
            </a>
        </motion.div>
        <motion.div className="flex flex-row items-center"
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        >
            <p className="mx-3 hover:text-[#66FCF1]">
                <a href="">
                    About
                </a>
            </p>
            <p className="mx-3 hover:text-[#66FCF1]">
                <a href="">
                    Experience
                </a>
            </p>
            <p className="mx-3 hover:text-[#66FCF1]">
                <a href="">
                    Skills    
                </a>
            </p>
            <p className="mx-3 hover:text-[#66FCF1]">
                <a href="">
                    Projects    
                </a>
            </p>
            <p className="mx-3 hover:text-[#66FCF1]">
                <a href="">
                    Contact    
                </a>
            </p>
            <button className="px-4 py-2 mx-3 bg-transparent hover:bg-[#1F2833] text-[#66FCF1] border border-[#66FCF1] rounded">
                <a href="">
                    Resume
                </a>
            </button>
        </motion.div>
    </header>    
  )
}

export default Header
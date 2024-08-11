'use client'

import { useEffect } from "react";
import anime from 'animejs'
import {motion} from 'framer-motion'

export default function SplashScreen({ finishLoading }:any) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            finishLoading(false)
        },2000)
        
    anime({
      targets: ".SplashScreen",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutQuad",
    })

    return () => clearTimeout(timeout)
    },[finishLoading])

    const loadingContainerVariants = {
      start: {
        transition:{
          staggerChildren: 0.1
        }
        
      },
      end:{
        transition: {
          staggerChildren: 0.1
        }
      }
    }

    const loadingCircleVariants = {
      start: {
        y: '0%'
      },
      end:{
        y: '100%'
      }
    }

    const loadingCircleTransition = {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }

  return (
    <div 
    className="z-50 flex h-screen items-center justify-center text-5xl absolute inset-0 bg-black"
    >
      <motion.div 
      className="w-20 h-8 flex justify-around" 
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
      >
      <motion.span 
      className="w-2 h-2 bg-green-500 rounded full" 
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
      ></motion.span>
      <motion.span 
      className="w-2 h-2 bg-green-500 rounded full" 
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
      ></motion.span>
      <motion.span 
      className="w-2 h-2 bg-green-500 rounded full" 
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
      ></motion.span>

      </motion.div>

    </div>

  )
}
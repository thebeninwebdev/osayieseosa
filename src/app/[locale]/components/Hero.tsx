'use client'

import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { BsFacebook, BsLinkedin, BsInstagram,BsTwitterX, } from "react-icons/bs";
import {CiSettings} from 'react-icons/ci'
import { useAppContext } from "@/context";

export default function Hero(){
    
  const [date, setDate] = useState(new Date());
  const {textEnter, textLeave} = useAppContext()
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

    return(
        <div className="font-sans">
        <div className="bg-[url('/images/hero.png')] w-full h-screen border-b-2 border-black bg-no-repeat bg-black bg-contain bg-center relative">
        <div className="w-full text-white flex sm:text-sm md:text-md lg:text-sm text-xs justify-between py-5 px-5"> 
        <span onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-neutral-200">Based in Edo State, Nigeria</span>
        <button className="text-neutral-200 hidden sm:block px-5 border-b-[1px] border-green-700 pb-2" onMouseEnter={textEnter} onMouseLeave={textLeave}>My resume</button>
        <span className="text-neutral-200" onMouseEnter={textEnter} onMouseLeave={textLeave}>LOCAL/{date.toLocaleTimeString()}</span>
          </div>
          <div className="w-max ml-4 lg:ml-10 absolute text-xl space-y-5 top-1/2 -translate-y-1/2 text-white hidden sm:block" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="bg-white w-1 h-12 mx-auto"></div>
            <div className="p-3 border-[1px] border-white rounded-full hover:bg-green-500 hover:animate-[spin_1s_ease]">
              <BsInstagram/>
            </div>
            <div className="p-3 border-[1px] border-white rounded-full hover:bg-green-500 hover:animate-[spin_1s_ease]">
              <BsLinkedin/>
            </div>
            <div className="p-3 border-[1px] border-white rounded-full hover:bg-green-500 hover:animate-[spin_1s_ease]"><BsTwitterX/></div>
            <div className="p-3 border-[1px] border-white rounded-full hover:bg-green-500 hover:animate-[spin_1s_ease]"><BsFacebook/></div>
            <div className="bg-white w-1 h-12 mx-auto"></div>
          </div>
          <div className="w-12 absolute right-0 -translate-y-1/2 top-1/2 bg-transparent rounded-l-xl border-l-2 border-white border-y-2 text-white text-3xl py-2" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <CiSettings className="animate-[spin_1.5s_infinite] ml-2 rounded-full"/>
          </div>
          <div className="w-96 md:w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white absolute text-center md:space-y-4 space-y-2" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 className="text-4xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">I AM OSAYI <span className="text-[#4CAF50]">ESEOSA</span></h1>
              <p className="md:text-3xl underline text-neutral-200">An ever curious, javascript developer</p>
            <p className="text-xs md:text-sm text-neutral-200">Driven by curiosity, fueled by passion, delivering top-notch web applications.</p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#4CAF50] animate-[bounce_2s_infinite] duration-700">
          <GoChevronDown className="text-4xl"/>
          <GoChevronDown className="text-4xl -mt-5 animate-pulse" />
          </div>
        </div>
        </div>
    )
}
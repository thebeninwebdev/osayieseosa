"use client"

import React, {useEffect, useState} from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

type Link = {link:string,title: string}

const navLinks:Link[] = [
    {link:"/",title: "home"},
    {link:"/projects",title: "projects"},
    {link:"/blogs",title: "Blogs"},
    {link:"/animations",title: "Animations"}
]

export default function DesktopNav(){

    type TabRef = HTMLButtonElement | null
    const [tabRefs, _] = useState<TabRef[]>([])
    const [hoverId, setHoverId] = useState<number | null>(null)
    const hoveredTab = tabRefs[hoverId ?? -1] ?.getBoundingClientRect()

    return(
        <div className="lg:block hidden">
             <div
             className='flex items-center relative'
             onMouseLeave={() => {
                setHoverId(null)
            }}
             >
                {navLinks.map((link:Link, index:number) => {
                    return(
                        <button 
                            ref={(el: HTMLButtonElement | null) => {
                                tabRefs[index] = el
                            }}
                            onPointerEnter={() => {
                                setHoverId(index)
                                console.log(hoveredTab)
                            }}
                            
                            key={index}
                            className='px-5 py-2 z-10 text-slate-200 uppercase text-sm'
                        ><Link href={link.link}>{link.title}</Link></button>
                    )
    })}
            </div>
            <AnimatePresence key="desktopNav">
            {
    hoveredTab ? (
        <motion.button className="absolute top-[22px] left-0 bg-green-700 rounded-md"
        transition={{
            duration:0.2
        }}
        initial={{
            left: hoveredTab.left,
            width: hoveredTab.width,
            height: hoveredTab.height,
            opacity: 0
        }}
        animate={{
            left: hoveredTab.left,
            width: hoveredTab.width,
            height: hoveredTab.height,
            opacity: 1
        }}
        exit={{
            left: hoveredTab.left,
            width: hoveredTab.width,
            height: hoveredTab.height,
            opacity: 0
        }}
        />
    ): null
    }
            </AnimatePresence>
        </div>
    )
}

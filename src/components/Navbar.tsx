"use client"
import React, {useState} from 'react'
import { FiMenu } from 'react-icons/fi';
import Image from "next/image";
import { useAppContext } from '@/context';
import {AnimatePresence, motion} from 'framer-motion'
import NavLink from './NavLink';
import DesktopNav from './DesktopNav';
import Link from 'next/link';
import {IoCloseSharp} from 'react-icons/io5'

type Link = {link:string,title: string}

const navLinks:Link[] = [
    {link:"/",title: "home"},
    {link:"/projects",title: "projects"},
    {link:"/blogs",title: "Blogs"},
    {link:"/animations",title: "Animations"}
]

export default function Navbar() {
    const {textEnter, textLeave} = useAppContext()
    const [open, setOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setOpen((prevState:boolean) => !prevState)
    }

    const containerVariants = {
        initial: {
            transition:{
                staggerChildren: 0.09,
                staggerDirection: -1
            },
        },
        open: {
            transition:{
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1
            },
        },
    }
    
    const menuVariants = {
        initial: {
            scaleY: 0,

        },
        animate: {
            scaleY: 1,
            transition:{
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY:0,
            transition:{
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

  return (
    <>
    <div className="py-5 px-10 border-b-[1px] border-white w-full sticky">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
      <Image alt="logo" width={198} height={40} src="/images/logo.png" className='w-28 lg:w-32 h-auto'/></Link>
      <DesktopNav/>
      <div className='hidden lg:block'>
      <button className='bg-green-500'>
    My resume
  </button>
      </div>

      <div className='lg:hidden cursor-pointer'><FiMenu size="30" onMouseEnter={textEnter} onMouseLeave={textLeave} title="menu button" color="white" onClick={toggleMenu} /></div>
      </div>
    </div>
    <AnimatePresence key="menu">
        {
        open &&
         <motion.div className="overscroll-contain inset-0 fixed z-50 bg-[#000000] text-slate-200 origin-top"
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <header className='p-5 flex justify-between'>
                <p className='text-3xl font-bold'>MENU</p>
<IoCloseSharp size="40" onClick={() => setOpen(false)} className='cursor-pointer'/>
            </header>
            <motion.div
             className='flex flex-col h-full justify-center items-center gap-4'
             variants={containerVariants}
             initial="initial"
             animate="open"
             exit="initial"
             >
                {navLinks.map((link:Link, index:number) => {
                    return(
                    <div 
                    className='overflow-hidden' 
                    key={index}>
                    <NavLink
                        title={link.title}
                        href={link.link}
                    />
                    </div>)
})}
            </motion.div>
        </motion.div>}
    </AnimatePresence>
    
    </>
  )
}

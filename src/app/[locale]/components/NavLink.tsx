import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function NavLink({title,href}:{title:string, href:string}) {

    const navLinkVariants = {
        initial: {
            y:"30vh",
            transition:{
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1]
            },
        },
        open: {
            y:0,
            transition:{
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1]
            },
        }
    }
  return (
    <motion.div 
    className='text-5xl uppercase text-yellow-400'
    variants={navLinkVariants}
    >
        <Link href={href}>{title}</Link>
    </motion.div>
  )
}

'use client'

import { useAppContext } from "@/context"
import React, {useEffect, useRef, useState} from "react"

//Main CustomCursor component
export default function CustomCursor (){
    const {activeStyle} = useAppContext()
    //Reference to the cursor element
    const cursorRef = useRef(null)
    //State to track cursor position
    const [position, setPosition] = useState({x:0, y:0})

    const initial = {
        top:position.y,
         left: position.x,
         background:"white",
         mixBlendMode:"difference",
         height: 50,
         width: 50,
        }

    const final = {top:position.y, left: position.x}


    useEffect(() => {
        //Event listener for mouse movement
        const handleMouseMove = (e:any) => {
            setPosition({
                x: e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener("mousemove", handleMouseMove)

        //Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[]) //useEffect runs only once on mount

    return (
        <>
            <div
                style={
                    activeStyle?
                    activeStyle === "final"?
                    final
                    :initial
                    :final}
                ref={cursorRef}
                className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-75 rounded-full w-8 h-8 border-white border-2`}
            />
        </>
    )
}
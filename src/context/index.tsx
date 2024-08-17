"use client"

import React, {createContext, useState, useContext} from 'react'

const AppContext = createContext<any>(undefined)


export function AppWrapper({children}: {
    children: React.ReactNode;
}){
    const [activeStyle, setActiveStyle] = useState("final")
    const textEnter = () => setActiveStyle("initial")
    const textLeave = () => setActiveStyle("final")


    return (
        <AppContext.Provider value={{activeStyle, setActiveStyle, textEnter, textLeave}}>{children}</AppContext.Provider>
      )
}

export function useAppContext(){
    return useContext(AppContext)
}
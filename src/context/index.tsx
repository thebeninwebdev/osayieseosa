"use client"

import React, {createContext, useContext} from 'react'

const AppContext = createContext<any>(undefined)


export function AppWrapper({children}: {
    children: React.ReactNode;
}){

    const EMAIL:string = "hello@mreseosa.com"
    const LAUNCH_DATE:string = "Thu, August 22"
    const COMPANY_NAME:string = "mrEseosa_"


    return (
        <AppContext.Provider value={{EMAIL, LAUNCH_DATE, COMPANY_NAME}}>{children}</AppContext.Provider>
      )
}

export function useAppContext(){
    return useContext(AppContext)
}
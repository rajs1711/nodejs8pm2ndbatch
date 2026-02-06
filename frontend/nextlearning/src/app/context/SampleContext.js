'use client';// always context file should be client

import { useContext,createContext,useState } from "react";

const SampleContext=createContext(null);

export function SampleProvider({children}){

    const [yearcontext,setYearcontext]=useState(2027);
    const [applicationName,setApplicationName]=useState('Resturant Managment System');
    const [userinfo,setUserinfo]=useState(null);
    return(
        <SampleContext.Provider value={{yearcontext,setYearcontext,applicationName,setApplicationName,userinfo,setUserinfo}}>
            {children}
        </SampleContext.Provider>
    );

}

export function useSample(){
    return useContext(SampleContext)
}
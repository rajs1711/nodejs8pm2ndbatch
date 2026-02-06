'use client'

import { useSample } from "../context/SampleContext"

export default function Copyrightyear({year}){
   const {yearcontext,setYearcontext}=useSample()
   const {applicationName,setApplicationName}=useSample()
    const{userinfo,setUserinfo}=useSample()
   setYearcontext(2028)
   return(
    <>
     <span>© {year} {yearcontext} {applicationName} {userinfo?.userDetail?.name}</span>
    </>
   )
}
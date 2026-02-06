'use client'
import Link from 'next/link'
import Copyrightyear from './copyrightyear'
import { useSample } from "../context/SampleContext"

export default function Copyright({year}){
    const {yearcontext,setYearcontext}=useSample()
    return(
        <>
         <Copyrightyear year={year}/> <Link href="https://flowbite.com/" className="hover:underline">Programming Classes</Link>.{yearcontext} All Rights Reserved.
        </>
    )
}
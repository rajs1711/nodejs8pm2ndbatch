import Link from 'next/link'
import Copyrightyear from './copyrightyear'
export default function Copyright({year}){
    
    return(
        <>
         <Copyrightyear year={year}/> <Link href="https://flowbite.com/" className="hover:underline">Programming Classes</Link>. All Rights Reserved.
        </>
    )
}
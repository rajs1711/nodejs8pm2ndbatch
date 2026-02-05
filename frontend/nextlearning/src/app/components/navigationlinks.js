"use client"
import Link from 'next/link'
import Cookies from "js-cookie"
import { usePathname ,useRouter } from 'next/navigation';
// navigation array of objects


export default function Navigationlinks(){
       
        const pathname=usePathname();// changes on router.push()
        const router=useRouter();
        const token=Cookies.get("token");
        
        const nav=token?
           [
            {href:'/',text:'Home', key:'home'},
            {href:'/dashboard',text:'dashboard', key:'dashboard'},
            {href:'/login',text:'logout', key:'logout'},
           ]
           :
           [
            {href:'/',text:'Home', key:'home'},
            {href:'/signup',text:'signup', key:'signup'},
            {href:'/login',text:'login' ,key:'login'},
           ]

           async function logoutaction(){
            
             //e.preventDefault()// this helps to stop default behavior of given element
             Cookies.remove('token');
             router.push('/login');
           }
        
        
     return(
        <>
            {
                    nav.map((navigate)=>(
                        navigate.key=='logout'?
                       <Link href={navigate.href} key={navigate.key} className="hover:underline me-4 md:me-6" onClick={logoutaction}>{navigate.text}</Link>
                        :
                        <Link href={navigate.href} key={navigate.key} className="hover:underline me-4 md:me-6">{navigate.text}</Link>
                    ))
                
            }
        </>
    )
}
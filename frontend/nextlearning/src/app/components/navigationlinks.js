import Link from 'next/link'
// navigation array of objects
const nav=[
    {href:'/',text:'Home', key:'home'},
    {href:'/signup',text:'signup', key:'signup'},
    {href:'/login',text:'login' ,key:'login'},
]

export default function Navigationlinks(){
    return(
        <>
            {
                    nav.map((navigate)=>(
                     <Link href={navigate.href} key={navigate.key} className="hover:underline me-4 md:me-6">{navigate.text}</Link>
                    ))
                
            }
        </>
    )
}
"use client"
import { useState, useEffect} from "react"
import { useParams } from "next/navigation"

export default function  Orderdetail(){
      const params=useParams()
      console.log(params.slug)
      const [data,setData]=useState();
      useEffect(() => {
            setData(params.slug);
        }, [params.slug]); 

    return(
    <>
      <h1>orderdetial {data}</h1>
    </>
     )
}
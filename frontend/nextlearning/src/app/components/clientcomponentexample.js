"use client";
import { useState } from "react";

export default function ClientComponentExample(){

    async function handleClick() {
        console.log('hello button clicked')
    }
    async function handleClick2(data){
         console.log(data)
    }
    const [count,setCount]=useState(0);// here we keep 0 as by deafult 
    // if you not want to provide any value then there is no default value
    async function counter(){
        setCount(count+1);
    }
    return(
          <>
          <button type='button'  onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Button1</button>
          <button type='button'  onClick={()=>handleClick2('Hi Good Evng')} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Button2</button>
          <button type='button'  onClick={counter} className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click Count : {count}</button>
          
          </>
    )

}
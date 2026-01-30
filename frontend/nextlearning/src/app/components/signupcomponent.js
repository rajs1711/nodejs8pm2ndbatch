'use client'
import Button from './button'
import Pagelabel from './pagelabel'
import createuser from '../actions/createuser'
import { useState } from 'react'
export default function Signupcomponent(){

    const [response,setResponse]=useState(null);

    async function handleSubmit(formData) {
        const res= await createuser(formData);
        setResponse(res)
    }

    return (
    <>
<div className="bg-white py-24 sm:py-32 flex justify-center">
      <div className="mx-auto grid max-w-7xl gap-30 px-6 lg:px-8 xl:grid-cols-1 mysigupwidth" >
        <div className="max-w-xl">
          <Pagelabel labelname="Signup Page" tagline="Please create account"/>
                      {response?.code==='error' &&(
                <p className="errormsg">{response.msg}</p>
            )

            }

            {response?.code==='success' &&(
                <p className="msg">{response.msg}</p>
            )

            }
              <form className="max-w-md mx-auto" action={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                <label  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                <label  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="mobile" id="mobile" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                <label  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Mobile Number</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                <label  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Address</label>
            </div>
            <Button  name="signup" value="Signup" buttonColor="text-white bg-blue-700 hover:bg-blue-800"/>
            </form>
        </div>
          
      </div>
</div>
</>
    )
}
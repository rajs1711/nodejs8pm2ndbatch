"use client"
import Cookies from "js-cookie"
import { useEffect ,useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
export default function Dashboardcomponent({mydata}){
    const token=Cookies.get("token");
    const router=useRouter()
    if(token){
      const [data,setData]=useState();
           useEffect(()=>{
               
              const fetchData=async ()=>{
                 //API CALL using Javascript fetch() method 
                 // Fetch is a method of javascript use to call API.
      
              const res= await axios.post(
               'http://localhost:8082/api/v1/profile',
               {},
               {
               headers:{
               Authorization:`Bearer ${token}`
              }});

               setData(res.data)
              }
              fetchData()
      
           },[])// dependecy array
           
 
      return(
          <>
            <h1>Name :{data?.userDetail?.name &&(data.userDetail.name)}</h1>
            <h2>Email :{data?.userDetail?.email &&(data.userDetail.email)}</h2>
            <h3>Mobile:{data?.userDetail?.mobile &&(data.userDetail.mobile)}</h3>
          </>
      )
    }else{
     
     router.push("/login")
    }

}
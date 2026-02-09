"use client"
import Cookies from "js-cookie"
import { useEffect ,useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";


export default function Orderhistorycomponent({mydata}){
    const token=Cookies.get("token");
    const router=useRouter()
    if(token){
      const [data,setData]=useState();
           useEffect(()=>{
               
              const fetchData=async ()=>{
                 //API CALL using Javascript fetch() method 
                 // Fetch is a method of javascript use to call API.
      
              const res= await axios.post(
               'http://localhost:8082/api/v1/orderhistory',
               {orderNumber:null},
               {
               headers:{
               Authorization:`Bearer ${token}`
              }});

               setData(res.data.data)
              }
              fetchData()
      
           },[])// dependecy array
           
 
      return(
          <>
            <h1>Orderhistory </h1>
            <br>
            </br>
            <table>
                <tr>
                    <th>orderNumber</th>
                    <th>ItemId</th>
                    <th>orderType</th>
                    <th>Address</th>
                    <th>Count</th>
                </tr>

                {
                    data?.map((mydata)=>(
                        <tr key={mydata.orderNumber}>
                            <td><Link href={`/orderdetail/${mydata.orderNumber}`} className="linkcolor">{mydata.orderNumber}</Link></td>
                            <td>{mydata.itemId}</td>
                            <td>{mydata.orderType}</td>
                            <td>{mydata.address}</td>
                            <td>{mydata.count}</td>
                        </tr>
                    ))
                }

            </table>
          </>
      )
    }else{
     
     router.push("/login")
    }

}
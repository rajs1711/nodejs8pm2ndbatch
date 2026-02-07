"use server"

import axios from "axios";
//import { redirect } from "next/dist/server/api-utils";

export  default async function loginuser(formData){
      let msg=null;
      let code=null;
      let token=null;

      if(formData.get("email")===null || formData.get("email")=='' 
      || formData.get("password")===null || formData.get("password")==''){
            msg='Please Provide mandatory fields';
            code='error'
      }else{
        const res= await axios.post('http://localhost:8082/api/v1/login',{
        email:formData.get("email"),
        password:formData.get("password")
        })
        if(res.status=200){
            msg=res.data.msg;
            code=res.data.code;
            token=res.data.token
        }
      }
      //redirect("/dashboard") // use to redirect to another page from server component
      // now we have to call our backend api and we will send data to save
      return {success:200,msg:msg,code:code,token:token}

}
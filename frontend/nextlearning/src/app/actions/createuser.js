"use server"

import axios from "axios";

export  default async function createuser(formData){
      /*const name=formData.get("name");
      const email=formData.get("email");
      const mobile=formData.get("mobile");
      const address=formData.get("address"); */

      const res= await axios.post('http://localhost:8082/api/v1/signup',{
        name:formData.get("name"),
        email:formData.get("email"),
        mobile:formData.get("mobile"),
        address:formData.get("address")
      })
      let msg=null;
      let code=null;
      if(res.status=200){
         msg=res.data.msg;
         code=res.data.code
      }
      
      // now we have to call our backend api and we will send data to save
      return {success:200,msg:msg,code:code}

}
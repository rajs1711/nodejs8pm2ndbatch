const express=require('express'); // this way we require package in our file
const  utility =require('./utils');
//import express from 'express';
//import {getData,addData} from './utils.js';

const app = express();// this way we creae object from express package 

app.use(express.json());// middleware to parse JSON(javascript object notation

const PORT=8080;
/*
JSON=> 

JSON is a popular data format often used by web developers for transferring data between a server and a web application.
Because JSON is text-based, it’s easily read by humans and understood by computers.
JSON’s language-independent nature makes it an ideal format for exchanging data across different programming languages and platforms.
Many databases have emerged to store and exchange data in JSON.

It consist of key and value pair wher key always enclosed in "" or ''
JSON example:

{
  "name":"Saurav",
  "email":"abc@gmail.com",
  "gender":"male",
  "mobile":8210202331,
  "address":{
     "permanenet_address":"patna",
     "temporary_address":"patna"
  },
  "data":[89,10,30],
  "isActive":true
}
*/
app.use('/api/v1',require('./routes/commonRoutes'));
app.use('/api/v1',require('./routes/authRoutes'));
//start sever
app.listen(PORT,()=>{
    console.log('Your Serve is started... on PORT'+PORT );
    console.log(`your url http://localhost:${PORT}`)
})

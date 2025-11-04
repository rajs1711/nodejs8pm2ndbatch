require('dotenv').config();
const express=require('express'); // this way we require package in our file
const  utility =require('./utils');
const { ValidationError } = require('express-validation');
const { rateLimit } = require('express-rate-limit');

//import express from 'express';
//import {getData,addData} from './utils.js';

const app = express();// this way we creae object from express package 

app.use(express.json());// middleware to parse JSON(javascript object notation

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

/*
app.use() is used to register middleware in your Express app.
Middleware functions are run in order before the request reaches your route handler (or after, for error-handling middleware).

*/
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 5 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)
app.use('/api/v1',require('./routes/commonRoutes'));
app.use('/api/v1',require('./routes/authRoutes'));



// Error handler
app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(400).json({
    message: 'Data Validation Error',
    error: err.message,
  });
});



//start sever

app.listen(process.env.PORT,()=>{
    console.log('Your Serve is started... on PORT'+process.env.PORT );
    console.log(`your url http://localhost:${process.env.PORT}`)
})

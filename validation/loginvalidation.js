const {Joi} =require('express-validation');

exports.loginvalidate={
    body:Joi.object({
        username:Joi.string().required(),
        password : Joi.string().required()

    })
}


// this is just copy of the above codes

const {Joi} =require('express-validation');

exports.loginvalidate={
    body:Joi.object({
        username:Joi.string().required(),
        password : Joi.string().required()

    })
}
const {Joi} =require('express-validation');

exports.loginvalidate={
    body:Joi.object({
        username:Joi.string().required(),
        password : Joi.string().required()

    })
}
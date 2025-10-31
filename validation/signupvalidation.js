const {joi} =require('express-validation');

exports.signupvalidate={
    body:Joi.object({
        name:Joi.string().required(),
        email : Joi.email().string().required(),
        mobile: Joi.string().required(),
        address:Joi.string().optional()

    })
}
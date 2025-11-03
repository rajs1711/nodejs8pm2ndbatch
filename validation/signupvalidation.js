const {Joi} =require('express-validation');

// validation rules
exports.signupvalidattion={
    body:Joi.object({
        name:Joi.string().required(),
        email : Joi.string().required(),
        mobile: Joi.string().required(),
        address:Joi.string().allow(null)

    })
}
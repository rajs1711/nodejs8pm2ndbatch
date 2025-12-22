const {Joi} =require('express-validation');

// validation rules
exports.loginvalidattion={
    body:Joi.object({
        email : Joi.string().required(),
        password: Joi.string().required()

    })
}
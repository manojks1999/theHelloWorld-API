const Joi = require('joi')

const loginUserSchema =Joi.object({
      
    userId: Joi.string()
              .min(5)
              .max(30)
              .required(),
                
    userPassword: Joi.string()
           .max(50)
           .required(), 

});


const createUserSchema =Joi.object({
      
    userId: Joi.string()
              .min(5)
              .max(30)
              .required(),
                
    userPassword: Joi.string()
           .max(50)
           .required(), 
                
    name: Joi.string()
           .max(50)
           .required(), 
                
    salary: Joi.number()
           .required(), 
                
    email: Joi.string()
           .max(50)
           .required()
           .email(),

});


const salaryUserSchema =Joi.object({
      
    order: Joi.string()
              .min(3)
              .max(4)
              .required()
              .valid('ASC', 'DESC'),


});


function loginUserVal(req, res, next){
    const { error, value } = loginUserSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.status(422).json({
            "message":"Provide proper input data"
        })
    }
    next();
}

function createUserVal(req, res, next){
    const { error, value } = createUserSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.status(422).json({
            "message":"Provide proper input data"
        })
    }
    next();
}


function salaryUserVal(req, res, next){
    const { error, value } = salaryUserSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.status(422).json({
            "message":"Provide proper input data"
        })
    }
    next();
}
module.exports = {
    loginUserVal,
    createUserVal,
    salaryUserVal
}

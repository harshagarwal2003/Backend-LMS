const express = require('express');
const Router = express.Router();
const Instructor = require('../model/Instructor');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "myfavsportisbasketball";

Router.post('/instructor-login', [body('email', 'Incorrect Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 })], async (req, res) => {
    const anyError = validationResult(req);

    if (!anyError.isEmpty()){
        return res.status(400).json({anyError : anyError.array()});
    }

    try {
        const email = req.body.email;
        const user = await Instructor.findOne({email});
        if (!user){
            return res.status(400).json({anyError : "Incorrect credentials. Please try again !"});
        }

        const passCmp = await Instructor.findOne({email : req.body.email, password : req.body.password});
        if (!passCmp){
            return res.status(400).json({anyError : "Incorrect credentials. Please try again !"});
        }
        const data = { user : {_id : user._id} };
        const authtoken = jwt.sign(data, secret);

        const id = user._id;

        return res.json({success : true, authtoken, id, user});
    } catch (error) {
        console.log(error.message);
        return res.json({success : false});
    }
});


module.exports = Router;
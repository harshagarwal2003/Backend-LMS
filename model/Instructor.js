const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    nickname : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
}); 

module.exports = mongoose.model('lmsinstructor', instructorSchema);
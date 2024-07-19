const express = require('express');
const cors = require('cors');
const Router = express.Router();
const Subject = require('../model/Subject');
const Instructor = require('../model/Instructor');


Router.post('/updateSubject', async(req, res) => {
    try {
        // console.log('called');
        const userId = req.headers.authorization.split(' ')[1];
        // console.log('userId is ', userId);
        // console.log(req.body);
        const changer = await Instructor.findOne({_id : userId});
        // console.log(changer);
        const oldData = await Subject.findOne({code: req.body.subjectCode});
        // console.log('old data is ', oldData);
        if (oldData){
            oldData.classes = [...req.body.classes];
            oldData.changes.push(changer);
        }

        await oldData.save();

        // console.log('done');
        return res.json({success : true});

    } catch (error) {
        console.log(error.message);
        return res.json({success : false});
    }
});

module.exports = Router;
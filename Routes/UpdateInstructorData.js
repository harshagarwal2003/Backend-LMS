const express = require('express');
const cors = require('cors');
const Router = express.Router();
const Instructor = require('../model/Instructor');



Router.put('/updateInstructorProfile', async (req, res) => {
    try {
      const userId = req.headers.authorization.split(' ')[1];
      const updatedProfile = req.body;
  
      const result = await Instructor.updateOne({ _id: userId }, { $set: updatedProfile });
      //  console.log(result);
      res.json({ success: 'true' });
    } catch (error) {
      console.error('Error updating profile:', error.message);
      res.status(500).json({ success : 'false' });
    }
  })


  module.exports = Router;
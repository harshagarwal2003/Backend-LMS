const express = require('express');
const cors = require('cors');
const Router = express.Router();
const Instructor = require('../model/Instructor');


Router.use(cors());

Router.get('/instructorData', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];
        const userId = token;

        // console.log(userId);

        const userData = await Instructor.findOne({ _id: userId });
        // console.log(userData);
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ userData });
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = Router;
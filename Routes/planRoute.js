const express = require('express');
const router = express.Router();
const Plan = require('../models/planSchema');  // Path to your model

// Route for creating a new plan
router.post('/', async (req, res) => {
    try {
        const { destination, startDate, endDate, activities } = req.body;

        // Check if any required field is missing
        if (!destination || !activities) {
            return res.status(400).json({
                message: 'Error: destination and activities are required',
            });
        }

        // Create a new plan object
        const newPlan = new Plan({
            destination,
            startDate,
            endDate,
            activities,
        });

        // Save the new plan to the database
        await newPlan.save();

        res.status(201).json({
            message: 'Plan created successfully',
            plan: newPlan,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error creating plan',
            error: error.message,
        });
    }
});

// Route to fetch all plans
router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find();  // Get all plans from the database
        res.status(200).json({
            message: 'Plans fetched successfully',
            plans,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching plans',
            error: error.message,
        });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const planId = req.params.id
        const plan = await Plan.findById(planId)
        if(!plan) return res.status(404).json({message:"Plan doesnt exist"})
        res.status(200).json({message:"Plan is found", plan})
    } catch (error) {
        res.status(500).json({error:error})
    }
});

// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        const planId = req.params.id
        const plan = await Plan.findByIdAndDelete(planId)
        if(!plan) return res.status(404).json({message:"Plan doesnt exist"})
        res.status(200).json({message:"Plan deleted", plan})
    } catch (error) {
        res.status(500).json({error:error})
    }
});

// UPDATE 
router.patch('/:id', async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Travel plan not found' });
        }

        if (req.body.destination) plan.destination = req.body.destination;
        if (req.body.startDate) plan.startDate = req.body.startDate;
        if (req.body.endDate) plan.endDate = req.body.endDate;
        if (req.body.activities) plan.activities = req.body.activities;

        const updatedPlan = await plan.save();
        res.json(updatedPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

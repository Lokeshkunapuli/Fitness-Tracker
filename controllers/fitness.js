const FitnessRecord = require('../models/fitness');


exports.getAllRecords = async(req, res) => {
    try {
        const records = await FitnessRecord.find({ userId: req.user.id });
        return res.status(200).send(records);
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to fetch all records' });
    }
};

exports.createRecord = async(req, res) => {
    try {
        const newRecord = await FitnessRecord.create({...req.body, userId: req.user.id });
        return res.status(201).send({ newRecord });
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to create new record' });
    }
};

exports.updateRecord = async(req, res) => {
    try {
        const updatedRecord = await FitnessRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(updatedRecord);
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to update record' });
    }
};

exports.deleteRecord = async(req, res) => {
    try {
        const deletedRecord = await FitnessRecord.findByIdAndDelete(req.params.id);
        return res.status(200).send(deletedRecord);
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to delete record' });
    }
};
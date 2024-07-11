const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessRecordSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activityName: { type: String, required: true },
    duration: { type: Number, required: true },
    intensity: { type: String, required: true },
    date: { type: Date, default: Date.now },
    calories: { type: Number, required: true }
});

module.exports = mongoose.model('FitnessRecord', fitnessRecordSchema);
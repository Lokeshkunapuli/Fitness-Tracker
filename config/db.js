const mongoose = require('mongoose');
require('dotenv').config();

const connectString = process.env.MONGO_URI;

const connectMongoDB = async () => {
    if (!connectString) {
        console.error('MONGO_URI is not defined in the environment variables.');
        process.exit(1);
    }

    try {
        await mongoose.connect(connectString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to DB: ', error.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;


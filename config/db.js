const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('we are connected');
    } catch {
        console.log('this is an error')
        process.exit(1)
    }
}

module.exports = connectDB;
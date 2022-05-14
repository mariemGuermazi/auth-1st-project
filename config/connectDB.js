const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database is connected...")
    } catch (error) {
        console.log("can not connect to database!!!")
        
    }
};

module.exports = connectDB;
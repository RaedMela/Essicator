const mongoose=require("mongoose")
const { MongoClient } = require('mongodb');
const uri = "";
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
module.exports = connectToMongoDB;



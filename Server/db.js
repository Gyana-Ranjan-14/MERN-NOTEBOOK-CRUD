const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://admin:admin123@cluster0.qm7rgx4.mongodb.net/INotebook?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
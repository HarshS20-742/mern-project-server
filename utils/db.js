const mongoose = require('mongoose');
// const URL = "mongodb://127.0.0.1:27017/mern_admin";
// const URL = "mongodb+srv://harshyadav5939:<password>@cluster0.q0xjet4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const URL = process.env.MONGODB_URL

// mongoose.connect(URL);

const connectDb = async() =>{
    try {
        await mongoose.connect(URL);
        console.log("Conection to DB was success");
        
    } catch (error) {
        console.error("database connection failed", error);
        process.exit(0);
         
    }
};

module.exports = connectDb; 
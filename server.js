require("dotenv").config();
const express = require('express');
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const PORT = process.env.PORT || 5000; 
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require('cors');

// handling the cors policy error here
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials:true
}
app.use(cors(corsOptions));

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from the server!');
  });
 
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data/", serviceRoute);

// admin routes are defined here
app.use('/api/admin/', adminRoute);

app.use(errorMiddleware);


connectDb().then(() =>{
    app.listen(PORT, ()=>{
    console.log("server is running on port 5000"); 
});
}); 

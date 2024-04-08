const express = require("express") ;

const mongoose = require("mongoose");

const dotenv =require("dotenv");

const app = express();

const port = 5000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URI );
        console.log("connected to MongoDb")
    } catch (error) {
        throw error;
        
    }
}

app.get("/", (req, res)=> {
    res.send("hello express.js");

} );

app.get("/api", (req, res)=> {
    res.send("this is API route. ")
})

app.listen(5000, ()=> {
    connect();
    console.log(` sunucu ${port} portunda çalışıyor.` )
})  
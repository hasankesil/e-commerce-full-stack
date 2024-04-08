const express = require("express") ;

const mongoose = require("mongoose");

const app = express();

const port = 5000;

const connect = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://hasankesil-commerce:5TYqyvI6RQhlQraO@cluster0.wignn6m.mongodb.net/"
        );
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
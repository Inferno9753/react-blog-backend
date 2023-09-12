const express =require('express');
const app=express();
const dotenv=require("dotenv").config()
const mongoose=require("mongoose")

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(process.env.MONGO_URL,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

app.listen("5000",()=>{
    console.log(`backend is running on PORT 5000`);
})  
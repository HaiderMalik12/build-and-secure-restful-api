import mongoose, { Mongoose } from "mongoose";
const { Schema }= Mongoose

const songShema = new Schema({
    title:{
        type:String,
        required:'must be filled'
    }
})


import mongoose from "mongoose";


const defineSchema =mongoose.Schema ({
    name:String,
    fname:String,
    contact:Number
})


export const data = mongoose.model("product",defineSchema)
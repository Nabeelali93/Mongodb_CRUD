import mongoose from "mongoose";


const defineSchema =mongoose.Schema ({
    name:String,
    fname:String,
    contact:Number
})

  if(mongoose.models['products']){
    delete mongoose.models['products']
  }
export const data = mongoose.model("products",defineSchema)
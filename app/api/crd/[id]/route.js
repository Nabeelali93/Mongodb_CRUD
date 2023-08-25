import { NextResponse } from "next/server";
import { dbconnect } from "../../../library/db";
import { data } from "../../../library/Model/product";
import mongoose from "mongoose";


export async function DELETE(request,content){
    
    
const id = content.params.id

await mongoose.connect(dbconnect).then(async(res)=>{
    console.log("delete api ok")
})

const obj = {_id:id}

const res = await data.deleteOne(obj)

    
    return NextResponse.json({
     data:res,
     message:"Delete Api ok"
    })
}

export async function PUT(request,content){

const id = content.params.id

const data1 = await request.json()


await mongoose.connect(dbconnect).then(async(res)=>{

console.log("Put api Ok")

})

const filter = {_id:id}



const res = await data.findOneAndUpdate(filter,data1)





    return NextResponse.json({
        data:res,
        message:"put api created"
    })



}


export async function GET(request,content){


const id = content.params.id



    await mongoose.connect(dbconnect).then(async(res)=>{
        console.log("Get api single user")
    })
    
    const filter =  {_id:id}
    const result = await data.findOne(filter)
    
    
        return NextResponse.json({
    data:result,
    message:"get single user",
    status:true
    
        })
    }


import mongoose from "mongoose"
import {dbconnect} from "../../library/db"
import { NextResponse } from "next/server"
import {data} from "../../library/Model/product"
export async function POST(request,content){


    const data1= await request.json()
    await mongoose.connect(dbconnect).then(async(res)=>{
        console.log("post api run")
    })

const filter = await data(data1)


    const result = await filter.save()

    return NextResponse.json({
        data:result,
        message:"post api ok "
    })
}
import mongoose from "mongoose"
import {dbconnect} from "../../library/db"
import { NextResponse } from "next/server"
import {data} from "../../library/Model/product"
export async function POST(request,content){

    const data1= await request.json()
    await mongoose.connect(dbconnect).then(async(res)=>{
        console.log("post api run")
    })

const d = {name: data1.name}

const f = await data.findOne(d)

console.log(f)



if(f!=null){
    return NextResponse.json({
        data:f,
        status:false,
        message:"Allready Add "
    })
}


else{
    const filter = await data(data1)

    const result = await filter.save()
   
       return NextResponse.json({
           data:result,
           status:true,
           message:"post api ok "
       })
   }
}

  
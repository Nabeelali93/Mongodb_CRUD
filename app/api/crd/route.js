import {NextResponse} from 'next/server'
import mongoose from 'mongoose'
import { dbconnect } from '../../library/db'
import {data} from '../../library/Model/product'

export async function GET(){


await mongoose.connect(dbconnect).then(async(res)=>{
    console.log("Get api Connected")
})


const result = await data.find()


    return NextResponse.json({
data:result,
message:"Get api ok"

    })
}
"use client"
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

function page({params}) {
    const route = useRouter()
    const [name,setname] = useState("")
const [fname,setfname] = useState("")
const [contact,setcontact] = useState("")


const e = params.id

const update =()=>{

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/api/crd/${e}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
            name:name,
            fname:fname,
            contact:contact
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("data updated")
route.push('/')
      })
      .catch((error) => {
        console.log(error);

        route.push('/')

      });

}



    useEffect(()=>{

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/api/crd/${e}`,
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          console.log(response.data);
setname(response.data.data.name)

setfname(response.data.data.fname)
setcontact(response.data.data.contact)

          
        })
        .catch((error) => {
          console.log(error);
        });
        
      },[])


  return (
   <>
   
   <div class="w-full max-w-xs mx-auto mt-20">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input value={name} onChange={(e)=>setname(e.target.value)} name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Father Name
      </label>
      <input value={fname} onChange={(e)=>setfname(e.target.value)} name="fname" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Father Name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
       Contact
      </label>
      <input value={contact} onChange={(e)=>setcontact(e.target.value)} name="contact"  class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Contact"/>
    </div>
    <div class="flex items-center justify-center">
      <button onClick={()=>update()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Update
      </button>
     
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Nabeel Corp. All rights reserved.
  </p>
</div>   
   
   
   
   </>
  )
}

export default page

"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


export default function Home() {

  const route = useRouter()
  const [form,setform] = useState(false)


const [alldata,setalldata] = useState([])

const [data,setdata] = useState({
  name:"",
  fname:"",
  contact:""
})





const addata=async ()=>{
  
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/api/post',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : {
    name:data.name,
    fname:data.fname,
    contact:data.contact
  }
};

await axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));


  alert("Data Added")
 setform(false)
})
.catch((error) => {
  console.log(error);
});

}



useEffect(()=>{

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/crd',
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(response.data);
    setalldata(response.data.data)
  })
  .catch((error) => {
    console.log(error);
  });
  
},[])


const del=(e)=>{

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `http://localhost:3000/api/crd/${e}`,
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
alert("Delete User")


  })
  .catch((error) => {
    console.log(error);
  });


}




  return (
  <>

{
  form ?
  <>
  <div class="w-full max-w-xs mx-auto mt-20">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})} name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Father Name
      </label>
      <input onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})} name="fname" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Father Name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
       Contact
      </label>
      <input onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})} name="contact"  class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Contact"/>
    </div>
    <div class="flex items-center justify-center">
      <button onClick={()=>addata()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       + Add User
      </button>
     
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Nabeel Corp. All rights reserved.
  </p>
</div>
  </>
:
<>
<div className=' flex justify-center mt-10'>
<button onClick={()=>setform(true)} class="bg-blue-500 hover:bg-blue-700   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       + Add User
      </button>
</div>
<div className="relative overflow-x-auto">

    <table className="w-3/6 text-sm mx-auto mt-5 text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    NAME
                </th>
                <th scope="col" className="px-6 py-3">
                   FATHER NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  CONTACT
                </th>
                <th scope="col" className="px-6 py-3">
                  EDIT
                </th><th scope="col" className="px-6 py-3">
                 DELETE
                </th>
               
            </tr>
        </thead>



        <tbody>


        {
  alldata.map((v,i)=>{
    return(
      <>
       <tr className="bg-white border-b hover:bg-gray-100 hover:rounded-md dark:bg-gray-800 dark:border-gray-700">
              
                <td className="px-6 py-4 ">
                   {v.name}
                </td>
                <td className="px-6 py-4">
                {v.fname}
                </td>
                <td className="px-6 py-4">
                {v.contact}
                </td>
                <td>
                <button onClick={()=>route.push(`./crd/${v._id}`)} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Edit</button>

                </td>
                <td>
                <button type="button" onClick={()=>del(v._id)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>

                </td>
            </tr>
      
      
      </>
    )
  })
} 
          </tbody>
    </table>

</div>

</>




}








 
  </>
  )
}

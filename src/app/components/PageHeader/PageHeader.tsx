"use client";

import React, {useState, useEffect} from 'react'




export default function Header() {
    const [value, setValue] = useState(false)

    useEffect(() =>{
   const timer = setTimeout(()=>{
    setValue(true);
    },5000)
        return () => clearTimeout(timer)
    },[])
  return (
    <div>
        {/* //Header Starting.. */}
        <div className='bg-slate-300 h-[100px] leading-[90px]'>
        <div className='gird justify-items-center text-[44px] font-bold text-[#5d5d5f]' style={{fontFamily: "myRoboto"}}>
        {value? <p>Welcome To My Blogs</p>: <p>My Blogs</p>}
    </div>
</div>

<h1 className='grid grid-col justify-center items-center text-[35px] font-medium  py-[20px]
 '
         style={{fontFamily: "myRobot"}}>Blog Page</h1>

{/* //Header Ending */}

</div>

)}
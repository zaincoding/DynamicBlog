"use client";

import React, {useState, useEffect} from 'react'
import Image from 'next/image';




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
        <div className='bg-slate-300 h-[70px]'>
        <div className='gird justify-items-center text-[44px] font-bold text-[#6b6b71]'>
        {value? <p>Welcome To My Blogs</p>: <p>My Blogs</p>}
    </div>
</div>
{/* //Header Ending */}

{/* //Hero image start button text */}
    <div className='relative'>
    <Image src='/images/header/headerImg2.PNG' alt='image' layout='responsive' width={180} height={100}/>
    <div className='flex flex-col'>
    <button className=' md:-mt-[280px] -mt-20 md:ml-[150px] md:text-[50px] text-[22px]
     font-bold text-[#fdfeff]' type="button" name="blog">Zain Khan &apos;s Blogs</button>
    </div>
    </div>

    </div> 
  )
}

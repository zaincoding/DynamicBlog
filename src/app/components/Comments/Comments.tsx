
"use client"

import React, { useState } from "react";





export default function Comments() {



    const [comments, setComments] = useState<string>('')
    const [name, setname] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const [commentslist, setCommentsList] = useState<string[]>([])

    const handleComments = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(event.target.value);
    }
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) =>{
      setname(event.target.value)
    }

    const handlePostComments = () =>{
        if(!name.trim() || !comments.trim()){

          setErrorMessage("please provide both name and comments.")

        }
        else{
            setCommentsList([...commentslist, `${name}: ${comments}`]);
            setComments('');
            setname('');
            setErrorMessage('');
        }

    }
    
  return (
    <div className="mt-[50px]">
        <div className="grid grid-cols justify-center items-center ">
     <div>
        <p>Name: <input className="w-[350px] h-[33px] border border-[#979595] rounded-lg text-center" type="text" value={name} placeholder="Enter your name." onChange={handleName} maxLength={100}/></p>
    </div>

         <label htmlFor="Comments" className="mt-[20px] font-bold">Comments</label>
         </div>

         <div className="grid grid-cols justify-center items-center text-[20px]">

         
         <div>
         
        
        <textarea className="mt-[10px] border border-[gray] w-[400px] h-[100px] text-center"  value={comments} onChange={handleComments} placeholder=" Write a comment..."/>    
        </div> 

                 <button type="button" onClick={handlePostComments} className=" bg-blue-400 hover:bg-blue-500 rounded-md mt-[18px]
                 font-semibold">Post Comments</button>

{errorMessage && (
     <p className="text-red-500 mt-[10px]">{errorMessage}</p>
)}

{/* {commentslist.length >= 3 &&(
   <p className="text-red-500 mt-[10px]">You can only post 3 comments.</p>
)} */}

    <div>
        <p className="font-bold mt-[20px]">Comments:</p>
       {commentslist.length === 0 ? (
  <p className="text-gray-500">Be the first to comment.</p>
) : (
  commentslist.map((comment, index) => {


    const sanitizedComment = comment.replace(/<script.*?>.*?<\/script>/g, '');
    
    return <p key={index} className="text-gray-700">{sanitizedComment}</p>;
  })
)}

    </div>
        </div>
    </div>
  )
}

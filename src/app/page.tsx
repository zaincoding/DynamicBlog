import Header from "../app/components/Header/Header"
import Image from 'next/image';
import Link from 'next/link'
import Comments from '@/app/components/Comments/Comments'
import Footer from '@/app/components/Footer/Footer'


export default function Home() {
  return (
   <div>
     <Header/>
     <div>
      {/* //Hero image & start button text */}
      
      <div className='md:grid grid-cols-3 justify-items-center mt-[30px]'>

        <div className='w-[400px]'>
          <div className='w-[400px] h-[350px] border-[12px] border-[#d0d5f3] '>
      
              <Image  className='absolute h-[330px]' src='/images/blogsImg/html.PNG' alt='image' width={380} height={100}/>
          </div>
          <p className="text-[18px] font-semibold">
          HTML (HyperText Markup Language) is the standard language used to structure and present content on the web
           by defining elements like headings, paragraphs, links, images, and more.
           </p>  
             
           <div className="ml-[20px]">
           <p className="grid grid-cols justify-items-center w-[140px] bg-blue-500 text-[#fcfafa]
           hover:bg-blue-600 rounded-lg ">
                      <Link href='http://localhost:3000/blog/post1'>
            <button type="button" name="button">Read More</button>
            </Link>
            </p>
            
          </div>
        
  </div>



<div className="w-[400px]  my-[30px]">
          <div className='w-[400px] h-[350px] border-[12px] border-[#d0d5f3] relative'>
                      <Image className='absolute h-[330px]' src='/images/blogsImg/css.PNG' alt='image' width={400} height={100}/>
          </div>
          <p className="text-[18px] font-semibold">
          CSS (Cascading Style Sheets) is a language used to style and format the appearance of HTML elements,
           including layouts, colors, fonts, and responsiveness, to enhance the visual design of web pages.
           </p>  

           <div className="ml-[20px]">
           <p className="grid grid-cols justify-items-center w-[140px] bg-blue-500 text-[#fcfafa]
           hover:bg-blue-600 rounded-lg ">
                      <Link href='http://localhost:3000/blog/post2'>
            <button type="button" name="button">Read More</button>
            </Link>
            </p>
          </div>
          </div>



      <div className="w-[400px]">
          <div className='w-[400px] h-[350px] border-[12px] border-[#d0d5f3] relative'>
                      <Image className='absolute h-[330px]' src='/images/blogsImg/javascript.PNG' alt='image' width={400} height={100}/>
          </div>
          <p className="text-[18px] font-semibold">
          JavaScript is a flexible programming language that enables the creation of dynamic, interactive features on websites, 
          allowing developers to enhance user experiences with real-time updates and complex functionalities.
           </p>  

           <div className="ml-[20px] ">
           <p className="grid grid-cols justify-items-center w-[140px] bg-blue-500 text-[#fcfafa]
           hover:bg-blue-600 rounded-lg ">
                      <Link href='http://localhost:3000/blog/post3'>
            <button type="button" name="button">Read More</button>
            </Link>
            </p>
          </div>
          </div>
    
          
      </div>
      
      {/* //Hero image start button text */}
      
      
      {/* //bogs boxes start*/}
      
      <div className='sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 justify-items-center mt-[30px]'>

      <div className="w-[400px]">
          <div className='md:w-[400px] h-[350px] border-[12px] border-[#d0d5f3] relative'>
                      <Image className='absolute h-[330px]' src='/images/blogsImg/typescript.PNG' alt='image' width={400} height={100}/>
          </div>
          <p className="text-[18px] font-semibold">
          TypeScript is a strongly typed superset of JavaScript that adds static type checking and modern features,
           enabling developers to write more reliable, maintainable, and scalable code for web applications.
           </p>  

           <div className="ml-[20px]">
           <p className="grid grid-cols justify-items-center w-[140px] bg-blue-500 text-[#fcfafa]
           hover:bg-blue-600 rounded-lg ">
                      <Link href='http://localhost:3000/blog/post4'>
            <button type="button" name="button">Read More</button>
            </Link>
            </p>
          </div>
          </div>





          <div className="w-[400px] my-[30px]">
          <div className='w-[400px] h-[350px] border-[12px] border-[#d0d5f3] relative'>
                      <Image className='absolute h-[330px]' src='/images/blogsImg/react.PNG' alt='image' width={400} height={100}/>
          </div>
          <p className="text-[18px] font-semibold">

          React is a JavaScript library for building user interfaces, enabling developers to create reusable components
           and efficiently manage the dynamic rendering of web application views.
           </p>  

           <div className="ml-[20px]">
           <p className="grid grid-cols justify-items-center w-[140px] bg-blue-500 text-[#fcfafa]
           hover:bg-blue-600 rounded-lg ">
                      <Link href='http://localhost:3000/blog/post5'>
            <button type="button" name="button">Read More</button>
            </Link>
            </p>
          </div>
          </div>

      
      

          <div className="w-[400px]">
          <div className='w-[400px] h-[350px] border-[12px] border-[#d0d5f3] relative'>
                      <Image className='absolute h-[330px]' src='/images/blogsImg/nextjs.PNG' alt='image' width={400} height={100}/>
          </div>
          <p className="text-[18px] font-semibold">

          Next.js is a React-based framework for building fast, scalable web applications, offering features like server-side rendering,
           static site generation, API routes, and optimized performance out of the box.
           </p>  

           <div className="ml-[20px]">
           <p className="grid grid-cols justify-items-center w-[140px] bg-blue-500 text-[#fcfafa]
           hover:bg-blue-600 rounded-lg ">
                      <Link href='http://localhost:3000/blog/post6'>
            <button type="button" name="button">Read More</button>
            </Link>
            </p>
          </div>
          </div>
      
          
      </div>
      
      {/* //Bog boxes End */}
      

     </div>
     <div className="mx-[10px]">
      <Comments/>
    </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

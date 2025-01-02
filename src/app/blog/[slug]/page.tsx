import { ReactNode } from "react";
import PageHeader from  '@/app/components/PageHeader/PageHeader'
import Comments from '@/app/components/Comments/Comments'


export default function BlogPost({ params }:{params : {slug:string}}) {
    const { slug } = params;

    // Sample blog posts data
    const blogPosts: Record<string, {title:string, content:ReactNode, commentSection?: ReactNode}> = {
        post1: {
            title: "HTML",
            content: (
<>
            <h1 className="text-[35px] font-bold mt-[70px]">HTML: The Backbone of Every Web Page</h1>
    <p className="text-[25px]">
    In the vast world of web development, HTML (HyperText Markup Language) stands as the fundamental building block.
     It’s the first step to creating websites and web applications, providing the structure and framework needed for everything from simple blogs to complex online systems.
     Whether you're just starting out in the world of web development or looking to refresh your knowledge, understanding HTML is crucial.
 </p>

 <h1 className="text-[35px] font-bold mt-[70px]">What is HTML?</h1>
 <p className="text-[25px]">
 HTML is a markup language, not a programming language, and its job is to structure content on the web. It uses tags to describe the content and structure of a page. 
 These tags help browsers interpret and display text, images, links, and other media elements correctly.
 </p>

 <h1 className="text-[35px] font-bold mt-[70px]">Why is HTML Important?</h1>
 <p className="text-[25px]">
 Structure: HTML is responsible for structuring all content on the web. Every image, link, video, or text element is placed within HTML tags.
Accessibility: Proper HTML allows websites to be easily navigated and understood by users, including those using screen readers or assistive technologies.
SEO: Search engines rely on well-structured HTML to index websites correctly. Tags like title , meta , and header help search engines understand what your page is abou    
 </p>

</>
 ),
   commentSection:<Comments/>

        },
        post2: {
            title: "CSS",
            content:(<>
                        <h1 className="text-[35px] font-bold mt-[70px]">CSS: The Style Sheet That Brings Websites to Life</h1>
                        <p className="text-[25px]">In the world of web development, CSS (Cascading Style Sheets) is the magic ingredient that transforms plain HTML into visually stunning web pages.
                             While HTML provides the structure, CSS is responsible for styling, layout, and design.
                             It’s an essential tool for creating beautiful, responsive, and user-friendly websites.</p>

                        <h1 className="text-[35px] font-bold mt-[70px]">What is CSS?</h1>
                        <p className="text-[25px]">  
                        CSS is a stylesheet language used to describe how HTML elements are displayed. With CSS, you can control the color, font, spacing, and layout of a webpage. 
                        It allows developers to separate content (HTML) from presentation (CSS), ensuring cleaner and more maintainable code. </p>

                        <h1 className="text-[35px] font-bold mt-[70px]">Why CSS Matters</h1>
                        <p className="text-[25px]">Design and Aesthetics: CSS allows developers to craft visually appealing designs, from color schemes to typography.
Responsive Design: Using media queries, CSS ensures websites look great on all devices, from desktops to smartphones.
Efficiency: With a single stylesheet, you can control the appearance of multiple web pages, reducing duplication.
Animation and Interactivity: CSS enables smooth transitions, animations, and hover effects, adding life to a webpage.</p>

                        <h1 className="text-[35px] font-bold mt-[70px]">Key Features of CSS</h1>
                        <p className="text-[25px]">Selectors: Target specific HTML elements to apply styles.
Box Model: Control margins, borders, padding, and the element's size.
Flexbox and Grid: Simplify complex layouts and align elements dynamically</p>
            </>),
               commentSection:<Comments/>

        },
        post3: {
            title: "Javascript",
            content: (
                <>
                            <h1 className="text-[35px] font-bold mt-[70px]">JavaScript: The Language That Powers the Web</h1>
                            <p className="text-[25px]">
                            In the realm of web development, JavaScript stands as a cornerstone. While HTML structures content and CSS styles it, JavaScript adds interactivity, enabling dynamic and responsive user experiences.
                             From simple click events to complex web applications, JavaScript is the key to creating engaging websites.
                            </p>

                            <h1 className="text-[35px] font-bold mt-[70px]">What is JavaScript?</h1>
                            <p className="text-[25px]"> 
                            JavaScript is a programming language that runs in the browser. Unlike HTML and CSS, which are static, JavaScript allows developers to manipulate web elements dynamically. 
                            It’s versatile, working seamlessly with both the front-end and back-end through environments like Node.js.    
                             </p>

                            <h1 className="text-[35px] font-bold mt-[70px]">Why Learn JavaScript?
                            </h1>
                            <p className="text-[25px]">
                            Interactivity: JavaScript brings websites to life with features like animations, form validation, and interactive elements.
Versatility: Beyond browsers, JavaScript powers servers (Node.js), mobile apps, desktop applications, and even IoT devices.
Rich Ecosystem: With frameworks like React, Angular, and Vue, JavaScript simplifies building complex applications.
In-demand Skill: JavaScript is one of the most popular and sought-after skills in web development.
                            </p>

                            <h1 className="text-[35px] font-bold mt-[70px]">Key Features of JavaScript</h1>
                            <p className="text-[25px]">  
                            DOM Manipulation: Modify HTML and CSS dynamically.
Event Handling: Respond to user actions like clicks and key presses.
Asynchronous Programming: Handle tasks like API calls using promises and async/await.
ES6+ Features: Modern JavaScript introduces powerful tools like arrow functions, classes, and template literals.
                            </p>
                </>
            ),
            commentSection:<Comments/>

        },

        post4: {
            title: "TypeScript",
            content: (<>
            <h1 className="text-[35px] font-bold mt-[70px]">TypeScript: The Future of JavaScript Development</h1>
            <p className="text-[25px]">
            In the ever-evolving world of web development, TypeScript has emerged as a game-changer.
             Built on top of JavaScript, TypeScript adds optional static typing and robust tooling, making it a favorite among developers for building scalable and maintainable applications.
            </p>


            <h1 className="text-[35px] font-bold mt-[70px]">What is TypeScript?</h1>
            <p className="text-[25px]">TypeScript is a superset of JavaScript, developed by Microsoft, that introduces static typing to JavaScript. This means you can define types for your variables, functions, and objects, catching potential bugs during development rather than at runtime. 
                The TypeScript code is then compiled into plain JavaScript, ensuring compatibility with all browsers and environments.</p>


            <h1 className="text-[35px] font-bold mt-[70px]">Why Use TypeScript?</h1>
            <p className="text-[25px]">
            Type Safety: TypeScript’s type system reduces runtime errors by catching issues at compile time.
Better Tooling: Enhanced autocomplete, intelligent code navigation, and refactoring tools boost developer productivity.
Scalability: TypeScript is ideal for large projects, offering clear contracts for data structures and APIs.
Community Support: TypeScript is widely adopted, with strong support from frameworks like Angular, React, and Vue.
            </p>


            <h1 className="text-[35px] font-bold mt-[70px]">Key Features of JavaScript</h1>
            <p className="text-[25px]"> 
            Interfaces: Define the shape of objects and ensure consistency across your code.
Generics: Write reusable components with type flexibility.
Modules: Use ES6 modules for clean and organized code.
Compatibility: TypeScript seamlessly integrates with existing JavaScript codebases.
            </p>
            </>),
   commentSection:<Comments/>

        },
        post5: {
            title: "React",
            content: (
                <>
                            <h1 className="text-[35px] font-bold mt-[70px]">React: Revolutionizing Front-End Development
                            </h1>
                            <p className="text-[25px]">
                            In the fast-paced world of web development, React has established itself as one of the most popular libraries for building dynamic and interactive user interfaces.
                             Developed by Facebook in 2013, React enables developers to create fast, scalable, and reusable UI components for modern web applications. </p>


                            <h1 className="text-[35px] font-bold mt-[70px]">What is React?
                            </h1>
                            <p className="text-[25px]"> 
                            React is a JavaScript library focused on building user interfaces. Unlike traditional approaches, React uses a component-based architecture, breaking down the UI into reusable building blocks. 
                            These components can manage their state and react to changes, making web applications more dynamic and efficient.
                            </p>


                            <h1 className="text-[35px] font-bold mt-[70px]">Why Choose React?
                            </h1>
                            <p className="text-[25px]">Component-Based Architecture: React's modular approach makes code easier to manage and reuse.
Virtual DOM: React updates only the parts of the UI that change, ensuring high performance.
Declarative Syntax: React's syntax makes it easier to design and visualize UI states.
Rich Ecosystem: React works seamlessly with tools like Redux, Next.js, and React Router for advanced functionality.
Community Support: With an active developer community, countless libraries, and extensive documentation, React is highly accessible.  </p>


                            <h1 className="text-[35px] font-bold mt-[70px]">Key Features of React</h1>
                            <p className="text-[25px]">JSX: Combines JavaScript and HTML-like syntax, making UI code more intuitive.
State and Props: Manage dynamic data and pass it between components.
Hooks: Introduced in React 16.8, hooks like useState and useEffect simplify state management and lifecycle methods.
React Native: Extend React’s capabilities to mobile app development.
 </p>
                </>
            ),
            commentSection:<Comments/>

        },
        post6: {
            title: "Next.js",
            content: (<>
                            <h1 className="text-[35px] font-bold mt-[70px]">Next.js: The Future of Web Development
                            </h1>
                            <p className="text-[25px]"> Next.js has emerged as a powerful framework for building modern web applications. Developed by Vercel, it extends the capabilities of React, offering features like server-side rendering, static site generation, and API routes—all out of the box. 
                                For developers looking to create fast, scalable, and SEO-friendly applications, Next.js is a game-changer.</p>


                            <h1 className="text-[35px] font-bold mt-[70px]">What is Next.js?</h1>
                            <p className="text-[25px]">Next.js is a React framework designed to streamline the development of web applications. While React focuses solely on the UI, Next.
                                js takes care of the entire application lifecycle, including routing, data fetching, and performance optimization.</p>


                            <h1 className="text-[35px] font-bold mt-[70px]">Key Features of Next.js</h1>
                            <p className="text-[25px]">File-Based Routing: Simplifies navigation by using the file structure to define routes.
Server-Side Rendering (SSR): Renders pages on the server for better performance and SEO.
Static Site Generation (SSG): Creates static HTML pages at build time for lightning-fast load speeds.
API Routes: Build serverless APIs directly in your application without additional backend services.
Image Optimization: The next/image component ensures responsive, fast-loading images.
Automatic Code Splitting: Only the code required for a specific page is loaded, improving performance.</p>


                            <h1 className="text-[35px] font-bold mt-[70px]">Why Choose Next.js?</h1>
                            <p className="text-[25px]">SEO-Friendly: Server-side rendering ensures pages are easily indexed by search engines.
Developer Experience: With built-in features like hot reloading and TypeScript support, Next.js simplifies the development process.
Performance: Static and dynamic rendering options, along with image and script optimization, make Next.js apps incredibly fast.
Versatility: Whether building a blog, e-commerce site, or complex web app, Next.js provides tools to meet your needs.</p>
            </>),

commentSection:<Comments/>

        }
    };

    // Fetch the post based on slug
    const post = blogPosts[slug];

    // Handle slug not matching any post
    if (!post) {
        return <h1>404 - Post Not Found</h1>;
    }

    return (
        <div>
            <PageHeader/>
        <div className="bg-[#a7abe4]">
            <div className='bg-slate-200 grid grid-col justify-items-center sm:w-[350px] mx-auto
                 text-[35px] font-semibold mt-2 text-[#272c26] ]' style={{fontFamily: "myRoboto"}}>
            <h1>{post.title}</h1>
            </div>

            <div className="mx-[50px]">
            <p>{post.content}</p>
            <p>{post.commentSection}</p>
            </div>
        </div>
        </div>
    );
}

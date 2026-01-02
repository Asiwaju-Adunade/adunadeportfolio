function Projects() {
    return(
        <>
             <div className="mx-15">
                <h1 className="font-bold text-2xl text-red-400">My project -</h1>
                  <p>Here are some of the projects I have worked on :</p><br/>

                {/* CALCULAOR PROJECT */}
            <div className="md:flex gap-10">
            <div>
                 <strong className="text-red-300  my-5 text-3xl"> Calculator App</strong>
                 <p className="font-bold text-xl"> Description : </p>
                 <p> I built an interactive calculator app that perfoms basic arithmetic operation like ( addition, subtraction, multiplication and division.) It enables users to perform basic arithmetric operation, clear and reset input, input numbers and operators and get instant result.</p><br/>
                 <p className="font-bold text-xl"> Key Features : </p>
                 <p>It has a clear and reset function.</p>
                 <p>It has responsive design and layout which works smoothly across mobile and desktop screens.</p>
                 <p> Error handling: handles invalid inputs by displaying error.</p>
                 <p> User friendly interface.</p><br/>
                 <strong className="text-xl"> Tools :</strong>
                 <li> HTML</li>
                 <li> CSS</li>
                 <li> Tailwind CSS</li>
                 <li> JavaScript</li> <br/>
                 <button className=" p-2 rounded hover:bg-amber-300  text-black bg-blue-300  cursor-pointer"><a href="https://adunadecalculator.netlify.app/">View project</a></button>
            </div>  
                 {/* CALCULATOR IMAGE */}
            <div>
                 <img className="rounded mt-10" src="/calculator img.jpg" alt="calculator image" /> 
            </div>
             </div>
                 <hr className="border-2 mt-5 border-red-500  mb-5" />

                {/* CLONED WEBSITE PROJECT */}
            <div>
                 <strong className="text-red-300 text-3xl my-5"> Cloned Website: Chi Farms</strong>
                 <p className="font-bold text-xl"> Description: </p>
                 <p> I built a responsive clone of the Chi farm website to practice and improve my frontend development skills. The project focuses on recreating a clean and professional agricultural business website layout. The website consist of several pages which is the  Homepage, About Us, Our Products, Our Partners, Careers, Contact Us. </p><br/>
                 <p className="font-bold text-xl">Key Features:</p>
                 <p>Fully responsive design and layout which works smoothly across mobile and desktop screens.</p>
                  <p> Recreated homepage and other key sections of the original website.</p>
                 <p> Smooth navigation and interactive user interface.</p><br/>
                 <strong className="text-2xl"> Tools : </strong>
                  <li>HTML</li>
                 <li> CSS</li>
                 <li> Tailwind CSS</li><br/>
                 <button className=" p-2 rounded hover:bg-amber-300  text-black bg-blue-300  cursor-pointer"><a href="https://adunadeclonedwebsite.netlify.app/">View project</a></button>
            </div>
                 <hr className="border-2 mt-5 border-red-500  mb-5" />
                
                {/* TODO LIST APP PROJECT */}
             <div className="md:flex gap-10">
             <div>
                 <strong className="text-red-300 text-3xl my-5"> Todo List App</strong>
                 <p className="font-bold text-xl"> Description: </p>
                 <p> I built a simple and user-friendly Todo List App that allows users to manage their tasks efficiently. The app enables users to add new tasks, mark tasks as completed, and delete tasks from the list. It provides a clean and intuitive interface for organizing daily activities.</p><br/>
                 <p className="font-bold text-xl"> Key Features: </p>
                 <p>Responsive design and layout which works smoothly across mobile and desktop screens.</p>
                 <p> User-friendly interface.</p>
                 <p> Smooth navigation and interactive user interface.</p><br/>
                 <strong className="text-2xl"> Tools : </strong>
                 <li>HTML</li>
                 <li> CSS</li>
                 <li> Tailwind CSS</li>
                 <li> JavaScript</li><br/>
                 <button className=" p-2 rounded hover:bg-amber-300  text-black bg-blue-300  cursor-pointer"><a href="https://aduntodolistapp.netlify.app/">View project</a></button>
             </div>
             <div>
                   {/* TODO LIST IMAGE */}
                     <img className="mt-20 rounded"  src="/todoimage.jpg"   alt="todoimage"/> 
             </div>
             </div>
                 <hr className="border-2 mt-10 border-red-500  mb-5" />

                 {/* WEATHER APP PROJECT */}
            <div className="md:flex gap-10">
            <div>
                 <strong className="text-red-300 text-3xl my-5"> Weather App</strong>
                 <p className="font-bold text-xl"> Description: </p>
                 <p> I built a weather app that provides users with real-time weather information for their current location or any specified city. The app fetches data from a weather API and displays key weather details such as temperature and weather conditions.</p><br/>
                 <p className="font-bold text-xl"> Key Features: </p>
                 <p>Responsive design and layout which works smoothly across mobile and desktop screens.</p>
                 <p> User-friendly interface.</p>
                 <p> Smooth navigation and interactive user interface.</p><br/>  
                 <strong className="text-2xl"> Tools : </strong> 
                 <li>HTML</li>
                 <li> CSS</li>   
                 <li> Tailwind CSS</li>
                 <li> JavaScript</li>
                 <li> Open Weather API</li><br/>
                 <button className=" p-2 rounded hover:bg-amber-300  text-black bg-blue-300  cursor-pointer"><a href="https://adunadeweatherapp.netlify.app/">View project</a></button>
            </div>
            {/* WEATHER APP IMAGE */}
            <div>
                 <img className="rounded mt-10" src="/weatherimg.jpg" alt="weatherimage"/>
            </div>
            </div>
                <hr className="border-2 mt-5 border-red-500  mb-5" />

                    {/* CART PAGE PROJECT */}
                <div className="md:flex gap-10"> 
                <div>
                <strong className="text-red-300 text-3xl my-5">Cart Page</strong>
                <p className="font-bold text-xl"> Description: </p>
                <p> I built a cart page that display list of courses in the cart and allow user to delete items from the cart. It also shows a payment successful modal on clicking mark as paid, and the modal closes on clicking close modal. </p><br/>
                <p className="font-bold text-xl"> Key Features: </p>
                <p>Responsive design and layout which works smoothly across mobile and desktop screens.</p>
                <p> User-friendly interface.</p>
                <p> Smooth navigation and interactive user interface.</p><br/>
                <strong className="text-2xl"> Tools : </strong>
                <li>HTML</li>
                <li> CSS</li>
                <li> Tailwind CSS</li>
                <li> React</li><br/>
                 <button className=" p-2 rounded hover:bg-amber-300  text-black bg-blue-300  cursor-pointer"><a href="https://asiwajuassesment.netlify.app/">View project</a></button>
                </div>
                {/* cart page image */}
                <div>
                 <img className="rounded mt-10" src="/cartimage.jpg" alt="cartimage"/>
                </div>
                </div>
                <hr className="border-2 mt-5 border-red-500  mb-5" />

                {/* PERSONAL PORTFOLIO PROJECT */}
                <strong className="text-red-300 text-3xl my-5"> Personal Portfolio Website</strong>
                <p className="font-bold text-xl"> Description: </p>
                <p> I built a personal portfolio website to showcase my skills, projects, and experiences as a frontend developer. The website serves as an online resume and portfolio, providing potential employers and clients with an overview of my work and capabilities.</p><br/>
                <p className="font-bold text-xl"> Key Features: </p>
                <p>Responsive design and layout which works smoothly across mobile and desktop screens.</p>
                <p> User-friendly interface.</p>
                <p> Smooth navigation and interactive user interface.</p><br/>
                <strong className="text-2xl"> Tools : </strong>
                <li>HTML</li>
                <li> CSS</li>
                <li> Tailwind CSS</li>
                <li> React</li>
                <hr className="border-2 mt-5 border-red-500  mb-5" />
            </div>
        </>
    )
}
export default Projects;








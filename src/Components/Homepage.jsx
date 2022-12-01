
import "../Components/Modal.css"
import "../App.css";
import image from "../images/david.jpg"
import Navbar from "./Navbar";


function HomePage(){ 
    
      return (
        <>
          <div>
            <Navbar />
            <div className="pt-4 pl-36">
            <div className="flex space-x-24">
              <div className="">
                <img class="object-cover h-[300px] w-[500px] rounded" src={image}/>
              </div>

              <div className="text-black-300 font-bold p-12 text-xl">
                  <p className="flex flex-start text-6xl">Hi there!</p>
                  <p className="text-gray-400">My passion is to use my software engineering skills to make it easy <br/>for people to access services that are essential to them.  To achieve <br/>that  I work hard and study relentlesly in order to keep up with the fast <br/>growing technology industry</p>
              </div>
              </div>
            </div>
            <div className="flex flex-start pt-24 pl-32 space-x-24">
            <div className="text-gray-400 text-xl">
                <div>
                <p className="flex flex-start text-black text-2xl">My career So Far</p>
                <p>
                  Always up for a challenge I was worked on many projects. Noticably a bus tracking that<br/>
                  that allowed users to know when the next bus will arrive at their bus stop. I also worked<br/>
                  on a web app that kept records of construction workers attendances and provided  them<br/>
                  payments to them at the end of two weeks
                </p>
                </div>
            </div>
            <div className="pl-24">
              <div className="flex space-x-4 font-bold">
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">Javascript</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React Native</p>
              </div>
              <div className="flex space-x-4 font-bold">
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">Javascript</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React Native</p>
              </div>
              <div className="flex space-x-4 font-bold">
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">Javascript</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React Native</p>
              </div>
              <div className="flex space-x-4 font-bold">
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">Javascript</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400">React</p>
                <p className="bg-gray-100 p-2 rounded border w-36 border-gray-400 font-bold">React Native</p>
              </div>
              
            </div>
                
               
            </div>
          </div>
        </>
    );
  }
  
  export default HomePage;
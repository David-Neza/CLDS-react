import profilePic from "../images/davo.jpg"
import background from "../images/bg.jpeg"
import flag from "../images/flag.png"
import { useState } from "react";
import Login from "./Login";
import "../Components/Modal.css"
import "../App.css";


function HomePage() {

      const [modal, setModal] = useState(false);

      const toggleModal = () => {
        setModal(!modal);
      };
    
      return (
        <>
        <div className="flex">
          <div className="w-full md:w-4/6 lg:w-3/6 xl:w-[50%]  min-h-screen flex flex-col bg-[#FBF6F5]">
            <h3 className="flex items-start pl-24 pt-10 font-Roboto font-bold text-6xl">Fortaleza</h3>
            <div className="flex flex-col items-start justify-center pt-56 pl-24">
              <h3 className="font-Roboto font-bold text-7xl italic">Hello, <span className="text-5xl italic">my name is David</span> </h3>
              <p className="pt-6 font-Dancing text-3xl">A &nbsp; 
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span class="relative text-white">full stack software engineer</span>
              </span>
              &nbsp; from Rwanda
               <br/>
                  I will help your business reach greater heights
              </p>
              <div>
                  <button 
                      className="flex items-start ml-2 mt-12 font-Dancing text-lg bg-black text-white font-semibold py-4 px-12 border-2 border-black rounded hover:bg-yellow-600"
                      onClick={toggleModal}
                >
                      view my different project 
                  </button>

                  {modal && <Login toggleModal={toggleModal}/>}              
              </div> 
            </div>
          </div>
          <div className="flex-1 max-h-screen hidden md:block">
              <img className="object-cover h-full w-[75%]"
                  src={profilePic} 
                  alt="intore" />
            
          </div>
          <div className="w-[5%]">
              <div className="pt-4">
                <div class="space-y-2">
                <div class="w-9 h-1.5 bg-gray-600"></div>
                <div class="w-9 h-1.5 bg-gray-600"></div>
                <div class="w-9 h-1.5 bg-gray-600"></div>
                </div>
              </div>
              <div className="pr-[100%] pt-[300%]">
                <p className="pt-6 font-Dancing text-3xl">
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
              <span class="relative text-white">Skills</span>
              </span>
              &nbsp; 
              </p>
                <p className="font-Dancing font-bold text-2xl">Javascript</p>
                <p className="font-Dancing font-bold text-2xl">Flutter</p>
                <p className="font-Dancing font-bold text-2xl">Html</p>
                <p className="font-Dancing font-bold text-2xl">Css</p>  
                <p className="font-Dancing font-bold text-2xl">Github</p>
                <p className="font-Dancing font-bold text-2xl">tailwindcss</p>
                <p className="font-Dancing font-bold text-2xl">mysql</p>
               
              </div>
          </div>
        </div>
        </>
    );
  }
  
  export default HomePage;
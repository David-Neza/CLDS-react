import intore from "../images/intore.jpeg"
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
    
      // if(modal) {
      //   document.body.classList.add('active-modal')
      // } else {
      //   document.body.classList.remove('active-modal')
      // }
    
      return (
        <>
          {/* <button onClick={toggleModal} className="btn-modal">
            Open
          </button>
    
          {modal && <Login toggleModal={toggleModal}/>}
          <p>us  excepturi impedit quae harum eum sit corpo</p>
        </>
      ); */}

        <div className="flex">
          <div className="w-full md:w-4/6 lg:w-3/6 xl:w-4/6  min-h-screen flex flex-col justify-center">
              <div className="">
              <div className="flex-col pl-32">
                <div className="flex">
                    <h1 className="font-mono text-6xl text-black-400">Welcome</h1>
                <img className="h-[30px]" 
                    src={flag} 
                    alt=""
                
                />
                </div>
                <div className="flex items-start">
                  <div className="flex-col">
                  <p className="italic bg-green-200 p-4 italic text-justify text-black-800">
                    The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful  <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   <br/> The best place to learn all things Rwandan Culture
                  a single distinct meaningful   
                  </p>
                  </div>
                  
                </div>
              </div>

              <div>
                  <button 
                      className="flex items-start ml-32 mt-4 font-mono text-lg bg-transparent text-black-700 font-semibold py-2 px-12 border-2 border-black rounded "
                      onClick={toggleModal}
                >
                      Login
                  </button>

                  {modal && <Login toggleModal={toggleModal}/>}              
              </div> 
              </div>
              
          </div>
          <div className="flex-1 max-h-screen hidden md:block">
              <img className="object-cover h-[100%] flex-shrink-0"
                  src={intore} 
                  alt="intore" />
            
          </div>
        </div>
        </>
    );
  }
  
  export default HomePage;
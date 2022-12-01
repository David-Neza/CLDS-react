
import "../Components/Modal.css"
import "../App.css";
import image from "../images/david.jpg"
import Navbar from "./Navbar";
import { Popover } from 'antd';
import project1 from "../images/bbcrweb.png"

function HomePage(){ 
  const content = (
    <div>
      <p className="tex-red-400">Contact me on Whatsapp : 0781636072</p>
      <p>Message me on <a href="https://www.linkedin.com/in/david-neza-tuyishimire-510845225/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div>
  );
      return (
        <>
          <div>
            <Navbar />
            <div className="pt-16 pl-20">
            <div className="flex space-x-24">
              <div className="">
                <img class="object-cover h-[600px] w-[700px] rounded" src={image}/>
              </div>

              <div className="grid text-black-300 font-bold text-xl pt-48 place-items-start">
                  <p className="flex flex-start text-3xl">Hi there!</p>
                  <p className="flex flex-start font-[1500] text-6xl">I am David Neza Tuyishimire <br/>
                  A software Engineer based in <br/> Kigali, Rwanda</p>
                  <Popover content={content}>
                  <p className="border-2 border-red-300 w-28 text-red-300 font-bold"> Say Hello!</p>
             
  </Popover>
            </div>
              </div>
            </div>
          <div className="pt-10">
            <h1 className="font-bold text-6xl">Latest Works</h1>
            <div className="flex space-x-24 pl-48">
            <div className="">
                <img class="object-cover h-[300px] w-[700px] rounded" src={project1}/>
              </div>

              <div className="grid place-items-start">
              <h1 className="font-bold text-3xl">Bibleway Baptist Church website</h1>
              <p>This is a website I create for my church You can visit this website to go <br/>
              the website and learn more about the church</p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex space-x-24 pl-48">
            <div className="">
                <img class="object-cover h-[300px] w-[700px] rounded" src={project1}/>
              </div>

              <div className="grid place-items-start">
              <h1 className="font-bold text-3xl">Bibleway Baptist Church website</h1>
              <p>This is a website I create for my church You can visit this website to go <br/>
              the website and learn more about the church</p>
              </div>
            </div>
          </div>
          </div>
        </>
    );
  }
  
  export default HomePage;
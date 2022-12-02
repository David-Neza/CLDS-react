import "../Components/Modal.css";
import "../App.css";
import image from "../images/david.jpg";
import Navbar from "./Navbar";
import { Popover } from "antd";
import project1 from "../images/bbcrweb.png";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function HomePage() {
  const content = (
    <div>
      <p className="tex-red-400">Contact me on Whatsapp : 0781636072</p>
      <p>
        Message me on{" "}
        <a
          href="https://www.linkedin.com/in/david-neza-tuyishimire-510845225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
  const hoverOnWork = (
    <div>
      <p className="tex-red-400">Click to view work</p>
    </div>
  );
  return (
    <>
      <div>
        <Navbar />
        <div className="pt-16 pl-20">
          <div className="flex space-x-24">
            <div className="">
              <img
                class="object-cover h-[600px] w-[700px] rounded"
                src={image}
              />
            </div>

            <div className="grid text-black-300 font-bold text-xl pt-48 place-items-start">
              <p className="flex flex-start text-3xl">Hi there!</p>
              <p className="flex flex-start font-[1500] text-6xl">
                I am David Neza Tuyishimire <br />
                A software Engineer based in <br /> Kigali, Rwanda
              </p>
              <Popover content={content}>
                <p className="border-2 border-red-300 w-28 text-red-300 font-bold">
                  {" "}
                  Say Hello!
                </p>
              </Popover>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-6xl">Latest Works</h1>
          <Popover content={hoverOnWork}>
            <a
              className="hover:no-underline
            text-blue-600 hover:text-blue-800 
            visited:text-black"
              href="https://bibleway-baptist-churches-of-rwanda.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ml-[400px] w-[1000px] drop-shadow-2xl hover:bg-[#eff6ff] rounded">
                <div className="flex space-x-24">
                  <div className="">
                    <img
                      class="object-cover h-[300px] w-[700px]"
                      src={project1}
                    />
                  </div>

                  <div className="grid place-items-start">
                    <h1 className="font-bold text-2xl pr-8">
                      Bibleway Baptist Church website
                    </h1>
                    <p>
                      This is a website I create for my church You can visit
                      this website to go <br />
                      the website and learn more about the church
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Popover>

          <div className="mt-16">
            <Popover content={hoverOnWork}>
              <a
                className="hover:no-underline
            text-blue-600 hover:text-blue-800 
            visited:text-black"
                href="https://bibleway-baptist-churches-of-rwanda.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ml-[400px] w-[1000px] drop-shadow-2xl hover:bg-[#eff6ff] rounded">
                  <div className="flex space-x-24">
                    <div className="">
                      <img
                        class="object-cover h-[300px] w-[700px]"
                        src={project1}
                      />
                    </div>

                    <div className="grid place-items-start">
                      <h1 className="font-bold text-2xl pr-8">
                        Bibleway Baptist Church website
                      </h1>
                      <p>
                        This is a website I create for my church You can visit
                        this website to go <br />
                        the website and learn more about the church
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Popover>
          </div>
        </div>

        <div className="mt-8">
          <footer class="p-4 bg-red-400 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-xl text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                David Neza Tuyishimire™
              </a>
              . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="#"
                  class="mr-4 md:mr-6 hover:no-underline
            text-black hover:text-blue-800 
            visited:text-black font-bold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 md:mr-6 hover:no-underline
            text-black hover:text-blue-800 
            visited:text-black font-bold"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePage;

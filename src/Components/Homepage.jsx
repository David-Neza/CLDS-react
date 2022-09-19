import intore from "../images/intore.jpeg"
import flag from "../images/flag.png"

function HomePage() {
    return (
      <div className="flex">
        <div className="w-full md:w-4/6 lg:w-3/6 xl:w-4/6  min-h-screen flex flex-col justify-center">
            {/* <img src={flag} alt="" /> */}
              <h1 className="fotn-mono text-2xl font-bold">Welcome</h1>
              <p className="font-serif">to Culture Learning Digital System</p>
            <div>
              <p className="font-serif">The best place to learn all things Rwandan Culture</p>
            </div>
            <div>
                <button className="font-mono text-lg bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-16 border border-black-700 hover:border-transparent rounded">
                    Login
                </button>
              
            </div>
        </div>
        <div className="flex-1 max-h-screen hidden md:block">
             <img className="object-cover h-[100%] flex-shrink-0"
                src={intore} 
                alt="intore" />
          
        </div>
      </div>
    );
  }
  
  export default HomePage;
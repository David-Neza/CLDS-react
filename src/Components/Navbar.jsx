const Navbar = () => {
  return (
    <>
      <div className="pt-8 pl-20 pr-20">
        <div className=" font-Roboto text-xl flex justify-between mx-auto">
          <div className="flex font-bold space-x-12">
            <p>Home</p>
            <a
              className="hover:no-underline
                    text-blue-600 hover:text-blue-800 
                    visited:text-black"
              href="https://www.linkedin.com/in/david-neza-tuyishimire-510845225/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <p>Contact Me</p>
            <p className="bg-black text-white text-bold w-28 h-8 rounded">
              View Work
            </p>
          </div>
          <p className="text-black font-extrabold">David Neza Tuyishimire</p>
          <p className="border-2 border-red-300 w-28 text-red-300 font-bold">
            Hire Me >{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

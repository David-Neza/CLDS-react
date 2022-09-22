import './Modal.css';

const Login = ({toggleModal}) => {
    return (   
        <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
        <div className="">
        <div className="titleCloseBtn font-bold text-red-800 text-2xl">
          <button
            onClick={toggleModal}
          >
            X
          </button>
        </div>
        <h1 className="py-4 font-mono text-4xl text-sky-700">Login</h1>
        <form action="">
            <div className="mb-4">
               <label className="pr-[400px] block text-grey-darker text-sm font-bold mb-2" 
                 for="username">
                 Email
               </label>
               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                 id="email"
                 type="email"
                 placeholder="E-mail"/>
             </div>
           <div className="">
            <label className="pr-[400px]  block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-sky-700 text-white py-2 px-4 font-bold rounded"
            
            >
                Sign in
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                Forgot Password?
            </a>
            </div>
        </form>
    </div>
    </div>
    </div>
     );
}
 
export default Login;
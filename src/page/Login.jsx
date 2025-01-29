import { useNavigate } from "react-router";
import Dashboard from "./Dashboard";

const Login = () => {
  
  const navigate = useNavigate(); 
  const handleLogin =()=>{
      navigate('/dashboard')
    } 

    return(
      <body className="h-screen w-screen bg-[url('assets/foto.png')] bg-cover bg-left flex items-center">
        <div className="w-[0,416em] h-[0,6em] bg-white rounded-[20px] border-4 border-gray-200 p-8 m-12 flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-gray-500">Please enter your username and password here!</p>
        </div>
        <form>
          <div class="mb-4">
          
            <label for="username" className=" text-start block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" class="mt-1 p-3 w-full border rounded-md" required/>
          </div>
          <div class="mb-6">
            <label for="password" className="text-start block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" class="mt-1 p-3 w-full border rounded-md" required/>
          </div>
          <button onClick={handleLogin}  className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">Login</button>
          <h2>Dont have an Account? <a href='#Register' className="hover:text-orange-500">Register</a> </h2>
        </form>
        
      </div>
      </body>
    );
}

export default Login;
import { useNavigate, NavLink } from "react-router";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { httpService, setToken, setRefreshToken } from "../utils/auth";

const Login = () => {
  
  const [email, setUserName] = useState ("");
  const [password, setPassword] = useState ("");
  
  const navigate = useNavigate(); 
  const handleLogin =async(e)=>{
    e.preventDefault();      
    console.log("Check")
      
    const payload = {
      email,
      password
    }
    try {
      const response =await httpService.post('/auth/login', payload)
      console.log('response',response);
      const {access_token, refresh_token}=response.data;
      setToken(access_token)
      setRefreshToken(refresh_token);
      navigate('/dashboard')
    }catch (error) {
      console.log('error', error)

    }
    
  } 

    return(
      <div className="h-screen w-screen bg-[url('assets/images/foto.png')] bg-cover bg-left flex items-center">
        <div className="w-[0,416em] h-[0,6em] bg-white rounded-[20px] border-4 border-gray-200 p-8 m-12 flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-gray-500">Please enter your username and password here!</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
            
              <label htmlFor="username" className=" text-start block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="email"
                value={email} 
                id="username" 
                name="username" 
                placeholder="email"
                onChange={(e)=>setUserName(e.target.value)} 
                className="mt-1 p-3 w-full border rounded-md" 
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-start block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password"
                value={password} 
                name="password" 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)} 
                className="mt-1 p-3 w-full border rounded-md" 
                required
              />
            </div>
            <button type='submit' className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">Login</button>
            <h2>Dont have an Account? <NavLink to={'/login/register'} className="hover:text-orange-500">Register</NavLink> </h2>
          </form>
        
        </div>
      </div>
    );
}

export default Login;
import { NavLink } from "react-router";

const Register = () => {
    return(
        <div className="h-screen w-screen bg-[url('assets/images/foto.png')] bg-cover bg-left flex items-center">
            <div className="w-[0,416em] h-[0,6em] bg-white rounded-[20px] border-4 border-gray-200 p-8 m-12 flex flex-col">
                <div className="text-center mb-8">
                    <img src="assets/images/Icon.png" alt="Logo" className="mx-auto mb-4 w-1/3"/>
                    <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                    <p className="text-gray-500">Please enter your username and password here!</p>
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" placeholder="Username" className="mt-1 p-3 w-full border rounded-md" required/>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="email" id="email" name="email" placeholder="email" className="mt-1 p-3 w-full border rounded-md" required/>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="confirm-password" name="confirm password" placeholder="confirm-password" className="mt-1 p-3 w-full border rounded-md" required/>
                    </div>


                    <div className="mb-10">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" className="mt-1 p-3 w-full border rounded-md" required/>
                    </div>
                    <br/>
                    <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">Login</button>
                
                </form>
                <h2>Already have an Accout? <NavLink className="text-orange-600" to={'/login'}>Login</NavLink> </h2>
                
            </div>
        </div>
    );
}

export default Register;
import {Navigate, useNavigate} from "react-router";
import { getToken } from "../utils/auth";

//untuk ngecek apakah udh terautentikasi, kalo udah boleh lewat (merender komponen children), kalo ga balik ke log in
const ProtectedRoute = ({children})=>{

    //const navigate = useNavigate();
      
    const isAuthenticated =() =>{
        const token = getToken();
        console.log ('token', token);  
        if(!token) {
            return false
        }
        return true
    }
    
        
        
    return isAuthenticated ()? children : <Navigate to="/login"/>
}

export default ProtectedRoute; 
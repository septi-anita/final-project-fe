import {Navigate} from "react-router";
import { BrowserRouter } from 'react-router-dom';

//untuk ngecek apakah udh terautentikasi, kalo udah boleh lewat (merender komponen children), kalo ga balik ke log in
const ProtectedRoute = ({isAuthenticated, children})=>{
    return isAuthenticated? children : <Navigate to="/login"/>
}

export default ProtectedRoute; 
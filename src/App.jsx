import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
//import './App.css'
import Login from './page/Login';
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import Schedule from "./page/Reservation-schedule";
import Report from './page/Report-page';
import Rooms from './page/Rooms-page';
import Setting from "./page/Setting";
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./component/ProtectedRoute";

const App = () => {
  
  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/register' element={<Register/>}/>
        <Route path='/dashboard/*' element={
          <ProtectedRoute>
            <DashboardLayout/>
          </ProtectedRoute>    
        }>
          <Route index element={<Dashboard/>} />
          <Route path='schedule' element={<Schedule/>} />
          <Route path='rooms' element={<Rooms/>} />
          <Route path='report' element={<Report/>} />
          <Route path='setting' element={<Setting/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>

  )
}
export default App;
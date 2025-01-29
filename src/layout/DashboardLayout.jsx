import { NavLink, Outlet } from "react-router";
import { useState } from "react"; 
import Logo from'../assets/images/Icon.png'
import Arrow from'../assets/images/arrow-right.png'
import Dashboard from'../assets/images/element-3.png'
import Schedule from'../assets/images/clipboard-text.png'
import Rooms from'../assets/images/building.png'
import Report from'../assets/images/document-text.png'
import Setting from'../assets/images/setting-2.png'

const DashboardLayout = () => {
    
    const[pageTitle, setPage] = useState ("Dashboard")

        
    return (
       <div className="flex flex-row bg-slate-200">
            <nav className="fixed top-0 flex flex-col gap-7 h-full w-12 p-2 items-center bg-white">
                <ul className="flex flex-col gap-7 items-center">
                    <li>
                        <img src={Logo} ></img>
                    </li>
                    <li>
                        <img src={Arrow} ></img>
                    </li>
                    <li>
                        <NavLink to={'/dashboard'} onClick={()=>setPage("Dashboard")}>
                            <img src={Dashboard}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/schedule'} onClick={()=>setPage("Reservation Schedule")}>
                            <img src={Schedule}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/rooms'} onClick={()=>setPage("Rooms")}>
                            <img src={Rooms}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/report'} onClick={()=>setPage("Report")}>
                            <img src={Report}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/setting'} onClick={()=>setPage("Setting")}>
                            <img src={Setting}></img>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-col ml-12 ">
               
               {/*header*/}
                <div className="fixed top-0 left-12 right-0 flex flex-row-reverse gap-1 p-2 items-center bg-white">
                    <NavLink to={'/login'}>
                        user
                    </NavLink>
                    <h1 className="grow font-extrabold">{pageTitle}</h1>
                </div>
                
                {/*main content*/}
                <div className="mt-10">
                     <Outlet/>
                </div>
            </div>
       </div> 
    )
}

export default DashboardLayout;
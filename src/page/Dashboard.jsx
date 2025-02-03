import { useState, useEffect } from "react";
import { httpService } from "../utils/auth";

const Dashboard = () => {
    
    const [profile, setProfile] = useState ({})
    
    const fetchProfile = async ( )=> {
        const response = await httpService.get('/auth/profile');
        console.log ('response profile', response)
        setProfile(response.data)
    }

    useEffect (() => {
        fetchProfile()
    }, [])
    
    const [startDate, setStartDate] = useState ("");
    const [endDate, setEndDate]= useState ("");

    const handleStartDate = (e) => {
        setStartDate(e.target.value)
    };

    const handleEndDate = (e) => {
        setEndDate(e.target.value)
    };
    


    return (
       <>
            <div className="flex flex-col">
                
                {/*search date*/}
                <div className="flex flex-row bg-white ">
                    <input 
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={handleStartDate}/>
                    <input 
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={handleEndDate}/>
                    <button>searchdev</button>
                </div>

                {/*room data*/}
                <div className="">
                    <img src={profile.avatar} alt="profile"/>
                    {profile.name}
                </div>
            </div>
        </>
    )
}


export default Dashboard;
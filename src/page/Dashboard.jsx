import { useState } from "react";

const Dashboard = () => {
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

                </div>
            </div>
        </>
    )
}


export default Dashboard;
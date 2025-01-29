import RoomType from '../component/Dropdown/Room-type.jsx';
import Status from '../component/Dropdown/Status.jsx';
import StatusInfo from '../component/other/Status-info.jsx';
import Calendar from '../../src/assets/images/calendar.png';
import Save from '../../src/assets/images/save.png';
import Expor from '../../src/assets/images/export.png';

const Report = () => {
    return (
        <>
            {/*Main Content*/}
            <div className="flex flex-col gap-1 p-4 w-full h-full bg-slate-600"> 
                
                {/*search date room status*/}
                <div className='flex flex-col gap-0 bg-white w-full'>
                    <div className='flex flex-row '>
                       
                    </div>
                    <div className="justify-around flex flex-row gap-2 mt-0 p-2 items-center w-full ">
                        <div className="flex flex-row justify-between items-center border rounded-md border-gray w-40 h-auto  m-1 p-1 hover:border-orange-600">
                            <input type="text" placeholder= "select date" className="w-32 text-xs focus:outline-none"></input>
                            <img src={Calendar} className="h-4 w-auto"></img>
                        </div>
                        <div className="flex flex-row justify-between items-center border rounded-md border-gray w-40 h-auto  m-1 p-1 hover:border-orange-600">
                            <input type="text" placeholder= "select date" className="w-32 text-xs focus:outline-none"></input>
                            <img src={Calendar} className="h-4 w-auto"></img>
                        </div>
                        <RoomType />
                        <Status />
                        <button className='w-20 h-auto m-1 p-2 rounded-md border bg-orange-600 text-xs text-white border-orange-600 hover:bg-white text-xs hover:text-orange-600'>search</button>
                        <button className='w-8 h-auto m-1 p-1 rounded-md border border-orange-600 bg-white'>
                            <img src={Save}></img>
                        </button>
                    </div>
                </div>

                {/*report*/}
                
                    <table className='bg-white'>
                        <thead>
                            <tr>
                                <th>Date reservation</th> 
                                <th>Room Name</th>
                                <th>Room Type</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <StatusInfo status="paid"/> </td>
                            <td>
                                <button >
                                    <img src={Expor} className='w-4'></img>
                                </button>
                            </td>
                            
                        </tbody>
                    </table>
                

            </div>
        </>
    )
}

Report.PageTitle = "Reports";

export default Report;
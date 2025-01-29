import RoomType from '../component/Dropdown/Room-type.jsx'
import RoomCapacity from '../component/Dropdown/Room-capacity.jsx'
import RoomCard from '../component/Card/Room-card.jsx';



const Rooms = () => {
    return (
        <>
            
            {/*Main Content*/}
            <div className="flex flex-col gap-1 p-4 w-full h-full bg-slate-600"> 
                
                {/*search room*/}
                <div className="justify-around flex flex-row gap-2 p-2 items-center bg-white w-full overflow-auto">
                    <div className="flex flex-row w-40 border rounded-md border-gray-200 focus:outline-none  hover:border-orange-600  text-xs">
                        <input className="text-xs p-1 focus:outline-none" placeholder="Enter the keyword here"></input>
                    </div>
                    <RoomType />
                    <RoomCapacity/>
                    <button className='w-20 h-auto m-1 p-2 rounded-md border border-orange-600 hover:bg-orange-600 text-xs text-orange-600 hover:text-white'>search</button>
                    <button className='w-35 h-auto m-1 p-2 rounded-md border bg-orange-600 text-xs text-white whitespace-nowrap'>+Add New Room</button>
                </div>
                
                {/*rooms*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full bg-white p-2 justify-items-center">
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </div>
            </div>
        </>
    );
}



export default Rooms;
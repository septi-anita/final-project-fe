import RoomType from '../component/Dropdown/Room-type.jsx'
import RoomCapacity from '../component/Dropdown/Room-capacity.jsx'
import RoomCard from '../component/Card/Room-card.jsx';



const Rooms = () => {
    
    const openFormNewRoom =() => {
        overlay.classList.remove('hidden');
        form.classList.remove('hidden');
    }
    
    const backToMain = () => {
        overlay.classList.add('hidden');
        form.classList.add('hidden');
        
    }
    
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
                    <button onClick={openFormNewRoom} className='w-35 h-auto m-1 p-2 rounded-md border bg-orange-600 text-xs text-white whitespace-nowrap'>+Add New Room</button>
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

                {/*overlay*/}
                <div id="overlay" onClick={backToMain} className="fixed inset-0 bg-gray-500 bg-opacity-60 hidden">
                </div>

                {/*form add new room*/}
                <div id="form" className="fixed top-0 right-0 w-80 h-full p-3 bg-white hidden">
                    <div className="flex flex-row justify-between">
                        <div className="font-medium">Add New Room</div>
                        <button  onClick={backToMain}>x</button>
                    </div>
                    
                    <form>
                        <label for='room-name'>Room Name</label>
                        <br></br>
                        <input className='border rounded-md border-gray-300' type='text' id='room-name'/>
                        <br></br>
                        <label for='room-type'>Room Type</label>
                        <br></br>
                        <input className='border rounded-md border-gray-300' type='text' id='room-type'/>
                        <br></br>
                        <label for='price'>Price/hours</label>
                        <br></br>
                        <input className='border rounded-md border-gray-300' type='text' id='price'/>
                        <br></br>
                        <label for='capacity'>Capacity</label>
                        <br></br>
                        <input className='border rounded-md border-gray-300' type='text' id='capacity'/>
                        <br></br>
                    </form>
                </div>

            </div>
        </>
    );
}



export default Rooms;
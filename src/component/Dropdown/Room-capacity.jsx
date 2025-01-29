import { useState } from "react";

const RoomCapacity = () => {
    const [selectedCapacity, setSelectedValue] = useState("");

    return (
    <select 
        className={`w-40 border rounded-md border-gray-200 focus:outline-none  hover:border-orange-600 p-1 text-xs
            ${selectedCapacity === "" ? "text-gray-400" : "text-black"}
            `}
        value={selectedCapacity} 
        onChange={(e) => setSelectedValue(e.target.value)}
    >
        <option className="text-gray-300" value="" disabled hidden >Room Capacity</option>
        <option className="text-black" value="< 10"> under 10 people</option>
        <option className="text-black" value="11-15">11-50 people</option>
        <option className="text-black" value="51-100">51-100 people</option>
    </select>
    );
}

export default RoomCapacity;
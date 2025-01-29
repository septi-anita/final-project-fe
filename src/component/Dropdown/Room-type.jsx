import { useState } from "react";

const RoomType = () => {
    const [selectedType, setSelectedValue] = useState("");

    return (
    <select 
        className={`w-40 border rounded-md border-gray-200 focus:outline-none  hover:border-orange-600 p-1 text-xs
            ${selectedType === "" ? "text-gray-400" : "text-black"}
            `}
        value={selectedType} 
        onChange={(e) => setSelectedValue(e.target.value)}
    >
        <option className="text-gray-300" value="" disabled hidden >Room type</option>
        <option  value="small">Small</option>
        <option  value="medium">Medium</option>
        <option  value="large">Large</option>
    </select>
    );
}

export default RoomType;
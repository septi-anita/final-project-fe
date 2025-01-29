import { useState } from "react";

const Status = () => {
    const [selectedStatus, setSelectedValue] = useState("");

    return (
    <select 
        className={`w-40 border rounded-md border-gray-200 focus:outline-none  hover:border-orange-600 p-1 text-xs
            ${selectedStatus === "" ? "text-gray-400" : "text-black"}
            `}
        value={selectedStatus} 
        onChange={(e) => setSelectedValue(e.target.value)}
    >
        <option className="text-gray-300" value="" disabled hidden >Select status</option>
        <option  value="booked">Booked</option>
        <option  value="paid">Paid</option>
        <option  value="cancel">Cancel</option>
    </select>
    );
}

export default Status;
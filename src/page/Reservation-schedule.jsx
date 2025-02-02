import React, { useState } from 'react';

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleChange = (e) => {
      setSelectedDate(e.target.value);
      console.log (selectedDate)
    };
  
    return (
      <div>
        <label htmlFor="date-input">Pilih Tanggal:</label>
        <input
          type="date"
          id="date-input"
          value={selectedDate}
          onChange={handleChange}
        />
        
      </div>
    );
}


export default Schedule;
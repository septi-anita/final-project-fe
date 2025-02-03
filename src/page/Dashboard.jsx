import { useState } from "react";

const Dashboard = () => {
    // const [startDate, setStartDate] = useState ("");
    // const [endDate, setEndDate]= useState ("");

    // const handleStartDate = (e) => {
    //     setStartDate(e.target.value)
    // };

    // const handleEndDate = (e) => {
    //     setEndDate(e.target.value)
    // };
    
    return (
       <>

<main className="bg-gray-100 gap-5 p-5">

{/* <!-- filter --> */}
  <div className="bg-white p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

{/* <!-- Start Date --> */}
      <div className="flex flex-col w-95">
        <label for="start-date" className="text-sm font-medium text-gray-600 mb-1">Start Date</label>
        <div className="relative">
          <input type="date" id="start-date" className="h-12 w-full border border-gray-300 rounded-[10px] px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"/>
        </div>
      </div>

{/* <!-- End Date --> */}
      <div className="flex flex-col w-95">
        <label for="end-date" className="text-sm font-medium text-gray-600 mb-1">End Date</label>
        <div className="relative">
          <input type="date" id="end-date" className="h-12 w-full border border-gray-300 rounded-[10px] px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"/>
        </div>
      </div>

{/* <!-- Search Button --> */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 flex items-end w-[210px]">
        <button className="h-12 w-52 bg-orange-500 text-white py-2 px-4 rounded-[10px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Search</button>
      </div>
    </div>
  </div>

{/* <!-- Total --> */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4 flex-none">
    <div className="bg-white p-5 h-32 rounded-[10px]">
      <p className="text-[#5E5E5E] text-lg mt-0">Total Omzet</p>
      <h2 className="text-[#000000] font-medium text-2xl mt-[15px]">Rp. 8.000.000</h2>
    </div>
    <div className="bg-white p-5 h-32 rounded-[10px]">
      <p className="text-[#5E5E5E] text-lg mt-0">Total Reservation</p>
      <h2 className="text-[#000000] font-medium text-2xl mt-[15px]">100</h2>
    </div>
    <div className="bg-white p-5 h-32 rounded-[10px]">
      <p className="text-[#5E5E5E] text-lg mt-0">Total Visitor</p>
      <h2 className="text-[#000000] font-medium text-2xl mt-[15px]">500</h2>
    </div>
    <div className="bg-white p-5 h-32 rounded-[10px]">
      <p className="text-[#5E5E5E] text-lg mt-0">Total Rooms</p>
      <h2 className="text-[#000000] font-medium text-2xl mt-[15px]">12</h2>
    </div>            
  </div>

{/* <!-- Room Cards 1 --> */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">

{/* <!-- Room Card Aster Room--> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Aster Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>
        
{/* <!-- Room Card Bluebell Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Bluebell Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>      

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>  
  </div>   

{/* <!-- Room Cards 2 --> */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">

{/* <!-- Room Card Aster Room--> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Aster Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>
        
{/* <!-- Room Card Bluebell Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Bluebell Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/*<!-- Omzet Section -->*/}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>      

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>  
  </div>

{/* <!-- Room Cards 3 --> */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">

{/* <!-- Room Card Aster Room--> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Aster Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>
        
{/* <!-- Room Card Bluebell Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Bluebell Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>      

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>  
  </div>

{/* <!-- Room Cards 4 --> */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">

{/* <!-- Room Card Aster Room--> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Aster Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>
        
{/* <!-- Room Card Bluebell Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Bluebell Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>      

{/* <!-- Room Card Camellia Room --> */}
    <div className="bg-white p-5 h-[227px] rounded-[10px]">
      <h1 className="font-medium text-[#5e5e5e] text-2xl">Camellia Room</h1>
      <div className="flex items-center justify-between">
        {/* <!-- Percentage of Usage Section --> */}
        <div>
          <p className="font-extralight text-[#787878] text-[14px] leading-[20px] mt-0">Percentage Of Usage</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">80</h1>
        </div>
        {/* <!-- Circle Progress Bar --> */}
          <svg height="95" viewBox="0 0 36 36" width="95">
            <circle className="text-gray-300" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-width="4"></circle>
            <circle className="text-orange-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" stroke-dasharray="80, 100" stroke-width="4" stroke-linecap="round"></circle>
          </svg>
      </div>
        {/* <!-- Omzet Section --> */}
        <div className="mb-5">
          <p className="font-thin text-[#787878] text-[14px] leading-[20px]">Omzet</p>
          <h1 className="text-[#000000] font-semibold text-xl mt-1">Rp. 2.000.000</h1>
        </div>
    </div>  
  </div>
</main>

  </>
)
}
export default Dashboard;
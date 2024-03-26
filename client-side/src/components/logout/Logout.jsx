import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const nagivate = useNavigate();

  function handleClick(name){
    if(name === 'logout'){
      localStorage.removeItem('admin-token')
      nagivate("/login")
    }else{
      nagivate("/dashboard")
    }
  }
  return (
    <>
      <div className="h-full flex justify-center items-center ">
        <div className={`bg-white w-[400px] h-auto p-10 shadow-md rounded-lg`}>
          <h1 className="text-lg pb-10 ">Are you sure you want to log out?</h1>
          <div className={`flex justify-between gap-3 `}>
            <button onClick={()=> handleClick('logout')} className={` bg-red hover:bg-redHover text-white w-1/2 py-1 rounded`}>Logout</button>
            <button onClick={()=> handleClick('cancel')} className={` bg-black hover:bg-blackHover text-white w-1/2 py-1 rounded`}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout;

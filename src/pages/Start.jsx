import React from "react";
import { useNavigate } from "react-router";

const Start = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-zinc-900 relative">
      <div className=" w-1/2 h-1/2 rounded-lg absolute left-1/2 -translate-x-1/2 flex flex-col items-center shadow-zinc-600 shadow-lg
        bg-zinc-700 mt-10
      ">
        <h1 className="text-5xl font-bold text-white p-5">
          Welcome to Movie Mania
        </h1>
        <button className="text-3xl border-zinc-600 border-[1px] px-4 py-1 rounded-lg text-white m-5 capitalize"
            onClick={()=>navigate("/register")}
        >register</button>
        <button className="text-3xl border-zinc-600 border-[1px] px-4 py-1 rounded-lg text-white m-5 capitalize"
            onClick={()=>navigate("/login")}
        >Login</button>
      </div>
    </div>
  );
};

export default Start;

import React from "react";
import "../../Movie.css";
import Moviepng from "../../../public/MovieMania.png";
import { useAuth } from "../../context";
import { useNavigate } from "react-router";

const NavBar = () => {
  const { query, setQuery, movies ,user,handleLogout} = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={Moviepng} />
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
      <button className="text-3xl border-zinc-600 border-[1px] px-2 py-1 ml-5 rounded-lg text-white capitalize"
            onClick={()=>{navigate("/register")}}
        >Register</button>
      <button className="text-3xl border-zinc-600 border-[1px] px-2 py-1 ml-5 rounded-lg text-white capitalize"
            onClick={()=>{handleLogout()}}
        >Logout</button>
      <h1 className=" py-1 px-3 text-3xl font-semibold whitespace-nowrap flex items-center justify-center">Hello {user.displayName}</h1>
    </nav>
  );
};

export default NavBar;

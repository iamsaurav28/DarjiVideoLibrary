import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useVideo } from "../Components/VideoContext";
import "./Navbar.css";

const Navbar = () => {


  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useVideo();


  const userName = JSON.parse(localStorage.getItem("user"))
  const handleLogout=()=>{
    localStorage.removeItem("loggedIn")
    navigate("/register")
  }


  return (
    <div className='navbar'>

      <div>
        <Link className='title'>Video World</Link>
      </div>
      {/* <Link className='title' to="/">Video World</Link> */}
      <div className="search-container">
<input
  onChange={(e) => {
    setSearchText(e.target.value);
  }}
  className='search'
  type="text"
  placeholder="Search"
/>
<button
className='search-btn'
  onClick={() => {
    if (searchText.length > 0) {
      dispatch({ type: "SEARCH_VIDEOS", payload: searchText });
      navigate("/searchvideos", { replace: true });
    }
  }}
>
GO
</button>
</div>

<div style={{display:"inline-flex"}}>
<h2 style={{marginTop:"10px", position:"absolute" , right:"0" ,marginRight:"80px"}}> welcome {userName.name}</h2>
<button className='search-btn'  style={{position:"absolute", right:"0", marginRight:"20px"}}onClick={handleLogout}>Logout</button>
</div>

    {/* <div className="Navbar-links">
    <NavLink className="nav-link" to="likedvideo">LIKED VIDEO</NavLink>
    <NavLink className="nav-link" to="watchlater">WATCH LATER</NavLink>
    <NavLink className="nav-link" >Logout</NavLink>
</div> */}

     {/* <input id='opensidebarmenu' type="checkbox" />
     <label for="opensidebarmenu" className="sidebaricon" ><TfiMenu /></label>
        <div id='sidebarmenu' >
          <ul className='menu'>
          <li><Link className='home' to="/likedvideo">LIKED VIDEO</Link></li>
          <li><Link className='home' to="/watchlater">WATCH LATER</Link></li>
          <li><Link className='home' to="/downloads">DOWNLOADS</Link></li>
          <li><Link className='home'>Logout</Link></li>
          </ul>
        </div> */}

    </div>
  )
}

export default Navbar











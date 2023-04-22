import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return <div className="navbar">
    <div className="navbar__logo">
        <span>Wookie <br/> Movies</span>
    </div>  
    <div className="navbar__search">
      <img src="https://www.bing.com/th?id=OIP.h6JKyBrhuKPEzjvJnIVY2wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width='40' height='36'/>
      <input type='text' placeholder="Type here to Search..."/>
    </div>
  </div>;
};

export default Navbar;

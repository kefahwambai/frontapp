import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("https://carrental-1n1b.onrender.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav class="skew-menu">
      <Link to="/">Home</Link>
        <ul>
        {user && (  
        <a href="#"><Link to="/AddCars">Add Cars</Link></a>  
      )}
      {user && (  
        <a href="#"><Link to="/ReviewForm">Reviews</Link></a>  
      )}
      {user ? (
      <a href="#"onClick={handleLogoutClick}>Logout</a>
      ) : (
        <>
          <a href="#"><Link to="/signup" className="btn btn-signup navb">
            Signup
          </Link></a>
          <a href="#"><Link to="/login" className="btn btn-login navb">
          Login
        </Link></a>
        </>
      )}

        </ul>
      </nav>
  );
}

export default NavBar;








    
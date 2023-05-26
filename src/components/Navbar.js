import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const handlelogout = ()=>{
localStorage.removeItem('token');
history.push("/");
  }
  let location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span style={{ color: "#5e5ed6" }}>Notes</span>
            <span style={{ color: "aquamarine" }}>Bucket</span>
          </Link>
          <button
            className="navbar-toggler" style={{backgroundColor: "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              <li className="nav-item">
              {localStorage.getItem('token')?<Link className={`nav-link ${ location.pathname === "/home" ? "active" : "" }`} to="/home" > <span className="hov" >Home</span></Link>: <Link className={`nav-link ${ location.pathname === "/home" ? "active" : "" }`} to="/home" > <span className="hov" >Account</span></Link>}
              </li>
            </ul>
           {!localStorage.getItem('token')? <form className="d-flex" role="search">
              <Link className="btn btn-outline-success mx-2" to="/login" role="button" >Login </Link>
              <Link className="btn btn-outline-success" to="/signup" role="button" >Signup</Link>
            </form>: <button className="btn btn-primary" onClick={handlelogout} >Logout</button>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

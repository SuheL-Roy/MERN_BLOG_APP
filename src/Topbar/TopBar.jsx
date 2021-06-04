import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from "../context/Context.js";

export default function TopBar() {
  const PF = "http://localhost:5000/Images/";
  const  {user,dispatch} = useContext(Context);

   const handleLogout = () => {

    dispatch({ type: "LOGOUT" });

   }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="Link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="Link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout} >{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="Link">
             <img
            className="topImg"
            src={PF + user.profilePic}
            alt=""
          />
          </Link>
          
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="Link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="Link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

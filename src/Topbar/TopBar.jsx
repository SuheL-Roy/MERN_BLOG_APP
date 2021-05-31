import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
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
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile_fic"
          />
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

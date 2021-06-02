import axios from "axios";
import React, { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setcats] = useState([]);

  useEffect(() => {
    const getcats = async () => {
      const res = await axios.get("/catagories");
       console.log(res);
      setcats(res.data);
    };

    getcats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="sidebar"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map((c)=>(
              <>
              <li className="sidebarListItem">{c.name}</li>
              
              

              
              
              
    
              </>   
            ))
          }
         
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW US </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

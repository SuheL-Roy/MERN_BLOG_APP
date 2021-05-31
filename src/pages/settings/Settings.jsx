import React from "react";
import "./settings.css";
import Sidebar from "../../Sidebar/Sidebar.jsx";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingwrapper">
        <div className="settingsTitle">
          <span className="settingsUpadateTitle">Update you Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settignsFroms">
          <label>Profile Picture</label>
          <div className="settinfPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="profile img"
            />
            <label htmlFor="fileinput">  
              <i class="settingsPICon far fa-user-circle"></i> 
            </label>
            <input type="file" id="fileinput" style={{display:"none"}} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="david" />
          <label>Email</label>
          <input type="email" placeholder="123@gmail.com" />
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

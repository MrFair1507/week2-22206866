  import React from "react";
  import './Sidebar.css'
  function Sidebar() {
    return (
      <div className="sidebar">
        <ul>
          <li> <a href="#"> Dashboard</a></li>
          <li> <a href="#"> Property</a></li>
          <li> <a href="#"> Device</a></li>
          <li> <a href="#"> Login</a></li>
          {/* <li>Property</li>
          <li>Device</li>
          <li>Login</li> */}
        </ul>
      </div>
    );
  }

  export default Sidebar;

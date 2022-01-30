/** @format */

import React ,{ useContext} from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Context} from '../../context'


// import "./topbar.scss";
const Topbar = () => {
const {setShowSidebar, showSidebar} = useContext(Context)
  return (
    <div className="topbar">
      <img  onClick={() => setShowSidebar(!showSidebar)}  style={{transform: `rotate(${showSidebar ? '180deg' : '0'})`}}  className="openCloseBtn" src="assets/icons/sidebar.png" alt="" />
      <div className="topbar-wrapper">
        <div className="topbar-wrapper-left">
          <h1  >Dashboard</h1>
        </div>
        <div className="topbar-wrapper-right">
          <div className="topvar-icons">
            <img src="assets/icons/search.png" alt="" />
            <img src="assets/icons/ringcon.png" alt="" />
          </div>
          <div className="user">
              <img src="assets/some_girl.png" alt="" />
              <h5>Erza Miller</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

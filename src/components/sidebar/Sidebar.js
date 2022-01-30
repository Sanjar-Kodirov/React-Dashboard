import React , {useContext} from "react";
import {Context} from '../../context'
const Sidebar = () => {
  const {setShowSidebar, showSidebar} = useContext(Context)
  return (
    <div className={`sidebar ${showSidebar? 'showSidebar': ''}`}>
       {/* <img style={{transform: `rotate(${showSidebar ? '180deg' : '0'})`}} onClick={()=>setShowSidebar(!showSidebar)} className="openCloseBtn" src="assets/icons/sidebar.png" alt="" /> */}
      <div className="sidebar-wrapper-logo">
        <img src="assets/icons/Dash_logo.png" alt="" />
        <h2>Dash</h2>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-list-group">
          <h4>MAIN MENU</h4>
        <div className="sidebar-list-group-item">
            <img src="assets/icons/Subtract.png" alt="" />
            <a href="#">Dashboard</a>
          </div>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/Chat.png" alt="" />
            <a href="#">Inbox</a>
          </div>
        </div>
        <div className="sidebar-list-group">
          <h4>Workspace</h4>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/User_box.png" alt="" />
            <a href="#">Accounts</a>
          </div>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/Calendar.png" alt="" />
            <a href="#">Schedule Post</a>
          </div>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/Search_alt.png" alt="" />
            <a href="#">Communities</a>
          </div>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/Chart_alt.png" alt="" />
            <a href="#">Analytics</a>
          </div>
        </div>
        <div className="sidebar-list-group">
          <h4>General</h4>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/Folder_alt.png" alt="" />
            <a href="#">File & Folders</a>
          </div>
          <div className="sidebar-list-group-item">
            <img src="assets/icons/Setting_alt_line.png" alt="" />
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

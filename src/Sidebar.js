import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentitem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.bKM7F68j6c_DTmwc3As5xwHaEo&pid=Api&P=0&h=180"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2> Bhoomika</h2>
        <h4>bhoomikabk2002@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed your profile </p>
          <p className="sidebar_statnumber">4657</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statnumber">4657</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>recent</p>
        {recentItem("reactjs")}
        {recentItem("praogramming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function MainHome() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Feed />
    </div>
  );
}

export default MainHome;

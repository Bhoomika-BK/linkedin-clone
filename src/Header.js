import React from "react";
import "./Header.css";
import Headeroptions from "./Headeroptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useStateValue } from "./StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.DQuD2GpqUjOC4oyK-pSrtAHaHa&pid=Api&P=0&h=180"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <Headeroptions Icon={HomeIcon} name="Home" />
        <Headeroptions Icon={PeopleIcon} name="My Network" />
        <Headeroptions Icon={WorkIcon} name="Jobs" />
        <Headeroptions Icon={MessageIcon} name="Messaging" />
        <Headeroptions Icon={NotificationsIcon} name="Notifications" />
        <Headeroptions
          avatar="https://asiantimes.biz/wp-content/uploads/2020/06/Sidharth-Malhotra-EE.jpg"
          name={user?.email}
        />
        <p onClick={logout}>logout</p>
      </div>
    </div>
  );
}

export default Header;

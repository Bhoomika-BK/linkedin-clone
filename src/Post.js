import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
function Post({ name, desc, mesg, photourl, date, time }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{desc}</p>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{mesg}</p>
      </div>
      <div className=" post_button">
        <InputOption Icon={ThumbUpIcon} name="like" />
        <InputOption Icon={MessageIcon} name="comment" />
        <InputOption Icon={ShareIcon} name="share" />
        <InputOption Icon={SendIcon} name="send" />
      </div>
    </div>
  );
}

export default Post;

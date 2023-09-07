import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
// import { dblClick } from "@testing-library/user-event/dist/click";
import { db } from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const postRef = collection(db, "Posts");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const q = query(postRef);
    onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPosts(items);
    });
  }, []);
  const sendPost = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(postRef, {
      mesg: text,
      name: "bhoomika",
      desc: "hello",
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
    });
    setInput("");
    setText("");
  };
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputoptions">
          <InputOption Icon={ImageIcon} name="photo" color="#7085F9" />
          <InputOption Icon={SubscriptionsIcon} name="video" color="#FF8551" />
          <InputOption Icon={EventNoteIcon} name="Event" color="#1B9C85" />
          <InputOption
            Icon={CalendarViewDayIcon}
            name="Event"
            color="#7085F9"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          key={JSON.stringify(post)}
          name={post.name}
          desc={post.desc}
          mesg={post.mesg}
          date={post.date}
          time={post.time}
        />
      ))}
    </div>
  );
}

export default Feed;

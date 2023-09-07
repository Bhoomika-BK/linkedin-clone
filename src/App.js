import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import MainHome from "./MainHome";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User 🧑‍💻: " + authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <>
            <Routes>
              {/* <div className="app_body">
              <Sidebar />
              <Feed />
            </div> */}
              <Route exact path="/" element={<MainHome />} />
              <Route exact path="/Login" element={<Login />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

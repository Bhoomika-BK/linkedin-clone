import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { provider } from "./firebase";
import { useStateValue } from "./StateProvider";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (auth) {
          navigate("/");
        }
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const signinwithgoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then(({ userAuth }) => {
        dispatch({
          type: "SET_USER",
          user: userAuth,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        if (auth) {
          navigate("/");
        }
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="login">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2020%2F01%2FLogo-Linkedin.png&f=1&nofb=1&ipt=4f040bc6c382ece38a17cd02075cfd0161fa9ce2d7acce47071e619c0f76211b&ipo=images"
        alt=""
      />
      <form>
        <input
          placeholder="Full name (required if registered"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input placeholder="profile pic URL(optional)" type="text" />
        <input
          placeholder="Eamil"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
        <button type="submit" onClick={signinwithgoogle}>
          Sign in with google
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;

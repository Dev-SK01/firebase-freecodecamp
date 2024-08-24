import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const Authentication = () => {
  const firebaseAuth = getAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth ,(data)=>{
      console.log(data)
    })
  } ,[])

  const signUp = () => {
    if (validateCredential(username, password)) {
      alert("Enter value");
    } else {
      createUserWithEmailAndPassword(firebaseAuth, username, password)
        .then((res) => console.log(res.user))
        .catch((err) => alert(err.message));
    }
  };

  const login = () => {
    if (validateCredential(username, password)) {
      alert("Enter value");
    } else {
      signInWithEmailAndPassword(firebaseAuth, username, password)
        .then((res) => console.log(res.user))
        .catch((err) => alert(err.message));
    }
  };

  const validateCredential = (u, p) => {
    if (!u || !p) {
      return true;
    } else {
      return false;
    }
  };
  
  const logOut = () => {
    signOut(firebaseAuth);
    alert('user logged out!')
  }
  return (
    <>
      <h1> Firebase Authentication</h1>
      <div className="login">
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button onClick={signUp}>SignUp</button> 
        <button onClick={login}>Login</button> 
        <button onClick={logOut}>Logout</button>
      </div>
    </>
  );
};

export default Authentication;

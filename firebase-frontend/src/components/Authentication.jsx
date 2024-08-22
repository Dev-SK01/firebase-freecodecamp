import React, { useState } from "react";

const Authentication = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = ()=>{
    if(validateCredential(username ,password)){
        alert('Enter value')
    }else{
       alert(username + password)
    }
  }
  const validateCredential = (u,p) =>{
    if(!u || !p){
        return true;
    }else{
        return false
    }
  }
  
  return (
    <>
      <h1> Firebase Authentication</h1>
      <div className="login">
        <input
          type="text"
          placeholder="Enter Usename"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button onClick={login}>Login</button> <br /> <br />
      </div>
    </>
  );
};

export default Authentication;

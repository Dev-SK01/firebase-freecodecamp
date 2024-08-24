import React from "react";

const Securityrules = () => {
  return (
    <>
      <h1>Firebase Security Rules</h1>
      <div>
        <p>Firebase Security rules are take control over the firebase services. As firebase admin can define the security rules in firebase.
        </p>
        <p>In firebase Firestore Rules We can define our rules</p>
        <h3>Syntax</h3>
        <code>allow read : if request.auth !- null</code><br/><br/>
        <code>firebase gives the rules to define</code><br/><br/>
        <h2>OnAuthStateChanged</h2>
        <p>OnAuthStateChanged get realtime user login logout information in firestore</p>
      </div>
    </>
  );
};

export default Securityrules;

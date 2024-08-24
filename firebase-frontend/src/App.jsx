import React from "react";
import Authentication from "./components/Authentication";
import Firestore from './components/Firestore'
import FireStorage from "./components/FireStorage";
import Hosting from "./components/Hosting";
import Securityrules from "./components/Securityrules";
const App = () => {
  return (
    <>
      <Authentication />
      <Firestore />
      <FireStorage />
      <Hosting />
      <Securityrules />
    </>
  );
};

export default App;

import React from "react";
import Authentication from "./components/Authentication";
import Firestore from './components/Firestore'
import FireStorage from "./components/FireStorage";
import Hosting from "./components/Hosting";
const App = () => {
  return (
    <>
      <Authentication />
      <Firestore />
      <FireStorage />
      <Hosting />
    </>
  );
};

export default App;

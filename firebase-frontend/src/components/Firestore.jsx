import React from "react";
import { fireStore } from "../../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
const Firestore = () => {
  const collectionRef = collection(fireStore, "users");

  const createData = () => {
    addDoc(collectionRef, {
      name: "test",
      email: "test@gmail.com",
      createdAt: new Date().getDate(),
    })
      .then((res) => alert(res.id))
      .catch((err) => alert(err.message));
  };

  const readData = () => {
    getDocs(collectionRef)
      .then((res) => {
        console.log(
          JSON.stringify(
            res.docs.map((item) => {
              return item.data();
            })
          )
        );
      })
      .catch((err) => alert(err.message));
  };

  const updateData = () => {
    const docToUpdate = doc(fireStore, "users", "MfkDftCebhGfTwEuILVJ");
    updateDoc(docToUpdate, { email: "test01@gmail.com" })
      .then(alert("Doc Updated"))
      .catch((err) => alert(err.message));
  };

  const deleteData = () => {
    const docToDelete = doc(fireStore, "users", "P1hkPTcRAbi2zEpFILpw");
    deleteDoc(docToDelete)
      .then(alert("Doc Deleted"))
      .catch((err) => alert(err.message));
  };

  const getReatimeData = () => {
    onSnapshot(collectionRef , (data) => {
      console.log(
        JSON.stringify(
          data.docs.map((item) => {
            return item.data();
          })
        )
      )
    })
  };

  const getDataFromQuery = () =>{
     const newQuery = query(collectionRef , where("email", "==" ,"test@gmail.com"));
     getDocs(newQuery)
      .then((res) => {
        console.log(
          JSON.stringify(
            res.docs.map((item) => {
              return item.data();
            })
          )
        );
      })
      .catch((err) => alert(err.message));
  }

  return (
    <>
      <h1>Firebase Firestore</h1>
      <div className="crud">
        <button onClick={createData}>Create</button>
        <button onClick={readData}>Read</button>
        <button onClick={updateData}>Update</button>
        <button onClick={deleteData}>Delete</button>
        <button onClick={getReatimeData}>Realtime</button>
        <button onClick={getDataFromQuery}>Firebase Query</button>
      </div>
    </>
  );
};

export default Firestore;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainers, NewPost } from "./containers";
import { Header, MainLoader } from "./components";
import { useEffect } from "react";
import { firebaseAuth } from "./config/firebase.config";
import { createNewUser } from "./sanity";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((redult) => {
      if (redult) {
        createNewUser(redult?.providerData[0]).then(() => {
          console.log("user created");
          dispatch(SET_USER(redult?.providerData[0]));
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        });
      }
    });
  }, []);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start">
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          {/* header */}
          <Header />
          <main className="w-full h-full flex items-center justify-center">
            {/* route */}
            <Routes>
              <Route path="/*" element={<HomeContainers />} />
              <Route path="/newPost/*" element={<NewPost />} />
            </Routes>
          </main>
          {/* main content */}
        </>
      )}
    </div>
  );
};

export default App;

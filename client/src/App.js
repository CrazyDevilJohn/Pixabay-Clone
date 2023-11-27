import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeContainers, NewPost, SearchContainer } from "./containers";
import { FeedDetail, Header, MainLoader } from "./components";
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
    firebaseAuth.onAuthStateChanged((result) => {
      console.log("uid ", result?.uid);
      if (result?.uid !== undefined) {
        createNewUser(result?.providerData[0]).then(() => {
          dispatch(SET_USER(result?.providerData[0]));
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        });
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    });
  }, []);
  return (
    <div className="overflow-hidden min-h-screen flex flex-col items-center justify-start">
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
              <Route path="/feed-detail/:_id" element={<FeedDetail />} />
              <Route path="/search/:searchTerm" element={<SearchContainer />} />
            </Routes>
          </main>
          {/* main content */}
        </>
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import MasnoryLayout from "./MasnoryLayout";
import { SET_FEED } from "../context/actions/FeedAction";
import { fetchFeeds } from "../sanity";

const Collections = () => {
  const [isLoading, setIsLoading] = useState(false);
  const feeds = useSelector((state) => state.feeds);
  const user = useSelector((state) => state.user);
  const [saved, setSaved] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!feeds) {
      setIsLoading(true);
      fetchFeeds().then((data) => {
        console.log(data);
        dispatch(SET_FEED(data));
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      });
    }
  }, []);
  useEffect(() => {
    if (feeds && saved.length === 0) {
      feeds?.map((feed) => {
        feed?.collections?.map((colc) => {
          if (colc._id === user?.uid) {
            setSaved((prevArray) => [...prevArray, feed]);
          }
        });
      });
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start">
      {isLoading ? <Spinner /> : <MasnoryLayout feeds={saved} />}
    </div>
  );
};

export default Collections;

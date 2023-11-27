import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BannerImage, Sad } from "../assets";
import { fetchFeeds } from "../sanity";
import { SET_FEED } from "../context/actions/FeedAction";
import { Banner, Filter, MasnoryLayout, Spinner } from "../components";

const HomeContainers = () => {
  const feeds = useSelector((state) => state.feeds);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!feeds) {
      setIsLoading(true);
      fetchFeeds().then((data) => {
        console.log("home container : ", data);
        dispatch(SET_FEED(data));

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Banner />

      <Filter />
      {isLoading ? (
        <div className="w-full p-12 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-full items-center justify-between no-scrollbar flex-wrap gap-3 px-8 py-6">
          {feeds?.length > 0 ? (
            <MasnoryLayout feeds={feeds} />
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-auto">
              <p className="text-2xl capitalize text-primary mb-1">
                no data found
              </p>
              <img src={Sad} className="w-275 h-auto " alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeContainers;

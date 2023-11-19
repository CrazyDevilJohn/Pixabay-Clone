import React from "react";
import { BannerImage } from "../assets";

const HomeContainers = () => {
  return (
    <div className="w-full h-[5000px]">
      <div className="w-screen h-420 flex items-center justify-center relative">
        <img src={BannerImage} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default HomeContainers;

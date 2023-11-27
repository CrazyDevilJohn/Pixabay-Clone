import React, { useState } from "react";
import { BannerImage } from "../assets";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`search/${search}`, { replace: true });
    }
  };

  return (
    <div className=" w-screen  h-420 flex items-center justify-center relative">
      <img src={BannerImage} className="w-full h-full object-cover" alt="" />
      <div className="absolute inset-0 flex items-center justify-center flex-col bg-[#0002] gap-6">
        <h2 className="text-4xl font-extrabold text-white tracking-wider text-center">
          Stunning free images & royalty free stock
        </h2>
        <p className="text-white text-center">
          Over 2.8 million+ high quality stock images, videos and music shared
          by our talented community.
        </p>

        <div className="w-1/2 gap-4 px-4 py-3 rounded-full bg-white flex items-center justify-between">
          <FaSearch size={16} color="#656F79" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="search here"
            className="flex-1 border-none outline-none  text-textColor text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

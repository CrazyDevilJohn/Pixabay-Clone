import React from "react";
import Masnory from "react-masonry-css";
import { Feed } from "../components";

const breakPoint = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 3,
  800: 2,
  600: 1,
};

const suggestedBreakPoint = {
  default: 4,
  3000: 4,
  2000: 4,
  1200: 4,
  1000: 3,
};

const MasnoryLayout = ({ feeds, isSuggestions }) => {
  return (
    <Masnory
      className="flex"
      breakpointCols={!isSuggestions ? breakPoint : suggestedBreakPoint}
    >
      {feeds?.map((feed, i) => (
        <Feed key={i} data={feed} />
      ))}
    </Masnory>
  );
};

export default MasnoryLayout;

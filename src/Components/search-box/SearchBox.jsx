import React from "react";
import "./searchbox.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      placeholder="search monsters"
    />
  );
};

export default SearchBox;

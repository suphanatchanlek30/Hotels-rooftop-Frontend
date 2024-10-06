import React from "react";

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
  const handleKeyPress = (even) => {
    if (even.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="w-full flex">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        inKeyPress={handleKeyPress}
        placeholder="Hotels with rooftop Pool Near ...."
        className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border"
      />
      <button className="bg-[#1E73BE] px-4 py-2 text-white">Search</button>
    </div>
  );
};

export default SearchBlog;

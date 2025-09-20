import React from "react";

const index = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="text-input"
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      placeholder="Type ypur prompt here"
    />
  );
};

export default index;

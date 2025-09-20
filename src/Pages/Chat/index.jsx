/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import Welcome from "../../Components/Welcome";
import TextInput from "../../Components/TextInput";
import TextField from "../../Components/TextField";
import Sidebar from "../../Components/SideBar";

const index = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="chat-page">
      <div className="col1">
        <Sidebar />
      </div>
      <div className="col2">
        <Welcome />
        <TextField text={["API ", "RESPONSE ", "HERE "]} />
        <TextInput query={query} setQuery={setQuery} />
      </div>
    </div>
  );
};

export default index;

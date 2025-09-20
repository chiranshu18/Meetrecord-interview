/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

const index = ({ text }) => {
  const [message, showMessage] = useState([]);

  useEffect(() => {
    showMessage([...message, ...text]);
  }, []);

  return (
    <div className="text_field">
      {message}
      {/* API RESPONSE HERE */}
    </div>
  );
};

export default index;

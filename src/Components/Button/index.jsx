import React from "react";
import { redirectToDynamicLink } from "../../Utils/helpers";

const index = ({
  type,
  text = "submit",
  redirectionLink,
  callbackFunction,
}) => {
  const handleButtonClick = () => {
    if (type === "redirect") {
      redirectToDynamicLink(redirectionLink);
    } else if (type === "submit") {
      callbackFunction();
    }
  };

  return (
    <button
      onClick={() => {
        handleButtonClick();
      }}
    >
      {text}
    </button>
  );
};

export default index;

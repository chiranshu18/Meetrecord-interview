import React from "react";
import { redirectToDynamicLink } from "../../Utils/helpers";
import Button from "../Button";

const itemsList = [
  {
    title: "Title 1",
    rediretionLink: "https://gully91.com/",
  },
  {
    title: "Title 2",
    rediretionLink: "https://gully91.com/",
  },
  {
    title: "Title 3",
    rediretionLink: "https://gully91.com/",
  },
];

const deletePrompt = () => {
  console.log("promt deleted");
};

const index = ({ items = itemsList }) => {
  return (
    <div className="sidebar">
      {items?.map((prompt, index) => {
        return (
          <div
            onClick={() => {
              redirectToDynamicLink(prompt.rediretionLink);
            }}
            className="promt-item"
          >
            {prompt.title}
            <Button
              type={"submit"}
              text={"Delete"}
              callbackFunction={deletePrompt}
            />
          </div>
        );
      })}
    </div>
  );
};

export default index;

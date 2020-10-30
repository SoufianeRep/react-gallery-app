import React from "react";

const Photo = (props) => {
  return (
    <li>
      <img src={props.src} alt="alt" />
    </li>
  );
};

export default Photo;

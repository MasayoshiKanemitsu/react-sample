import React from "react";

const Resources = ({ resources }) => {
  return (
    <>
      {resources.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

export default Resources;

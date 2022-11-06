import React from "react";

const MakeList = (props) => {
  return (
    <>
      <ul className='ui bulleted list'>
        {props.list.map((item, i) => (
          <li className='item' key={i}>
            {item.name}
            <br />
            {item.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MakeList;

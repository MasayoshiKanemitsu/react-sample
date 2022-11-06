import React, { useState } from "react";

const AddList = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const handleOnClick = () => {
    if (message !== "") {
      setMessages([...messages, message]); //messages配列にmessageの値を追加
    }
    setMessage("");
  };
  return (
    <>
      <ul className='ui bulleted list'>
        {messages.map((item, i) => (
          <li className='item' key={i}>
            {item}
          </li>
        ))}
      </ul>

      <div className='ui input'>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button className='ui button' onClick={handleOnClick}>
          追加
        </button>
      </div>
    </>
  );
};

export default AddList;

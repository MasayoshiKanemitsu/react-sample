import React from "react";

const ButtonAdv = ({ onClick, color, text }) => {
  return (
    <>
      <button onClick={onClick} className={`ui ${color} button`}>
        {text}
      </button>
    </>
  );
};

export default ButtonAdv;

//className={`ui ${color} button`}
//「``」を使うことで、文字列の中に変数を埋め込むことが可能。

import React, { useState } from "react";
// useState(React Hooks)はStateを使用する場合に読み込む。

const Counter = (props) => {
  //第1引数：Stateで使う変数。
  //第2引数：1で指定した変数を制御する関数
  const [count, setCount] = useState(0); //countの初期値は0
  const onCountUp = () => {
    setCount(count + 1);
  };
  const onCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p style={{ fontWeight: "bold" }}>Count: {count}</p>
      <button className='ui basic button' onClick={onCountUp}>
        増やす
      </button>
      <button className='ui basic button' onClick={onCountDown}>
        減らす
      </button>
    </>
  );
};

export default Counter;

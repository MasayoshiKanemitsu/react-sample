import React from "react";

//コンポーネント
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./scss/_test.scss";

const App = () => {
  return (
    <div>
      <h1 className='ui header center aligned'>App</h1>
      <section className='ui raised very padded text container segment'>
        <h2 className='ui header'>Components</h2>
        <p className='c-test__txt'>Scss読み込みテスト</p>
        <Button title='Post' />
        <Button title='Edit' />
        <Button title='Delete' />
        <Button title='Submit' />
      </section>

      <section className='ui raised very padded text container segment'>
        <h2 className='ui header'>State</h2>
        <Counter />
      </section>
    </div>
  );
};

export default App;

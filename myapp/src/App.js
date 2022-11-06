import React from "react";

//コンポーネント
import Button from "./components/Button";
import Counter from "./components/Counter";
import MakeList from "./components/MakeList";
import AddList from "./components/AddList";
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

      <section className='ui raised very padded text container segment'>
        <h2 className='ui header'>Make List</h2>
        <MakeList list={listData} />
      </section>

      <section className='ui raised very padded text container segment'>
        <h2 className='ui header'>Add List</h2>
        <AddList />
      </section>
    </div>
  );
};

//受け渡し用データ
const listData = [
  {
    name: "Jane",
    age: 21,
  },
  {
    name: "Taro",
    age: 25,
  },
];

export default App;

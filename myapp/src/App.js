import React, { useState } from "react";

//コンポーネント
import Button from "./components/Button";
import ButtonAdv from "./components/ButtonAdv";
import Counter from "./components/Counter";
import MakeList from "./components/MakeList";
import AddList from "./components/AddList";
import jsonplaceholder from "./apis/jsonplaceholder";
import Resources from "./components/Resources";
import "./scss/_test.scss";

const App = () => {
  ////////////////////////////////////////////////////////////
  //axios取得記述
  ////////////////////////////////////////////////////////////
  const [resources, setResources] = useState([]);

  //postsのデータを取得(asyncは非同期通信)
  const getPosts = async () => {
    //情報取得をtryでが。何かしらエラーが出た場合はcatchが動く。
    try {
      //await → この処理が終わるまで次の行には行かない。
      //get() → http通信でデータを取得する。
      const posts = await jsonplaceholder.get("/posts");
      setResources(posts.data);
    } catch (err) {
      console.log(err);
    }
  };

  //albumsのデータを取得
  const getAlbum = async () => {
    try {
      const albums = await jsonplaceholder.get("/albums");
      setResources(albums.data);
    } catch (err) {
      console.log(err);
    }
  };

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

      <section className='ui raised very padded text container segment'>
        <h2 className='ui header'>axios API</h2>
        <p>※JSON Placeholderから取得</p>
        <ButtonAdv onClick={getPosts} color='primary' text='Posts' />
        <ButtonAdv onClick={getAlbum} color='red' text='Album' />
        <Resources resources={resources} />
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

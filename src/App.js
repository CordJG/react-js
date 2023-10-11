/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','배불러']);
  let [up, up변경] = useState(0);

  let posts = '오늘의 고양이';
  let titleStyle = {color : 'blue' , fontSize : '30px'};
  function 함수(){
    
  }


  
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>  개발 Test</div>
        </div>
        <button onClick={() => {글제목변경(['여자 코트 추천','배불러'])}}>추천목록변경</button>
        <div className="list">
          <h3> {글제목[0]} <span onClick={() => {up변경(up+1)}}>👍</span> {up} </h3>
          <h4> up 수 확인 하기 <span onClick={() => {console.log(up)}}>🙌</span></h4>
          <p> 2월 17일 발행 </p>
          <hr/>
        </div>
        <div className="list">
          <h3> {posts} </h3>
          <p> 2월 18일 발행 </p>
          <hr/>
        </div>
    </div>
  );
}

export default App;

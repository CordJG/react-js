/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','배불러']);
  let [up, up변경] = useState(0);

  let posts = '오늘의 고양이';
  let titleStyle = {color : 'blue' , fontSize : '30px'};
  function changeTitle(){
    var newArray = [...글제목];  //배열이기 때문에 deep copy 해야함 '...'는 중괄호 대괄호를 다 지워달라는 얘기  *리액트 대 원칙 : immutable data
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>  개발 Test</div>
        </div>
        <button onClick={changeTitle}>추천목록변경</button>
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
      
      <Modal></Modal>
      <Modal2></Modal2>
    </div>
  );
}

/**
 * Component 유의사항 
 * 1. 이름은 대괄호
 * 2. return() 안에 있는 건 태그 하나로 묶어야 함
 * 3. 반복출현하는 HTML 덩어리들을 Component로 만든다
 * 4. 자주 변경되는 HTML UI들에 쓰는 게 좋다 (성능에 좋다)
 * 5. 다른 페이지 만들 때도 컴포넌트로 만듦
 */
function Modal(){
  return (
      <div className="modal">
        <h2> 제목 </h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    
  )

}

function Modal2(){
  return (
      <div className="modal">
        <h2> 제목 </h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    
  )

}

export default App;

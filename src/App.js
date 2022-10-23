import { useState, useEffect } from "react";
import styled from "./Button.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  // userEffect(function, []) => 특정 조건일 때 실행하도록 해주는 기능
  // 기본 포맷의 []를 사용하면 상태를 체크하는 값이 없기에 그저 1번만 실행 함.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // 어떤 특정한 값에 변화를 감지하여 실행하려면 [] 안에 value keyword를 넣음.
  // useEffect의 실행 함수 안에서 (if)특정 조건을 부여할 수 있음
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  // 상태를 체크 할 값은 여러 값의 사용이 가능
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick} className={`${styled.btn} ${styled.btnFont}`}>
        click me
      </button>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

// Cleanup function => useEffect에서 무언가를 생성하고 삭제 될 때에도
// 어떠한 함수를 실행하도록 할 수 있음.
// uesEffect 함수 작성 부분에 return function() 작성하면 됨.

function App() {
  // Cleanup function 학습
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

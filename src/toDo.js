import { useState } from "react";

// To Do List Create!!

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const DeleteBtn = (event) => {
    const listText = event.target.previousSibling.innerHTML;
    setToDos((currentArray) =>
      currentArray.filter((list) => list !== listText)
    );
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            <span>{toDo}</span>
            <button onClick={DeleteBtn}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

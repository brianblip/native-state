import { useState } from "react";
import "./App.css";

function NameList() {
  const [list, setList] = useState(["Brian", "John", "Doe"]);
  const [name, setName] = useState("");

  const handleAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>Add</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Add</button>
      <NameList />
    </div>
  );
}

export default App;

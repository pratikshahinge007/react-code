import React, { useState } from "react";
import "./style.css";
import logo from './logo.svg'
export default function App() {
  const [inputData, setInputData] = useState("");
  const [finalToDoList, setFinalToDoList] = useState([]);

  const onChangeInput = (e) => {
    setInputData(e.target.value);
  };

  const addToDoListData = () => {
    setFinalToDoList([...finalToDoList, inputData]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addToDoListData();
    }
  };

  return (
    <div id="container">
      <div id="item">
        <div id="outer_div">
          <label htmlFor="input">Input</label>
          <input
            id="input"
            type="text"
            value={inputData}
            onChange={onChangeInput}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task"
          />
          <button id="add_button" onClick={addToDoListData}>
            Add
          </button>
        </div>
        <div id="list_data">
          {finalToDoList?.map((data, id) => {
            return <div key={id}>{data}</div>;
          })}
        </div>
      </div>
      <div id="item">
        <div>to-Do List</div>
        <div>with JavaScript</div>
        <img title="React logo" src={logo.svg}/>
      </div>
    </div>
  );
}

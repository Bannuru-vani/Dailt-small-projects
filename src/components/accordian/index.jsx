/*
-------------------------------
 Two Variation of accordian
 - Single Selection
 - Multiple selection
-------------------------------
*/

import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(selected === currentId ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];

    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setmultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setenableMultiSelection((prev) => !prev);
          setmultiple([]);
          setSelected(null);
        }}
      >
        {enableMultiSelection ? (
          <p>Disable Multi Selection</p>
        ) : (
          <p>Enable Multi Selection</p>
        )}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

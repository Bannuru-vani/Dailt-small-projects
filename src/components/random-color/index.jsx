import React, { useEffect, useState } from "react";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomColorUtility = (length) => {
  return Math.floor(Math.random() * length);
};

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setcolor] = useState("");

  const handleRandomHexColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  };

  const handleRandomRgbColor = () => {
    let [r, g, b] = [
      randomColorUtility(256),
      randomColorUtility(256),
      randomColorUtility(256),
    ];
    setcolor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleRandomHexColor();
    } else {
      handleRandomRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <div>
        <h3 style={{ margin: "20px" }}>Generate Random Color</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <button onClick={() => setTypeOfColor("hex")}>Choose HEX</button>
          <button onClick={() => setTypeOfColor("rgb")}>Choose RGB</button>
        </div>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
        >
          Generate
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "120px",
          color: "#FFF",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

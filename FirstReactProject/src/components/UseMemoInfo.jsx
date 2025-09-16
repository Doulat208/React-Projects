import React, { useState } from "react";
import Table from "./Table";
import Color from "./Color";

const UseMemoInfo = () => {

    const [num, setNum] = useState(2);
    const [color, setColor] = useState("#000000")
    const changeColor = () => {
        let rColor = "#"+Math.floor(Math.random() * 555555).toString(16);
        setColor(rColor)
    }

  return (
    <div className="d-flex flex-column" style={{ height: "80vh" }}>
      <h2> Use Memo Example </h2>
      <div><input type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button className="btn btn-primary" onChange={changeColor}>Change Color</button>
      </div>
      <div style={{color: color}}>
        <Table num={num} />
      </div>
    </div>
  );
};

export default UseMemoInfo;

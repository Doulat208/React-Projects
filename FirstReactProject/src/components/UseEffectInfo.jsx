import React, { useEffect, useState } from "react";

const UseEffectInfo = () => {
  let [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count++);
  };

  let name;

  // Mount and Unmount
  // the useEffect execute before mount of any content means, before load the content
  // There is a 

  // this is the most usable hook in react
  // It is the first function to call when a component is render
  // It use automatically wheneverwe do somathing in the component
  // To stop this to run multiple time and render one time then we use [] 

  // this called only when there is something changes in count variable
  useEffect(() => {
    console.log(`counter= ${count}`);
  }, [count]);


  // this called only one time when the component is render for the first time
  useEffect(() => {
    console.log(`counter= ${count}`);
  }, []);

  // this called every time whenever there is something happen in that component
  useEffect(() => {
    console.log(`Without Counter`);
    return () => {
      console.log("unmount")
    }
  });

  // this useeffect run when ever something changes in name vaariable
  useEffect(() => {
    console.log(`Without Counter`);
  },[name]);
  return (
    <div className="d-flex flex-column" style={{ height: "80vh" }}>
      <h2>Use Effect Example</h2>
      <h3>Count: {count}</h3>
      <button className="btn btn-primary" onClick={onIncrement}>
        {" "}
        Increament{" "}
      </button>
    </div>
  );
};

export default UseEffectInfo;

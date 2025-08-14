import "./App.css";
// import React from React;

// In term of java script it is a function
// but in term of React it is a component when it will return JSX (Java Script XML)
// Component first letter mustne Capital
function App() {
  let msg = "Doulat";
  // let langs = ["C", "C++", "Java", "Python", "JavaScript"];
    let langs = [
      {id: 1, lang: "C", book: "C Book"}, 
      {id: 2, lang: "C++"}, 
      {id: 3, lang: "Java"}, 
      {id: 4, lang: "Python"}, 
      {id: 5, lang: "JavaScript"}
    ];  

  return (
    // <React.Fragment>   // Its the root tag , without it we cant return multiple tag,
    // we can use <></> empty tag or <div></div> tag to do that
    <>
      {/* <h1>Welcome To My First React App</h1>    */}
      {/* The qeurly braces are known as jsx */}
      <h1>{`Welcome ${msg}`}</h1>
      {/* here the h1 tag is of JSX not HTML  */}
      <h1>Welcome Guys</h1>
      {/* Here we dont have for loop so we use map() , and map() only work on array not in objects*/}
      {/* {langs.map((item, index) => (
        <li key={index}><b>{`${item}`}</b></li>
      ))} */}
      {/* {langs.map((obj) => (
        <li key={obj.id}><b>
          {`Lang = ${obj.lang}}`}
        </b></li>
      ))} */}
      {langs.map((obj) => (
        <li key={obj.id}><b>
          {/* {obj.book ? `Lang : ${obj.lang} and Book: ${obj.book}` : `Lang : ${obj.lang}`} */}
          {/* {`${obj.lang}  ${obj.book ? obj.book : ""}`} */}
          {`${obj.lang}  ${obj?.book || ""}`}
        </b></li>
      ))}
    </>
    // </React.Fragment>
  );
}

// we need to export this component like this then only we can Import it anywhere i want
export default App;

// There are 2 types of export 1 defaul 2 normal
// In one file there must be only one default component and may be multiple component
// Default have the power to change its name while import anywhere and also can need culry bracet to import it
// W


// Arrow function
// for multiple tag we need () so that we can send only one root
// ()=>{ return }   - here we need return keyword
// ()=>() - here we dont need to return
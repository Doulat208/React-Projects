
import './App.css'
// import React from React;

// In term of java script it is a function
// but in term of React it is a component when it will return JSX (Java Script XML)
// Component first letter mustne Capital
function App() {    

  return ( 
      // <React.Fragment>   // Its the root tag , without it we cant return multiple tag, 
      // we can use <></> empty tag or <div></div> tag to do that
      <>
      <h1>Welcome To My First React App</h1>   
       {/* here the h1 tag is of JSX not HTML  */}
          <h1>Welcome Guys</h1>
      </>
      // </React.Fragment>
  );
}

// we need to export this component like this then only we can Import it anywhere i want
export default App

// There are 2 types of export 1 defaul 2 normal
// In one file there must be only one default component and may be multiple component
// Default have the power to change its name while import anywhere and also can need culry bracet to import it
// W
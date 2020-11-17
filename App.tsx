// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';
import * as React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

// var a = 2;
const App = () =>(
  <BrowserRouter>
  <div>
    <Route exact path="/"component={Home}/>
    <Route path="/about"component={About}/> 
    </div>
  </BrowserRouter>
)

const urlDATA = './api/v1/list';
async function activateLasers(){
  // alert("Pushed!");
  const res = await window.fetch(urlDATA);
  //  const users = await res.json();
  console.log(res);
  // console.log(users);

}

const Home =()=>{
  return( 
    <div>
      <h1>Welcome</h1>
      <p>'abc'</p>
      <p><Link to="/about">about</Link></p>
      <button onClick={activateLasers}>
     Activate Lasers
      </button>
    </div>
    
  )
}
const About =()=>{
  return(
    <div>
      <h1>about</h1>
      <p><Link to="/">home</Link></p>
    </div>
  )
}

export default App;
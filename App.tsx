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
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link} from 'react-router-dom';
import About from './About'
import Login from './Login'

// var a = 2;
const App = () =>(
  <BrowserRouter>
  <div>
    <Route exact path="/"component={Home}/>
    <Route path="/about"component={About}/> 
    <Route path="/login"component={Login}/>     
    </div>
  </BrowserRouter>
)
export default App;


const Home =()=>{

  // const urlDATA = './api/v1/list';
  async function activateLasers(){
  // alert("Pushed!");
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  //console.log(res);
  console.log(users);

}
  return( 
    <div className="text-center">
      <h1>Welcome</h1>
      <p>'abc'</p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/login">Login</Link></p>
      <button onClick={activateLasers}>
     ログイン
      </button>
    </div>
    
  )
}



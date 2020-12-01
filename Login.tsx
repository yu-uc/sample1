import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom'


const Login: React.FC =()=>{
  function passwd(a: number){
      if(a>=5){
        return true;
      }
      return false;
  }
  function handleClick(){
    console.log(atai)
    console.log(passwd(atai));
  }
  // const [ count, setCount ] = useState<number>(0);
   let atai = 1;

  return (
    <div className="Login text-center">
      <div>
        <p>ID</p>
       <input　type="text"　/>
       </div>
       <p>パスワード</p>
       <input　type="text"　/>
       <div>
         <button>ログイン</button>
       </div>
       <div>
       <input placeholder="0" onChange={
        (event: React.ChangeEvent<HTMLInputElement>) => {
          atai = Number(event.target.value);
          // console.log(atai);
          // console.log(passwd(atai));
        }
         } />
           <button onClick={handleClick}>チェック</button>
     </div>
       <p><Link to="/">home</Link></p>
    </div>
  );
}

export default Login;
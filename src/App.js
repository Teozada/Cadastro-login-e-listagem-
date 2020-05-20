import React,{useEffect} from 'react';
import Routes from './routes'

function App() {
  useEffect(()=>{
    const users = localStorage.getItem('users')
    if(users === null || users === ''){
      localStorage.setItem('users',JSON.stringify([]))
    }
  },[])
  return (
    <Routes/>
  );
}

export default App;

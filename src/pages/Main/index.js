import React,{useState} from 'react';
import { Mainstyled } from './style'
import { Link,useHistory } from 'react-router-dom';

export default function Main(){
  const history = useHistory()
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  function login(){
    let user = JSON.parse(localStorage.getItem(email))
    if(user === null){
      alert('Login Incorreto!')
      return
    }else if(user.senha === senha){
      localStorage.setItem('currentUser',email)
      history.push('/users')
    }else{
      alert('Senha Incorreta!')
    }

    
  }

  return(
    <Mainstyled>
    <section>
      <Link to="/"> 
    <img src={'https://4.bp.blogspot.com/-tsz-9YDef0U/WyrZkJmNRtI/AAAAAAABrNY/OxZhpz7UKbgl3xTP3w7Rwxl1PMCAEVNtgCLcBGAs/s1600/brahma%2Blogo.jpg'}/>
    
    </Link>
    <h1>Fazer Login</h1>

    <input 
    placeholder="Digite seu email" 
    email='email'
    onChange={text=>setEmail(text.target.value)}
    required
    />
    <input 
    placeholder="Senha" 
    type='password'
    onChange={text=>setSenha(text.target.value)}
    required
    />

    <div>
      <Link to='/cadastro'>
    <button>Criar Conta</button>
    </Link>
    <button onClick={login}>Logar</button>
    </div>

    </section>  
    </Mainstyled>

  )
}

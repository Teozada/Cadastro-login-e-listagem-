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
      alert('Deu ruim ladrão')
      return
    }else if(user.senha === senha){
      localStorage.setItem('currentUser',email)
      history.push('/users')
    }else{
      alert('Deu ruim vagabundo')
    }

    
  }

  return(
    <Mainstyled>
    <section>
      <Link to="/"> 
    <img src={'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'}/>
    
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
import React, { useState,useEffect } from 'react';
import { Mainstyled } from './style'
import {useHistory,Link} from 'react-router-dom'


export default function Teste(){
  const history = useHistory();

  const [name,setName] = useState('');
  const [email,setemail] = useState('');
  const [senha,setSenha] = useState('');
  const [telefone,setTelefone] = useState('');

  const [user,setUser] = useState({})
  const [userArray,setUserArray] = useState(JSON.parse(localStorage.getItem('users')))

  useEffect(()=>{
    setUser({name,email,senha,telefone})
  },[name,email,senha,telefone])

  function login(e){
    e.preventDefault();
    localStorage.setItem(user.email,JSON.stringify(user));

    let array = userArray
    array = [...array,{
      name,
      email,
      senha,
      telefone,
    }]
    localStorage.setItem('users',JSON.stringify(array));
    history.push('/')
  }

  return(
    <Mainstyled>
      <form onSubmit={login}>
        <Link to="/">
      <img src={'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'}/>
      </Link>
      <h1>Criar Conta</h1>

        <input
         placeholder="Nome"
         onChange={text=>setName(text.target.value)}
         required
        />

        <input 
        placeholder="Email"
         type="email"
         onChange={text=>setemail(text.target.value)}
         required
         />

        <input
         placeholder="Senha"
         type="password"
         onChange={text=>setSenha(text.target.value)}
         required
         minLength="3"
         />

        <input
         placeholder="Telefone"
         type="number"
         onChange={text=>setTelefone(text.target.value)}
         required
         minLength="1"
         />

       
        <button type="submit">Criar Conta</button>
        
        

      </form>
    </Mainstyled>
  )
}
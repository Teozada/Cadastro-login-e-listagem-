import React, { useState,useEffect } from 'react';
import { Mainstyled } from './style'
import {useHistory,Link} from 'react-router-dom'


export default function Teste(){
  const history = useHistory();

  const [name,setName] = useState('');
  const [email,setemail] = useState('');
  const [senha,setSenha] = useState('');
  const [telefone,setTelefone] = useState('');
  const [cep,setCep] = useState('');

  const [user,setUser] = useState({})
  const [userArray,setUserArray] = useState(JSON.parse(localStorage.getItem('users')))

  useEffect(()=>{
    setUser({name,email,senha,telefone,cep})
  },[name,email,senha,telefone,cep])

  function login(e){
    e.preventDefault();
    localStorage.setItem(user.email,JSON.stringify(user));

    let array = userArray
    array = [...array,{
      name,
      email,
      senha,
      telefone,
      cep,
    }]
    localStorage.setItem('users',JSON.stringify(array));
    history.push('/')
  }

  return(
    <Mainstyled>
      <form onSubmit={login}>
        <Link to="/">
      <img src={'https://4.bp.blogspot.com/-tsz-9YDef0U/WyrZkJmNRtI/AAAAAAABrNY/OxZhpz7UKbgl3xTP3w7Rwxl1PMCAEVNtgCLcBGAs/s1600/brahma%2Blogo.jpg'}/>
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
         />

        <input
         placeholder="Telefone"
         type="number"
         onChange={text=>setTelefone(text.target.value)}
         required
         />

        <input
         placeholder="CEP"
         type="number"
         onChange={text=>setCep(text.target.value)}
         required         
         />

       
        <button type="submit">Criar Conta</button>
        
        

      </form>
    </Mainstyled>
  )
}

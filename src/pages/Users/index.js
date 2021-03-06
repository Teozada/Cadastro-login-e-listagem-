import React,{useEffect,useState} from 'react'
import {Mainstyled} from './style'
import { useHistory, Link } from 'react-router-dom'



export default function Users(){
  const history = useHistory()

  const [currentUser,setCurrentUser] = useState('')
  const [userArray,setUserArray] = useState([]);


    useEffect(()=>{
      let user = localStorage.getItem('currentUser')
      if(user === null || user === ''){
        history.push('/')
        return
      }

      setCurrentUser(JSON.parse(localStorage.getItem(user)))
      setUserArray(JSON.parse(localStorage.getItem('users')))
    },[])
      
    return(
      <Mainstyled>
         <img src={'https://4.bp.blogspot.com/-tsz-9YDef0U/WyrZkJmNRtI/AAAAAAABrNY/OxZhpz7UKbgl3xTP3w7Rwxl1PMCAEVNtgCLcBGAs/s1600/brahma%2Blogo.jpg'}/>
        {currentUser !== ''&&(
          <h1>Olá, {currentUser.name}</h1>
        )}

    <section>

    {userArray.map(item=>(
       <div>
       <label>Nome:<span>{item.name}</span></label>
       <label>Email:<span>{item.email}</span></label>
       <label>Senha:<span>{item.senha}</span></label>
       <label>Cep:<span>{item.cep}</span></label>
     </div>
    ))}      
    </section> 

    <Link to="/">
      <button>Deslogar</button>
    </Link>
      </Mainstyled>
    )
}

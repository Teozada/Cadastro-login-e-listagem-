import styled from 'styled-components'

export const Mainstyled = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#fff;

  form{
    max-width:500px;
    width:100%;
    height:620px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid #000;  
    border-radius: 12px;
  }

  h1{
    font-weight: 400;
    font-size:26px;
  }

  input{
    width:75%;
    padding:20px 15px;
    border:1px solid #CCC;
    font-size:17px;
    border-radius:5px;       
  }

  input+input{
      margin:10px 0 0 0;  
  }

  button{
    background:none;
    color:#900020;
    cursor:pointer;
    border:none;
    outline:none;
    font-weight:600;
    font-size:14px;
    padding:15px;
    border-radius:5px;
    margin-top: 10px;
  }

  button:hover{
    background:#fff;
    transition:0.5s
  }

  
  img{
    height:60px;
    margin:70px 0 0 0;
  }
`

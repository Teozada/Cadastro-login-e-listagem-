import styled from 'styled-components'

export const Mainstyled = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section{
    max-width:500px;
    width:100%;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid #000;  
    border-radius: 12px;
  }

  img{
    height:40px;
    margin:50px 0 0 0;
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
    margin:20px 0 0 0;      
    
  }

  input+input{
      margin:10px 0 0 0;  
  }

  div{
    display:flex;
    justify-content:space-between;
    width:80%;
    margin-top:50px;   
  }

  button{
    background:none;
    color:#3f89ec;
    cursor:pointer;
    border:none;
    outline:none;
    font-weight:600;
    font-size:14px;
    padding:15px;
    border-radius:5px
  }

  button:hover{
    background:#c5dcf9;
    transition:0.5s
  }

  button+button{
    background:#3f89ec;
    color:white;
  }

  button+button:hover{
    background:#3f89ec;
  }
`

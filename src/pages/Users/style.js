import styled from 'styled-components'

export const Mainstyled = styled.main`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color:#900020;

  section{
    width:80%;
    border:1px solid #000000;
    height:400px;
    border-radius:10px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    overflow-y:scroll;
    overflow-x:hidden;
  }

  section::-webkit-scrollbar{
    width:8px;
    background:none;
  }

  section::-webkit-scrollbar-thumb{
    background:#000000;
    border-radius:15px
  }

  img{
    height:60px;
    margin:70px 0 0 0;
  }
  
  div{
    display:flex;
    flex-direction:column;
    border:1px solid #000000;
    width:300px;
    height:200px;
    padding:15px;
    margin:12px;
    overflow:hidden;
  }

  label{
    font-size:20px;
    margin-top:15px
  }

  span{
    font-size:25px;
    color:#ffffff;
  }
  
  button{
    background:none;
    color:#000000;
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
  }
  `

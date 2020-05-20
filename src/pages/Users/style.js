import styled from 'styled-components'

export const Mainstyled = styled.main`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;

  section{
    width:80%;
    border:1px solid #ccc;
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
    background:#000;
    border-radius:15px
  }

  div{
    display:flex;
    flex-direction:column;
    border:1px solid #ccc;
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
    color:#3f89ec;
  }
  
  button{
    background:#3f89ec;
    color:white;
    cursor:pointer;
    border:none;
    outline:none;
    font-weight:600;
    font-size:14px;
    padding:15px;
    border-radius:5px;
  }

  button:hover{
    background:#3f89ec;
    color:white;
  }
  `
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo from "../assets/imgs/Frame.svg"
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Header({handleScrollSobre, handleScrollCrono}) {
  const navigate = useNavigate()


  return (

    
    <Top>
   
      <div className="left">
      <Link to={"/"} >  <img className="header-logo" src={logo} /></Link>
      <div className="align"> 
           <span className="list" onClick={handleScrollSobre} >Sobre</span>
          <span className="list" onClick={handleScrollCrono} >Cronograma</span>
      </div>
   
      </div>
      <div className="rigth" >
      <span className="list" onClick={()=>navigate("/login")} >Login</span>
      </div>
    </Top>
  );
}

const Top = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: hsl(100, 100, 100, 50%);
  box-shadow: 5px 5px 5px  #eee;
  z-index: 2;
  display: flex;
  top: 0;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5); /* Cor de fundo embaçada */
  backdrop-filter: blur(30px); /* Efeito de desfoque */
 

 
  span {
    border: none;
    color:hsl(225, 72%, 47%, 100%);
    height: 28px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
    margin-right: 20px;
  font-family: 'Open Sans', sans-serif;
  }
  .list{
    display: flex;
    align-self: flex-start;
  }
  .list:hover{
    background-color: var(--darkcolor);
    transition: 0.5s;
  }
  h1 {
  font-family: 'Open Sans', sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 42.09px;
    padding: 10px;
    cursor: pointer;
  }
  .header-logo {
    width: 200px;
    height: 150px;
    margin-left: 0px;
    
  }
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: auto;
    height: 80px;
    .align{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      height: 80px;
      cursor: pointer;
    }
  }
  
  .rigth{
    display: flex;
   
  }




`




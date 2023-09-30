import styled from "styled-components";
import { useNavigate } from "react-router";
import logo from "../assets/imgs/Frame.svg"
import { Link } from "react-router-dom";
import { useRef } from "react";
import background2 from "../assets/imgs/Fundo.png"


export default function Header({ handleScrollSobre, handleScrollCrono }) {
  const navigate = useNavigate()
  function logout() {

    navigate("/")
  }

  return (


    <Top style={{ backgroundImage: `url(${background2})` }} >

      <div className="left">
        <Link to={"/"} >  <img className="header-logo" src={logo} /></Link>
        <div className="align">
          <span className="list" onClick={handleScrollSobre} >Sobre</span>
          <span className="list" onClick={handleScrollCrono} >Cronograma</span>
        </div>

      </div>
      <div className="rigth" >
        <span className="list" onClick={() => navigate("/login")} >Login</span>
        <span className="list" onClick={() => logout()} >Logout</span>

      </div>
    </Top>
  );
}

const Top = styled.div`
  width: 100vw;
  height: 30px;
  position: fixed;
  background-color: hsl(100, 100, 100, 50%);
  z-index: 2;
  display: flex;
  top: 0;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1); /* Cor de fundo embaçada */
  backdrop-filter: blur(30px); /* Efeito de desfoque */
  @media screen and (max-width: 600px){
   
  }

 
  span {
    border: none;
    color:hsl(225, 72%, 47%, 100%);
    height: 28px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
    margin-right: 20px;
    font-size: 18px;
    font-family: 'Inconsolata', monospace;

  }

  .list{
    display: flex;
    align-self: flex-start;
    transition: background-color 0.3s;

  }
  .list:hover{
    background-color: #f0f0f0;
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




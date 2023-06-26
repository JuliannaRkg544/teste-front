import styled from "styled-components";

export default function Container({ children }) {
  return <Style>{children}</Style>;
}

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url("background-image.png");
 

  @media screen and (max-width: 992px){
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    
   
  }

`;

export const Rigth = styled.div`
  display: flex;
  padding: 80px;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
   padding: 80px;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 6px 6px 3px rgba(0, 0, 0, 0.40);
  img{
    display: flex;
    align-self: center;
    margin-left: -35px;
    width: 350px;
    height: 200px;
  }
  
  
  input {
    width: 303px;
    padding: 10px;
    height: 45px;
    margin: 10px 0;
    color: #696969;
    font-size: 18px;
    border: 1px solid #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 4.64px;
  }
  button {
    width: 303px;
    height: 45px;
    margin: 10px 0;
    color: #fff;
    font-size: 21px;
    border-radius: 4.64px;
    border: 1px #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #FBB040;
    margin-bottom: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
  button:hover {
    cursor: pointer;
   
  }

  span {
    color: #000;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
  a {
    color: #000;
  }

  @media screen and (max-width: 992px){
    padding: 0;
    box-shadow: 0 0 0 0;
    height: auto;
    margin-bottom: 50px;
    a{
      margin-bottom: 50px;
    }
  }

`;
import styled from "styled-components"
import background2 from "../assets/imgs/Fundo.png"

export default function Footer() {
    return (
        <Style style={{ backgroundImage: `url(${background2})` }} >

            <span>Copyright © 2023 SCTI</span>
        </Style>

    )
}

const Style = styled.div`
width: 100vw;
height: 50px;
position: relative;
bottom: 0;

display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 600px){
    display: none;
   
  }

span{
    color: #fff;
    font-size: 15px;
    font-family:'Roboto', sans-serif;
    font-weight: 200;


}

`
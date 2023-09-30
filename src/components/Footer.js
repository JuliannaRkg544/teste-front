import styled from "styled-components"
import background2 from "../assets/imgs/Fundo.png"

export default function Footer() {
    return (
        <Style style={{ backgroundImage: `url(${background2})` }} ></Style>

    )
}

const Style = styled.div`
width: 100vw;
height: 50px;
position: relative;
bottom: 0;

`
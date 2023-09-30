import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"

export default function Loading() {
    return (<Style><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" /></Style>)
}

const Style = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

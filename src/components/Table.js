import styled from "styled-components";

export default function Table({children}){
    return <Style>{children}</Style>;
}

const Style = styled.div`
padding: 0 100px;
.days{
    color: #0573C2;
}

th, td {
    border-bottom: 1px solid #6a6a6a;
    padding: 10px;
}

`





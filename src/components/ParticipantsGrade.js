import styled from "styled-components";

export default function ParticipantsGrade({children}){

    return <Style>{children}</Style>;

}


const Style = styled.div`
display: flex;
font-family: 'Roboto', sans-serif;

.blocos{
    height: 40px;
    background-color: #eee;
    min-width: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 3px;
    box-shadow: 4px 4px 5px  #ccc;
    margin: 5px;
    padding: 10px;
}

.liberar {
    background-color: #FBB040;
    cursor: pointer;
    justify-content: center;
    font-weight: 600;
    color: #fff;

}

`
import styled from "styled-components";
import Container from "../styledComponents/Container";
import Header from "../components/Header"
import Table from "../components/Table";

export default function UserLogged(){
    return(<Style>
        <Header></Header>
    
    <h1 className="title" >Área do Usuário</h1>
    <h2 className="sub-title" >Meu Cronograma</h2>
    <Table>

    <table className="cronogram">
    <tr className="days">
        <td>seg, 23/11 </td>
        <td>ter, 24/11</td>
        <td>qua, 25/11</td>
        <td>qua, 25/11</td>
        <td>qua, 25/11</td>
    </tr>
    <tr>

    </tr>
    </table>
    </Table>
    </Style>)
    
}



const Style = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  .title{
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #232323;
 }
 .sub-title{
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    color: #6a6a6a;
    font-weight: 500;

 }
   `
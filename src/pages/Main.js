import styled from "styled-components"
import logo from "../assets/imgs/logo@2x.png"
import logo2 from "../assets/imgs/Rectangle3.png"
import logo3 from "../assets/imgs/Rectangle(2).svg"

export default function Main(){
    return(
       <Style>
           <img src={logo3} />
         <Box>
            <div className="inner-box">
            <p className="title">
            13ª Semana de Ciência da Computação e Tecnologia 
            da Informação (SCTI) - UENF
            </p>
            <button>Realizar Inscrição</button>
            </div>
                <p className="sub-title" >
                 <ion-icon name="calendar-outline"></ion-icon>
                    23/10/2023 – 28/10/2022 - 09:00 - 17:00 GMT-3
                </p>
                <p className="sub-title">
                <ion-icon name="location-outline"></ion-icon>
                presencial UENF - Campos - Campos dos Goytacazes - Rio de Janeiro - Brasil
                </p>
        </Box>
        <Box>
       <p className="title"> Sobre o evento    </p>
       <p>A Semana de Ciência da Computação e Tecnologia da Informação (SCTI) é um dos eventos que compõe a Semana Acadêmica Unificada da UENF que todo ano reúne os alunos de graduação para participar de palestras e minicursos.</p> 
        <p>Em sua décima terceira edição, o evento tem como principais objetivos o aprimoramento técnico-científico dos participantes, a difusão de novas tecnologias e a aproximação dos estudantes universitários com a realidade do mercado de trabalho.</p> 
       <p> A SCTI busca também incentivar e motivar a pesquisa científica, a inovação tecnológica e o empreendedorismo na região, fortalecendo a formação dos alunos de graduação em Ciência da Computação e áreas afins, dando-lhes a oportunidade de conhecer tópicos não abordados nos cursos regulares.</p> 
     
        </Box>
       </Style>
    )

}

const Style = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

img{
  border-radius: 10px;
  width: 800px;
  height: 300px;
}
  
`
const Box = styled.div`
  border-radius: 10px;
  width: 1100px;
  min-height: 300px;
  margin: 40px 0;
  background-color: #fff;
  padding: 0 30px;
  border: 1px solid #6a6a6a ;
 .inner-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

 }
 button{
    width: 180px;
    height: 40px;
    background-color: #FBB040;
    border-radius: 50px;
    border-style: none;
    margin: 0 50px;
    color: #fff;
    font-family:'Roboto', sans-serif;
 }
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
 p{
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #232323;
    font-weight: 400;
 }
`
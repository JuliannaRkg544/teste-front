import styled, { ThemeProvider } from "styled-components"
import logo from "../assets/imgs/Frame.svg"
import logo2 from "../assets/imgs/Rectangle3.png"
import logo3 from "../assets/imgs/logo.svg"
import axios from "axios"
import { json } from "react-router-dom"
import Header from "../components/Header"
import Table from "../components/Table"
import background from "../assets/imgs/background-image.png"
import { useState } from "react"
import Monday from "../components/weekdays/DayCronogram"
import DayCronogram from "../components/weekdays/DayCronogram"

export default function Main() {
   const [mondayClicked, setMondayClicked] = useState(false)
   const [tuesdayClicked, setTuesdayClicked] = useState(false)
   const [wednesdayClicked, setWednesdayClicked] = useState(false)
   const [thursdayClicked, setThursdayCliked] = useState(false) 
   const [fridayClicked, setFridayCliked] = useState(false)


   function mondayBtn() {
      setMondayClicked(true)
      setTuesdayClicked(false)
      setWednesdayClicked(false)
      setThursdayCliked(false)
      setFridayCliked(false)

   }
   function tuesdayBtn() {
      setTuesdayClicked(true)
      setMondayClicked(false)
      setWednesdayClicked(false)
      setThursdayCliked(false)
      setFridayCliked(false)

   }
   function wednesdayBtn() {
      setWednesdayClicked(true)
      setTuesdayClicked(false)
      setMondayClicked(false)
      setThursdayCliked(false)
      setFridayCliked(false)

   }
   function thursdayBtn() {
      setThursdayCliked(true)
      setWednesdayClicked(false)
      setTuesdayClicked(false)
      setMondayClicked(false)
      setFridayCliked(false)

   }

   function fridayBtn() {
      setFridayCliked(true)
      setWednesdayClicked(false)
      setTuesdayClicked(false)
      setMondayClicked(false)
      setThursdayCliked(false)

   }


   /*    const [mondayClicked,setMondayClicked] = useState(false)
      const [mondayClicked,setMondayClicked] = useState(false) */

   function subscript() {
      fetch("http://localhost:4000/payment", {
         method: "POST",
         headers: {
            "Content-Type": 'application/json',
         },
         body: JSON.stringify({
            items: [
               { id: 1, quantity: 1 },
            ],
         }),
      })
         .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject
               (json))
         })
         .then(({ url }) => {
            window.location = url
         })
         .catch(e => {
            console.log(e.error)
         })
   }

  function Main(){
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
const Span = styled.div`
color: ${props => props.theme.dfColor};
background-color: ${props => props.theme.dfBack};
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 28px;
padding: 8px;


    
`

const color = {
   dfColor: '#D4D4D4',
   dfBack: '#FFFFFF'
};

const invertedColor = {
   dfColor: '#FFFFFF',
   dfBack: '#D4D4D4'
}
const Cronogram = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 100px;
.days{
    display: flex;
    flex-direction: row;
    
   
}
.weekday{
    margin-right: 10px; 
    button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border: none;
      width: auto;
      height: 30px;
      font-size: 20px;
      border-radius: 5px;
      cursor: pointer;

}
}

.btn-active{
   background-color: #eee;
   color: hsl(225, 72%, 47%, 100%);
}
.btn-inactive{
   background-color: #fff;
   color: hsl(225, 72%, 47%, 100%);}
`



const Banner = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(154,118,112,0.2) 83%, rgba(255,0,181,0.6502976190476191) 100%);flex-direction: column;

.info{
p{
   font-family:'Roboto', sans-serif;
      font-size: 40px;
      color: #696969;
      font-weight: 600;
      width: 80vw;
      display: flex;
      justify-content: center;

}

}
`

const Style = styled.div`
  display: flex;
  flex-direction: column;
 
  align-items: center;
  justify-content: center;


.center{
   background-color: #ccc;
   width: 500px;
   height: 500px;
  }


img{
  border-radius: 10px;
  width: 800px;
  height: 300px;
  margin-left: -90px;
}

.days{
    color: #0573C2;
}

th, td {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
}

td:hover{
   background-color: #ddd;
   border-radius: 3px;
}
table{
  
   display: flex;
   justify-content: center;
   align-items: center;
}
.content{
  border: 1px solid #ccc;;
}
  
`
const Box = styled.div`

  max-width: 1100px;
  min-height: 300px;
  margin: 40px 0;
  background-color: #fff;
  padding: 0 30px;


 .inner-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   

 }
 .subscription{
    width: 180px;
    height: 40px;
    background-color: #FBB040;
    border-radius: 50px;
    border-style: none;
    margin: 0 50px;
    color: #fff;
    font-family:'Roboto', sans-serif;
    box-shadow: 2px 2px 2px  #ccc;
 }
 .title{
  font-size: 30px;
  font-family: 'Share Tech', sans-serif;
  font-weight: 500;
  color:hsl(225, 72%, 47%, 100%); }
 .sub-title{
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    color: #6a6a6a;
    font-weight: 500;
    display: flex;

 }
 ion-icon{
   margin-top: 1px;
  
}

 p{
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    color: #232323;
    font-weight: 400;
 }
`


const End = styled.div`
width: 100%;
height: 400px;
background-color: #eee;
`
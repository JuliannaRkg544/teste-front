import styled, { ThemeProvider } from "styled-components"
import logo from "../assets/imgs/Frame.svg"
import logomini from "../assets/imgs/FrameMini.svg"
import logo3 from "../assets/imgs/logo.svg"
import axios from "axios"
import { json } from "react-router-dom"
import { useNavigate } from "react-router"
import Header from "../components/Header"
import Table from "../components/Table"
import background from "../assets/imgs/background-image.png"
import background2 from "../assets/imgs/Fundo.png"
import { useRef, useState } from "react"
import Monday from "../components/weekdays/DayCronogram"
import DayCronogram from "../components/weekdays/DayCronogram"
import { useEffect } from "react"
import Footer from "../components/Footer"
import rodolfo from "../assets/imgs/palestrantes/rodolfo.jpg"
import thiago from "../assets/imgs/palestrantes/thiago.jpg"
import alfredo from "../assets/imgs/palestrantes/alfredo.jpg"


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

   useEffect(() => {
      document.body.style.overflowX = "hidden";
      return () => {
         document.body.style.overflowX = "auto";
      };
   }, []);


   function subscript() {
      fetch(`http://localhost:4000/comprar`, {
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

   const navigate = useNavigate()


   const sobreScroll = useRef(null);

   const handleScrollSobre = () => {
      const elementTop = sobreScroll.current.getBoundingClientRect().top;

      window.scrollTo({
         top: window.scrollY + elementTop - 100,
         behavior: 'smooth',
      });
   };

   const cronoScroll = useRef(null);

   const handleScrollCrono = () => {
      const elementTop = cronoScroll.current.getBoundingClientRect().top;

      window.scrollTo({
         top: window.scrollY + elementTop - 100,
         behavior: 'smooth',
      });
   };
   return (
      <Style>
         <Header handleScrollSobre={handleScrollSobre} handleScrollCrono={handleScrollCrono} />
         <Banner style={{}}  >
            <img id="img-main" src={logo} />
            <div className="info">
               <p> 13ª Semana de Ciência da Computação e Tecnologia
                  da Informação
               </p>
            </div>
         </Banner>
         <section>
            <Box>
               <div className="inner-box">
                  <p className="title">
                     13ª Semana de Ciência da Computação e Tecnologia
                     da Informação (SCTI) - UENF
                  </p>
                  <button className="subscription" onClick={() => navigate("/checkout")} >Realizar Inscrição</button>
               </div>
               <p className="sub-title" >
                  <ion-icon name="calendar-outline"></ion-icon>
                  23/10/2023 – 27/10/2022 - 09:00 - 18:00 GMT-3
               </p>
               <p className="sub-title">
                  <ion-icon name="location-outline"></ion-icon>
                  presencial UENF - Campos - Campos dos Goytacazes - Rio de Janeiro - Brasil
               </p>
            </Box>
            <Box>
               <p className="title" ref={sobreScroll} > Sobre o evento    </p>
               <p>A Semana de Ciência da Computação e Tecnologia da Informação (SCTI) é um dos eventos que compõe a Semana Acadêmica Unificada da UENF que todo ano reúne os alunos de graduação para participar de palestras e minicursos.</p>
               <p>Em sua décima terceira edição, o evento tem como principais objetivos o aprimoramento técnico-científico dos participantes, a difusão de novas tecnologias e a aproximação dos estudantes universitários com a realidade do mercado de trabalho.</p>
               <p> A SCTI busca também incentivar e motivar a pesquisa científica, a inovação tecnológica e o empreendedorismo na região, fortalecendo a formação dos alunos de graduação em Ciência da Computação e áreas afins, dando-lhes a oportunidade de conhecer tópicos não abordados nos cursos regulares.</p>

            </Box>
            <Box>
               <p className="title" ref={cronoScroll} >Cronograma </p>
               <Cronogram>
                  <div className="days">

                     <div className="weekday">
                        <p className="date"  >


                           <button
                              onClick={() => mondayBtn()}
                              className={mondayClicked ? 'btn-active' : 'btn-inactive'} disabled={mondayClicked} >
                              Segunda
                           </button>


                        </p>
                     </div>

                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => tuesdayBtn()}
                              className={tuesdayClicked ? 'btn-active' : 'btn-inactive'} disabled={tuesdayClicked} >
                              Terça
                           </button>


                        </p>
                     </div>

                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => wednesdayBtn()}
                              className={wednesdayClicked ? 'btn-active' : 'btn-inactive'} disabled={wednesdayClicked} >
                              Quarta
                           </button>


                        </p>
                     </div>
                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => thursdayBtn()}
                              className={thursdayClicked ? 'btn-active' : 'btn-inactive'} disabled={thursdayClicked} >
                              Quinta
                           </button>


                        </p>
                     </div>
                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => fridayBtn()}
                              className={fridayClicked ? 'btn-active' : 'btn-inactive'} disabled={fridayClicked} >
                              Sexta
                           </button>


                        </p>
                     </div>
                  </div>
                  <div className="content" >




                  </div>
               </Cronogram>
               {mondayClicked ?
                  <DayCronogram
                     title="Monday"
                     desc=""
                  /> : <></>}
               {tuesdayClicked ?
                  <DayCronogram
                     title="Tuesday"
                     desc=""
                  /> : <></>}
               {wednesdayClicked ?
                  <DayCronogram
                     title="wednesday"
                     desc=""
                  /> : <></>}
               {thursdayClicked ?
                  <DayCronogram
                     title="Quinta"
                     desc=""
                  /> : <></>}
               {fridayClicked ?
                  <DayCronogram
                     title="Sexta"
                     desc=""
                  /> : <></>}

            </Box>
            <Box>
               <p className="title" >Palestrantes</p>
               <div className="palestrantes-photos" >
                  <div className="photo" > <img alt="alf" src={alfredo} /> <span>Afredo</span> </div>
                  <div className="photo" > <img alt="alf" src={thiago} /> <span>Thiago do Couto</span> </div>
                  <div className="photo" ><img alt="alf" src={rodolfo} /> <span>Rodolfo</span> </div>
                  <div className="photo" > <img alt="alf" src={thiago} /> <span>Thiago do Couto</span> </div>



               </div>

            </Box>
         </section>
         <End >

         </End>
         <Footer />
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
      color: #4f4f4f;
      background-color: #fdfdfd;
      transition: background-color 0.3s;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border: none;
      width: auto;
      height: 30px;
      font-size: 25px;
      border-radius: 5px;
      cursor: pointer;
      font-family: 'Inconsolata', monospace;
      font-weight: 500;


}
button:hover{
   background-color: #f0f0f0;
    transition: 0.5s;
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
flex-direction: column;
background-image: url(${background2});
@media screen and (max-width: 600px) {
   #img-main{
    display: flex;
    align-self: center;
    width: 350px;
    height: 200px;
  }


}

.info{
p{
   font-family: 'Inconsolata', monospace;
      font-size: 40px;
      color: #fdfdfd;
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
  flex-wrap: wrap; 
   background-color: #fdfdfd;

   @media screen and (max-width: 600px)  {
      
      .info{
         p{
            font-size: 20px;
         }
      }
   }

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
  margin: 0px 0;
  background-color: #fdfdfd;
  padding-top: 50px;
  display: flex;
   flex-direction: column;
   flex-wrap: wrap;
  .palestrantes-photos{
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
   margin-bottom: 50px;
  .photo{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin: 0 50px;

   
   span{
   font-size: 15px;
   font-family: 'Inconsolata', monospace;
   color: #232323;
   font-weight: 700;
  }
  
   img{
      width: 140px;
      margin: 10px 0px;
      height: 140px;
      border-radius: 50%;
      max-width: 100%; /* Garante que a imagem não ultrapasse a largura do contêiner */
      max-height: 100%; 
      align-self: center;
      
   }

  }


  }


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
    cursor: pointer;
 }
 .title{
  font-size: 30px;
  font-family: 'Inconsolata', monospace;
  font-weight: 600;
  color:hsl(225, 72%, 47%, 100%); 
   padding-bottom: 20px;
}
 .sub-title{
    font-size: 22px;
    font-family: 'Inconsolata', monospace;
   padding-top: 12px;
        color: #6a6a6a;
    font-weight: 500;
    display: flex;
    line-height: 1.0;

 }
 ion-icon{
   margin-top: 1px;
   margin-right: 5px;
  
}

 p{
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    color: #232323;
    font-weight: 400;
    display: flex;
    line-height: 1.5;
    ;
 }
`


const End = styled.div`
width: 100%;
height: 400px;
background-color: #eee;


`
import styled, { ThemeProvider } from "styled-components"
import logo from "../assets/imgs/Frame.svg"
import logomini from "../assets/imgs/FrameMini.svg"
import logo3 from "../assets/imgs/logo.svg"
import axios from "axios"
import { Link, json } from "react-router-dom"
import { useNavigate } from "react-router"
import Header from "../components/Header"
import Table from "../components/Table"
import background from "../assets/imgs/background-image.png"
import background2 from "../assets/imgs/Fundo.png"
import { useRef, useState } from "react"
import DayMonday from "../components/weekdays/DayMonday"
import DayTuesday from "../components/weekdays/DayTuesday"
import DayWednesday from "../components/weekdays/DayWednesday"
import DayThursday from "../components/weekdays/DayThursday"
import DayFriday from "../components/weekdays/DayFriday"
import { useEffect } from "react"
import Footer from "../components/Footer"
import rodolfo from "../assets/imgs/palestrantes/rodolfo.jpg"
import thiago from "../assets/imgs/palestrantes/thiago.jpg"
import rogerio from "../assets/imgs/palestrantes/rogério.jpg"
import alfredo from "../assets/imgs/palestrantes/alfredo.jpg"
import jocimar from "../assets/imgs/palestrantes/jocimar.jpg"
import diana from "../assets/imgs/palestrantes/diana.jpg"
import vinicius from "../assets/imgs/palestrantes/vinicius.png"
import luciano from "../assets/imgs/palestrantes/luciano.png"







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

   const palestrantesScroll = useRef(null);

   const handleScrollPalestrantes = () => {
      const elementTop = palestrantesScroll.current.getBoundingClientRect().top;

      window.scrollTo({
         top: window.scrollY + elementTop - 100,
         behavior: 'smooth',
      });
   };

   const contatoScroll = useRef(null);

   const handleScrollContato = () => {
      const elementTop = contatoScroll.current.getBoundingClientRect().top;

      window.scrollTo({
         top: window.scrollY + elementTop - 100,
         behavior: 'smooth',
      });
   };


   return (
      <Style>
         <Header
            handleScrollSobre={handleScrollSobre}
            handleScrollCrono={handleScrollCrono}
            handleScrollContato={handleScrollContato}
            handleScrollPalestrantes={handleScrollPalestrantes}
         />
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
                  23/10/2023 – 27/10/2023 - 09:00 - 18:00 GMT-3
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


                           <Span
                              onClick={() => mondayBtn()}
                              className={mondayClicked ? 'btn-active' : 'btn-inactive'} disabled={mondayClicked} >
                              Segunda
                           </Span>


                        </p>
                     </div>

                     <div className="weekday">
                        <p className="date">

                           <Span
                              onClick={() => tuesdayBtn()}
                              className={tuesdayClicked ? 'btn-active' : 'btn-inactive'} disabled={tuesdayClicked} >
                              Terça
                           </Span>


                        </p>
                     </div>

                     <div className="weekday">
                        <p className="date">

                           <Span
                              onClick={() => wednesdayBtn()}
                              className={wednesdayClicked ? 'btn-active' : 'btn-inactive'} disabled={wednesdayClicked} >
                              Quarta
                           </Span>


                        </p>
                     </div>
                     <div className="weekday">
                        <p className="date">

                           <Span
                              onClick={() => thursdayBtn()}
                              className={thursdayClicked ? 'btn-active' : 'btn-inactive'} disabled={thursdayClicked} >
                              Quinta
                           </Span>


                        </p>
                     </div>
                     <div className="weekday">
                        <p className="date">

                           <Span
                              onClick={() => fridayBtn()}
                              className={fridayClicked ? 'btn-active' : 'btn-inactive'} disabled={fridayClicked} >
                              Sexta
                           </Span>


                        </p>
                     </div>
                  </div>
                  <div className="content" >




                  </div>
               </Cronogram>
               {mondayClicked ?
                  <DayMonday
                     nameP={"Rodolfo Peixoto"}
                     nameC={"Rodolfo Peixoto"}
                     titleP="Da Universidade ao Sonho da Liderança no Mercado Livre: Minha Jornada no Mundo da Tecnologia"
                     titleC=" Introdução Rápida ao Ruby e Rails API"
                     descP="Embarque em uma viagem inspiradora através da trajetória de um profissional que transformou paixão,
                      estratégia e determinação em uma carreira de sucesso no universo tecnológico. Nesta palestra, 
                      você conhecerá a história por trás da criação da Soul Code, as táticas e estratégias adotadas 
                      durante a vida universitária que foram cruciais para a formação acadêmica e os desafios
                      enfrentados ao longo da carreira.
                     "
                     descC="
                     Adentre o mundo vibrante da programação com Ruby e Rails API 
                     neste mini curso intensivo! Projetado para aqueles que desejam 
                     uma introdução concisa, mas abrangente, este curso cobre os fundamentos 
                     essenciais do Ruby, uma das linguagens de programação mais amigáveis
                      e versáteis e vamos mostrar alguns conteúdos mais avançados para 
                      que vocês possam estudar posteriormente.
                     "
                  /> : <></>}
               {tuesdayClicked ?
                  <DayTuesday
                     nameP={""}
                     nameC={"Luciano Rangel"}
                     titleP="--"
                     titleC="Utilizando Redes Neurais para auxiliar análises de exames"
                     descP=""
                     descC="A patologia anemia apresenta um risco de aumento de morbidades
                       e mortalidades, constituindo assim, um problema de saúde pública e que
                       se distribui de forma ampla entre a população. Sendo assim, o presente
                        minicurso tem como objetivo apresentar uma estratégia que consiga 
                        realizar análises dos exames que podem detectar anemia de maneira mais 
                        rápida e tendo possibilidade de precisão similar à que um profissional 
                        da saúde poderia ter, para isso, serão utilizadas técnicas de 
                        Inteligência Artificial, mais precisamente, as Redes Neurais Artificiais,
                        que tem como objetivo aprender e modelar relações entre entradas e saídas
                        de dados que são não-lineares e complexos; 
                        realizar generalizações e inferências; 
                        revelar relacionamentos, padrões e predições ocultas e modelar conjunto
                        de dados altamente voláteis (como dados de hemogramas) e variâncias 
                        necessárias para prever eventos raros de maneira rápida e precisa, 
                        tendo a possibilidade de ser aperfeiçoado continuamente.
                     "
                  /> : <></>}
               {wednesdayClicked ?
                  <DayWednesday
                     nameP="Vinicius"
                     nameC={"Diana de Sales"}
                     titleP="Introdução a Computação em Nuvem na AWS"
                     descP="A computação em nuvem representa uma revolução no 
                     mundo da tecnologia, oferecendo flexibilidade, escalabilidade e 
                     eficiência operacional. Ao migrar sistemas e armazenamento para a nuvem,
                      as organizações podem reduzir significativamente seus custos 
                      de infraestrutura, melhorar a colaboração, implementar soluções
                     mais ágeis e inovadoras, e atender às demandas dinâmicas do mercado
                     com rapidez. O curso oferece uma introdução na Computação em Nuvem, 
                     com foco especial no serviço Elastic Compute Cloud (EC2) 
                     da Amazon Web Services (AWS). Os participantes serão conduzidos
                     por uma jornada educacional que abrange desde os conceitos fundamentais
                     da computação em nuvem, criando e gerenciamento instâncias EC2 
                     na plataforma AWS.

                     "
                     titleC="Frameworks de UX"
                     descC=" Frameworks ou estruturas de design de experiência ajudam a 
                     tornar seu processo mais padronizado, descomplicado e escalável.
                      Vamos realizar um mini projeto e aplicar esse conceito na prática.
                     "
                  /> : <></>}
               {thursdayClicked ?
                  <DayThursday
                     nameP="Rogério Atem"
                     nameC={"Vinicius"}
                     titleP="O Polo de Inovação do EMBRAPII/IFFluminense"
                     descP="Negociação de Projetos, Desenvolvimento do Produto Inovador e Gestão da Propriedade Intelectual na Prática
                  Coordenador da Unidade EMBRAPII de Tecnologias para Produção Mais Limpa
                  "
                     titleC="Programação Distribuída com o OpenMPI
                     "
                     descC="Existem problemas computacionais que excedem a capacidade de 
                     processamento dos sistemas convencionais. Esses problemas demandam um
                      enorme poder de processamento que ultrapassa a capacidade de um único
                       dispositivo. Desta forma, a programação distribuída e o uso de clusters 
                       de computadores se destacam como uma solução viável. Este curso oferece 
                       uma introdução sobre a programação distribuída, com um foco especial no 
                       OpenMPI - um middleware amplamente reconhecido e utilizado no mercado. 
                       O OpenMPI se destaca ao possibilitar a distribuição eficiente da carga 
                       de processamento entre os nós de um cluster, permitindo uma execução mais
                        rápida e eficaz das tarefas computacionais.
                     "
                  /> : <></>}
               {fridayClicked ?
                  <DayFriday
                     nameP="Alfredo Neris"
                     nameC={"Jocimar Galante"}
                     titleP="Google Hacking"
                     titleC={" Desenvolvimento Front-end com Angular: Fundamentos e Práticas"}
                     descP=" A palestra explica conceitos básicos de Internet, o que é a técnica Google Hacking
                      e como utilizar os dorks para realizar testes de penetração. Para quem não conhece, Google Hacking é 
                      uma das formas mais simples para testar se seu site, servidor ou plataforma possui algum vazamento
                       de dados ou vulnerabilidade.Durante a palestra os comandos serão explicados e linhas de códigos serão organizadas 
                       para realizar buscas específicas.
                     "
                     descC="Você já se perguntou como criar interfaces web modernas,
                     responsivas e dinâmicas? O Angular é a resposta! Junte-se a nós neste emocionante minicurso,
                     onde mergulharemos fundo no universo do desenvolvimento front-end com Angular, uma das estruturas 
                     mais poderosas e amplamente adotadas para a criação de aplicativos web."
                  /> : <></>}

            </Box>
            <Box>
               <p className="title" ref={palestrantesScroll} >Palestrantes</p>
               <div className="palestrantes-photos" >
                  <div className="photo" > <img alt="alf" src={alfredo} /> <span>Alfredo Neris</span> </div>
                  <div className="photo" > <img alt="alf" src={thiago} /> <span>Thiago do Couto</span> </div>
                  <div className="photo" ><img alt="alf" src={rodolfo} /> <span>Rodolfo Peixoto</span> </div>
                  <div className="photo" > <img alt="alf" src={rogerio} /> <span>Rogério Atem</span> </div>
                  <div className="photo" > <img alt="alf" src={jocimar} /> <span>Jocimar Galante</span> </div>
                  <div className="photo" > <img alt="alf" src={diana} /> <span>Diana de Sales</span> </div>
                  <div className="photo" > <img alt="alf" src={luciano} /> <span>Luciano Rangel</span> </div>
                  <div className="photo" > <img alt="alf" src={vinicius} /> <span>Vinicius</span> </div>

               </div>

            </Box>
         </section>
         <End >
            <div className="align" >
               <div className="end"  >
                  <p className="title-end" ref={contatoScroll} >Contato</p>
                  <span>Restou alguma dúvida? Fale com a gente</span>
                  <span> E siga nossas redes sociais</span>
                  <p className="contato-info" ><ion-icon name="logo-whatsapp"></ion-icon> 22 99927-9652 (Juliana) </p>
                  <p className="contato-info" ><ion-icon name="logo-whatsapp"></ion-icon> 22  99255-8278 (Ricardo) </p>
                  <p className="contato-info" > <ion-icon name="logo-instagram"></ion-icon> <Link to={"https://www.instagram.com/sctiuenf/"} >  https://www.instagram.com/sctiuenf/ </Link> </p>
                  <p className="contato-info" ><ion-icon name="mail-outline"></ion-icon> sctiuenf@gmail.com</p>
               </div>
            </div>

         </End>
         <Footer />
      </Style>

   )

}
const Span = styled.div`
color: ${props => props.theme.dfColor};
background-color: ${props => props.theme.dfBack};


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
background-size: cover;

@media screen and (max-width: 600px) {
   #img-main{
    display: flex;
    align-self: center;
    width: 450px;
    height: 300px;
  }

  background-image: none;

}

.info{
p{
   font-family: 'Inconsolata', monospace;
      font-size: 45px;
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
  width: 100%;
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
  line-height: 1.8;

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
  font-size: 34px;
  font-family: 'Inconsolata', monospace;
  font-weight: 600;
  color:hsl(225, 72%, 47%, 100%); 
   padding-bottom: 20px;
}
 .sub-title{
    font-size: 28px;
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
    line-height: 1.8;
    ;
 }
`


const End = styled.div`
.align{
   width: 100%;
   max-width: 1100px;
  margin: 0px 0;
  padding-top: 50px;
 
}
width: 100vw;
height: 400px;
background-color: #eee;
display: flex;
align-items: center;
   flex-direction: column;
   flex-wrap: wrap;

   .end{
      span{
      font-family:'Roboto', sans-serif;
      color: #232323;
      font-size: 18px;

   }
   }

   .contato-info{
      font-family:'Roboto', sans-serif;
      font-size: 18px;
      margin: 20px;
      justify-content: center;
      align-items: center;
      ion-icon{
       margin-top: 5px;
       margin-right: 5px;
}
   }
.title-end{
  font-size: 35px;
  font-family: 'Inconsolata', monospace;
  font-weight: 600;
  color:hsl(225, 72%, 47%, 100%); 
   padding-bottom: 20px;
  
}



`
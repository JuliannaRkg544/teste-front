import styled from "styled-components";
import Container from "../styledComponents/Container";
import Header from "../components/Header"
import Table from "../components/Table";
import { useState, useEffect } from "react";
import MyDayCronogram from "../components/weekdays/MyDayCronogram"
import axios from "axios";
import background2 from "../assets/imgs/Fundo.png"
import Footer from "../components/Footer";

export default function UserLogged() {

   const [mondayClicked, setMondayClicked] = useState(false)
   const [tuesdayClicked, setTuesdayClicked] = useState(false)
   const [wednesdayClicked, setWednesdayClicked] = useState(false)
   const [thursdayClicked, setThursdayCliked] = useState(false)
   const [fridayClicked, setFridayCliked] = useState(false)
   const URL_GET_EVENTOS = "http://localhost:4000/events-get-segunda"
   const [segunda, setSegunda] = useState([])
   const [participantInfo, setParticipantInfo] = useState([])
   const [isClicked, setIsClicked] = useState(false);
   const [myMondayEvents, setMyMondayEvents] = useState([])
   const myMondayCourseTime = localStorage.getItem("my-monday-courseTime")
   const myMondayCourse = localStorage.getItem("my-monday-course")

   let idMonday

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
   /*
     const config = {
     headers:{
       "Authorization":`Bearer ${}`,
     }
   } */



   useEffect(() => {
      axios.get(URL_GET_EVENTOS)
         .then((res) => {
            console.log(res.data)
            setSegunda(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [])


   return (
      <Style  >
         <Header></Header>

         <h1 className="title" >Área do Usuário</h1>

         <Cronogram  >
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
            <MyDayCronogram
               title="monday"
               participantInfo={participantInfo}
               setParticipantInfo={setParticipantInfo}
               segunda={segunda}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               myMondayEvents={myMondayEvents}
               setMyMondayEvents={setMyMondayEvents}
            /> : <></>}
         {tuesdayClicked ?
            <MyDayCronogram
               title="tuesday"
               desc=""
            /> : <></>}
         {wednesdayClicked ?
            <MyDayCronogram
               title="wednesday"
               desc=""
            /> : <></>}
         {thursdayClicked ?
            <MyDayCronogram
               title="Quinta"
               desc=""
            /> : <></>}
         {fridayClicked ?
            <MyDayCronogram
               title="Sexta"
               desc=""
            /> : <></>}



         {/*
     essa rota só poderá ser liberada para os users que tiveram  pagamento confirmado pela 
     comissão.
     Como fazer esse controle?  
     */}
         <h2 className="sub-title" >Meu Cronograma</h2>
         <MyBox>
            <div className="day-info" >
               <p>Segunda  </p>
               <span className="general-info" >{myMondayCourse}</span>
               <div className="align-time">
                  <div className="time" >
                     <span className="general-info" >{myMondayCourseTime}:00am</span>
                  </div>
               </div>

            </div>
            <div className="line" ></div>
            <div className="day-info" >
               <p>Terça  </p>
               <span className="general-info" >{myMondayCourse}</span>
               <div className="align-time" >
                  <div className="time" >
                     <span className="general-info" >{myMondayCourseTime}:00am</span>
                  </div>
               </div>

            </div>
            <div className="line" ></div>
         </MyBox>
         <Footer />
      </Style >

   )

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
    margin-bottom: 20px;
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


const Style = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .title{
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #232323;
  margin-bottom: 30px;
 }

 .sub-title{
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    color: #6a6a6a;
    font-weight: 500;
    margin: 30px 0px;


 }
 .my-box{
  
    
 }
   `

const MyBox = styled.div`
    display: flex;
    justify-content:start;
    align-items: start;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid #e1e1e1 ;
        width: 600px;
    padding: 20px;
    margin-bottom: 50px;
    .align-time{
      display: flex;
      justify-content:end;
      width: 100%;
    }
    p{
      margin-right: 20px;
      font-family: 'Inconsolata', monospace;
      font-size: 22px;
        font-weight: 600;
        margin-right: 20px;
    }
    .day-info{
      display: flex;
     align-items: center;
     width: 100%;
     padding: 10px;
     justify-content: start
    
    }
    .general-info{
      font-family:'Roboto', sans-serif;
    }
    .line{
      width: 550px;
      height: 2px;
      margin: 10px 0;
      background-color: #f2f2f2;
    }

   .time{
      width: 200px;
      display: flex;
      justify-content: end;

   }
   `
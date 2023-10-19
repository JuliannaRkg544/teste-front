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
   const token = localStorage.getItem("token")
   const email = localStorage.getItem("email")
   const URL_GET_EVENTOS = "https://scti-back-teste-production-3e0d.up.railway.app/events-get-segunda"
   const URL_GET_EVENTOS_TERCA = "https://scti-back-teste-production-3e0d.up.railway.app/events-get-terca"
   //const URL_GET_EVENTOS_TERCA = "http://localhost:4000/events-get-terca"
   const URL_GET_EVENTOS_QUARTA = "https://scti-back-teste-production-3e0d.up.railway.app/events-get-quarta"
   //const URL_GET_EVENTOS_QUARTA = "http://localhost:4000/events-get-quarta"
   //const URL_GET_EVENTOS_QUINTA = "http://localhost:4000/events-get-quinta"
   const URL_GET_EVENTOS_QUINTA = "https://scti-back-teste-production-3e0d.up.railway.app/events-get-quinta"
   //const URL_GET_EVENTOS_SEXTA = "http://localhost:4000/events-get-sexta"
   const URL_GET_EVENTOS_SEXTA = "https://scti-back-teste-production-3e0d.up.railway.app/events-get-sexta"
   const URL_GET_MY_EVENTOS_SEG = `https://scti-back-teste-production-3e0d.up.railway.app/evento-minha-seunda`
   const URL_GET_MY_EVENTOS_TERCA = `https://scti-back-teste-production-3e0d.up.railway.app/evento-minha-terca`
   const URL_GET_MY_EVENTOS_QUA = `https://scti-back-teste-production-3e0d.up.railway.app/evento-minha-quarta`
   const URL_GET_MY_EVENTOS_QUI = `https://scti-back-teste-production-3e0d.up.railway.app/evento-minha-quinta`
   const URL_GET_MY_EVENTOS_SEX = `https://scti-back-teste-production-3e0d.up.railway.app/evento-minha-sexta`

   const [segunda, setSegunda] = useState([])
   const [terca, setTerca] = useState([])
   const [quarta, setQuarta] = useState([])
   const [quinta, setQuinta] = useState([])
   const [sexta, setSexta] = useState([])

   const [participantInfo, setParticipantInfo] = useState([])
   const [isClicked, setIsClicked] = useState(false);
   const [myMondayEvents, setMyMondayEvents] = useState([])
   const [myTuesdayEvents, setMyTuesdayEvents] = useState([])
   const [myWednesdayEvents, setMyWednesdayEvents] = useState([])
   const [myThursdayEvents, setMyThursdayEvents] = useState([])
   const [myFridayEvents, setMyFridayEvents] = useState([])
   const myMondayCourseTime = localStorage.getItem("my-monday-courseTime")
   const myMondayCourse = localStorage.getItem("my-monday-course")
   const myTuesdayCourseTime = localStorage.getItem("my-tuesday-courseTime")

   const [tuesdayCourse, setTuesdayCourse] = useState([])
   const [mondayCourse, setMondayCourse] = useState([])
   const [wednesdayCourse, setWednesdayCourse] = useState([])
   const [quintaCourse, setQuintaCourse] = useState([])
   const [sextaCourse, setSextaCourse] = useState([])



   //const myTuesdayCourse = localStorage.getItem("my-tuesday-course")
   const myThusrdaydayCourseTime = localStorage.getItem("my-thursday-courseTime")
   const myThursdayCourse = localStorage.getItem("my-thursday-course")
   const myWednesdayCourseTime = localStorage.getItem("my-wednesday-courseTime")
   const myWednesdayCourse = localStorage.getItem("my-wednesday-course")
   const myFridayCourseTime = localStorage.getItem("my-friday-courseTime")
   const myFridyayCourse = localStorage.getItem("my-friday-course")





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

   useEffect(() => {
      axios.get(URL_GET_EVENTOS_TERCA)
         .then((res) => {
            console.log(res.data)
            setTerca(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [])

   useEffect(() => {
      axios.get(URL_GET_EVENTOS_QUARTA)
         .then((res) => {
            console.log(res.data)
            setQuarta(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [])

   useEffect(() => {
      axios.get(URL_GET_EVENTOS_QUINTA)
         .then((res) => {
            console.log(res.data)
            setQuinta(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [])
   useEffect(() => {
      axios.get(URL_GET_EVENTOS_SEXTA)
         .then((res) => {
            console.log(res.data)
            setSexta(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [])


   useEffect(() => {
      const config = {
         headers: {
            "Authorization": `Bearer ${token}`,
         }
      }
      axios.get(URL_GET_MY_EVENTOS_TERCA, config)
         .then((res) => {
            console.log(res.data)
            setTuesdayCourse(res.data)
            console.log("teer, ", tuesdayCourse)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [participantInfo])

   useEffect(() => {
      const config = {
         headers: {
            "Authorization": `Bearer ${token}`,
         }
      }
      axios.get(URL_GET_MY_EVENTOS_SEG, config)
         .then((res) => {
            console.log(res.data)
            setMondayCourse(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [participantInfo])


   useEffect(() => {
      const config = {
         headers: {
            "Authorization": `Bearer ${token}`,
         }
      }
      axios.get(URL_GET_MY_EVENTOS_QUA, config)
         .then((res) => {
            console.log(res.data)
            setWednesdayCourse(res.data)
            console.log("qua ", wednesdayCourse)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [participantInfo])


   useEffect(() => {
      const config = {
         headers: {
            "Authorization": `Bearer ${token}`,
         }
      }
      axios.get(URL_GET_MY_EVENTOS_QUI, config)
         .then((res) => {
            console.log(res.data)
            setQuintaCourse(res.data)
            console.log("quint ", quintaCourse)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [participantInfo])


   useEffect(() => {
      const config = {
         headers: {
            "Authorization": `Bearer ${token}`,
         }
      }
      axios.get(URL_GET_MY_EVENTOS_SEX, config)
         .then((res) => {
            console.log(res.data)
            setSextaCourse(res.data)

         })
         .catch((err) => {
            console.log("deu erro", err.response);
            alert("Houve um erro: " + err.response.data + " :/ ");
         })
   }, [participantInfo])



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
               titleDay="segunda"
               participantInfo={participantInfo}
               setParticipantInfo={setParticipantInfo}
               weekday={segunda}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               myMondayEvents={myMondayEvents}
               setMyMondayEvents={setMyMondayEvents}
            /> : <></>}
         {tuesdayClicked ?
            <MyDayCronogram
               titleDay="terca"
               participantInfo={participantInfo}
               setParticipantInfo={setParticipantInfo}
               weekday={terca}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               myMondayEvents={myMondayEvents}
               setMyTuesdayEvents={setMyTuesdayEvents}
            /> : <></>}
         {wednesdayClicked ?
            <MyDayCronogram
               titleDay="quarta"
               participantInfo={participantInfo}
               setParticipantInfo={setParticipantInfo}
               weekday={quarta}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               myMondayEvents={myMondayEvents}
               setMyWednesdayEvents={setMyWednesdayEvents}
            /> : <></>}
         {thursdayClicked ?
            <MyDayCronogram
               titleDay="quinta"
               participantInfo={participantInfo}
               setParticipantInfo={setParticipantInfo}
               weekday={quinta}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               myMondayEvents={myMondayEvents}
               setMyThursdayEvents={setMyThursdayEvents}
            /> : <></>}
         {fridayClicked ?
            <MyDayCronogram
               titleDay="sexta"
               participantInfo={participantInfo}
               setParticipantInfo={setParticipantInfo}
               weekday={sexta}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               myMondayEvents={myMondayEvents}
               setMyFridayEvents={setMyFridayEvents}
            /> : <></>}



         {/*
     essa rota só poderá ser liberada para os users que tiveram  pagamento confirmado pela 
     comissão.
     Como fazer esse controle?  
     */}
         <h2 className="sub-title" >Meu Cronograma</h2>
         <MyBox>
            { }
            <div className="day-info" >
               <p>Segunda  </p>
               {mondayCourse.length > 0 ?
                  <span className="general-info" >{mondayCourse[0].course}</span>

                  :
                  <></>}
               <div className="align-time">
                  <div className="time" >
                     <span className="general-info" >09:00am</span>
                  </div>
               </div>

            </div>
            <div className="line" ></div>
            <div className="day-info" >
               <p>Terça  </p>
               {tuesdayCourse.length > 0 ?
                  <span className="general-info" >{tuesdayCourse[0].course} maior q 0 </span>

                  : <></>}
               <div className="align-time" >
                  <div className="time" >
                     <span className="general-info" >09:00am</span>
                  </div>
               </div>

            </div>
            <div className="line" ></div>
            <div className="day-info" >
               <p>Quarta  </p>
               {wednesdayCourse.length > 0 ?
                  <span className="general-info" >{wednesdayCourse[0].course}</span>

                  : <></>}
               <div className="align-time" >
                  <div className="time" >
                     <span className="general-info" >09:00am</span>
                  </div>
               </div>

            </div>
            <div className="line" ></div>

            <div className="day-info" >
               <p>Quinta  </p>
               {quintaCourse.length > 0 ?
                  <span className="general-info" >{quintaCourse[0].course}</span>

                  : <></>}
               <div className="align-time" >
                  <div className="time" >
                     <span className="general-info" >09:00am</span>
                  </div>
               </div>
            </div>
            <div className="line" ></div>
            <div className="day-info" >
               <p>Sexta  </p>
               {sextaCourse.length > 0 ?
                  <span className="general-info" >{sextaCourse[0].course}</span>

                  : <></>}
               <div className="align-time" >
                  <div className="time" >
                     <span className="general-info" >09:00am</span>
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
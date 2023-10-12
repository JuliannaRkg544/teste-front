import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import UserContext from "../Context/UserContext";
import LabelOpt from "../LabelOpt";

export default function DayCronogram({ titleDay, participantInfo, setParticipantInfo, weekday,
    isClicked, setIsClicked, setMyMondayEvents, setMyTuesdayEvents, setMyWednesdayEvents, setMyThursdayEvents, setMyFridayEvents }) {

    //const URL_PUT_EVENTOS = `https://scti-back-teste-production-3e0d.up.railway.app/events-alter-${titleDay}`
    const URL_PUT_EVENTOS = `http://localhost:4000/events-alter-${titleDay}`
    //const URL_PUT_EVENTOS_TERCA = "https://scti-back-teste-production-3e0d.up.railway.app/events-alter-terca"
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    const { user, setUser } = useContext(UserContext)

    let cont = 0;
    const URL_GET_PARTICIPANT = `https://scti-back-teste-production-3e0d.up.railway.app/get-one-participant/${email}`


    useEffect(() => {
        axios
            .get(URL_GET_PARTICIPANT)
            .then((res) => {
                console.log(res.data)
                setParticipantInfo(res.data)
                console.log(weekday)
            })
            .catch((err) => console.log(err.response))

    }, [])

    function getParticipantEventInfo(idDay) {
        //const URL_GET_MY_EVENTS = `https://scti-back-teste-production-3e0d.up.railway.app/events-get-segunda-user/${idMonday}`
        const URL_GET_MY_EVENTS = `http://localhost:4000/events-get-${titleDay}-user/${idDay}`
        console.log("idmonday ", idDay)
        axios
            .get(URL_GET_MY_EVENTS)
            .then((res) => {
                console.log(res.data)
                if (titleDay === "segunda") {
                    setMyMondayEvents(res.data)
                    localStorage.setItem("my-monday-course", res.data[0].course)
                    localStorage.setItem("my-monday-courseTime", res.data[0].timeCourse)
                }
                else if (titleDay === "terca") {
                    setMyTuesdayEvents(res.data)
                    localStorage.setItem("my-tuesday-course", res.data[0].course)
                    localStorage.setItem("my-tuesday-courseTime", res.data[0].timeCourse)
                }
                else if (titleDay === "quarta") {
                    setMyWednesdayEvents(res.data)
                    localStorage.setItem("my-wednesday-course", res.data[0].course)
                    localStorage.setItem("my-wednesday-courseTime", res.data[0].timeCourse)
                }
                else if (titleDay === "quinta") {
                    setMyThursdayEvents(res.data)
                    localStorage.setItem("my-thursday-course", res.data[0].course)
                    localStorage.setItem("my-thursday-courseTime", res.data[0].timeCourse)
                }
                else if (titleDay === "sexta") {
                    setMyFridayEvents(res.data)
                    localStorage.setItem("my-friday-course", res.data[0].course)
                    localStorage.setItem("my-friday-courseTime", res.data[0].timeCourse)
                }

            })
            .catch((err) => console.log(err.response))
    }



    function getParticipant() {
        console.log(email)
        axios
            .get(URL_GET_PARTICIPANT)
            .then((res) => {
                console.log(res.data)
                setParticipantInfo(res.data)
            })
            .catch((err) => console.log(err.response))
    }



    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }

    function handleCheckboxChange(id) {
        setDay(id, true)
        setIsClicked(!isClicked)
        console.log(id)
    };


    function setDay(id, isChecked) {
        let idDay
        if (titleDay === "segunda") {
            idDay = participantInfo[0].idMonday

        }
        else if (titleDay === "terca") {
            idDay = participantInfo[0].idtuesday

        }
        else if (titleDay === "quarta") {
            idDay = participantInfo[0].idwednesday


        }
        else if (titleDay === "quinta") {
            idDay = participantInfo[0].idthursday

        }
        else if (titleDay === "sexta") {
            idDay = participantInfo[0].idfriday

        }
        console.log("idday ", idDay)
        const body = {
            id: id,
            email: user,
            isBool: isChecked,
            idMondayNullability: idDay

        }
        axios.put(URL_PUT_EVENTOS, body, config)
            .then((res) => {
                console.log(res.data)
                getParticipant()
                getParticipantEventInfo(id)
                //getParticipantEventInfoTerca(id)
            })
            .catch((err) => {
                console.log("deu erro", err.response);
                alert("Houve um erro: " + err.response.data + " :/ ");
            })
    }

    return (
        <Style>
            <div className="evento" >
                {weekday.map((el, index) => {
                    return (
                        <>
                            <div className="palestra" >
                                <p>Palestra:  </p>
                                <span className="general-info" > {el.lecture} </span>
                                <div className="palestra-info" >
                                    <span className="general-info" > {el.timeLecture}:00am</span>
                                    <span className="mini-title"> com: {el.speakerLecture} </span>
                                </div>
                            </div>
                            <div className="line" ></div>

                            <div className="minicurso" >
                                <p>Minicurso</p>
                                <div className="opt" >
                                    <span> {el.course} </span>
                                    <label>
                                        <input
                                            type="radio"
                                            name="opt"
                                            onChange={() => handleCheckboxChange(el.id)}
                                        />
                                    </label>
                                </div>

                                <div className="minicurso-info" >
                                    <span className="general-info" >  {el.timeCourse}:00am</span>
                                    <span className="mini-title"> {el.speakerCourse} </span>
                                    <div className="line" ></div>
                                </div>


                            </div>
                        </>
                    )
                })}


            </div>





        </Style>
    )
}

const Style = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 600px;
.line{
      width: 500px;
      height: 2px;
      background-color: #f2f2f2;
      margin: 10px 0;
    }
.evento{
    display: flex;
    justify-content:start;
    align-items: start;
    width: 600px;
    flex-direction: column;
    padding: 15px 50px;
    border-radius: 10px;
    border: 2px solid #e1e1e1 ;
    .general-info{
      font-family:'Roboto', sans-serif;
    }
    
}
.palestra-info, .minicurso-info{
    display: flex;
    flex-direction: column;

    align-items: end;
    width: 100%;
}
.palestra,.minicurso{
    display: flex;
    width: 100%;
   align-items: center;
   flex-wrap: wrap;
    p{
        font-family: 'Inconsolata', monospace;

        font-size: 22px;
        font-weight: 600;
        margin-right: 20px;

    }

}
.mini-title{
    font-size: 18px;
    font-weight: 600;
   
}

span{
    font-family: 'Open Sans', sans-serif;

}
`
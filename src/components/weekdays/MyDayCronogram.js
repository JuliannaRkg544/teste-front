import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import UserContext from "../Context/UserContext";
import LabelOpt from "../LabelOpt";

export default function DayCronogram({ title, participantInfo, setParticipantInfo, segunda, isClicked, setIsClicked, myMondayEvents, setMyMondayEvents }) {
    const URL_PUT_EVENTOS = "http://localhost:4000/events-alter-segunda"
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    const { user, setUser } = useContext(UserContext)

    let cont = 0;
    const URL_GET_PARTICIPANT = `http://localhost:4000/get-one-participant/${email}`


    useEffect(() => {
        axios
            .get(URL_GET_PARTICIPANT)
            .then((res) => {
                console.log(res.data)
                setParticipantInfo(res.data)
            })
            .catch((err) => console.log(err.response))

    }, [])

    function getParticipantEventInfo(idMonday) {
        const URL_GET_MY_EVENTS = `http://localhost:4000/events-get-segunda-user/${idMonday}`
        console.log(idMonday)
        axios
            .get(URL_GET_MY_EVENTS)
            .then((res) => {
                console.log(res.data)
                setMyMondayEvents(res.data)
                localStorage.setItem("my-monday-course", res.data[0].course)
                localStorage.setItem("my-monday-courseTime", res.data[0].timeCourse)

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
        const body = {
            id: id,
            email: user,
            isBool: isChecked,
            idMondayNullability: participantInfo[0].idMonday

        }
        axios.put(URL_PUT_EVENTOS, body, config)
            .then((res) => {
                console.log(res.data)
                getParticipant()
                getParticipantEventInfo(id)
            })
            .catch((err) => {
                console.log("deu erro", err.response);
                alert("Houve um erro: " + err.response.data + " :/ ");
            })
    }

    return (
        <Style>
            <div className="evento" >
                {segunda.map((el, index) => {
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
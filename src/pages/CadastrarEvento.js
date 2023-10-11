import { useState } from "react";
import Header from "../components/Header";
import styled, { ThemeProvider } from "styled-components"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function CadastrarEvento() {
    const [course, setCourse] = useState("");
    const [time, setTime] = useState("")
    const [lecture, setLecture] = useState("")
    const [speakerCourse, setSpeakerCourse] = useState("")
    const [speakerLecture, setSpeakerLecture] = useState("")
    const [timeLecture, setTimeLecture] = useState("")
    const [timeCourse, setTimeCourse] = useState("")
    const [qtd, setQtd] = useState(0)
    const { credential } = useParams()
    const navigate = useNavigate()
    const [day, setDay] = useState("")

    //const URL_CADASTRAR_EVENTO = `https://scti-back-teste-production-3e0d.up.railway.app/evento-cadastar-${day}`
    const URL_CADASTRAR_EVENTO = `http://localhost:4000/evento-cadastar-${day}`
    function verifyCredential() {
        if (credential !== "scti" || !credential) {
            alert("oops, parece que vc não deveria estar aqui")
            navigate("/")
        }
    }
    function submmitEvent() {
        const body = {
            course: course,
            speakerCourse: speakerCourse,
            lecture: lecture,
            speakerLecture: speakerLecture,
            timeLecture: timeLecture,
            timeCourse: timeCourse,
            qtd: parseInt(qtd)

        }
        axios.post(URL_CADASTRAR_EVENTO, body)
            .then((res) => {
                console.log(res.data)
                alert("evento cadastrado")

            })
            .catch((err) => {
                console.log(err.response)
                alert("foi não")
            })
    }

    function handleCheckboxChange(day) {
        console.log("day ", day)
        console.log("url day ", URL_CADASTRAR_EVENTO)
        setDay(day)


    };
    return (
        <Style>
            <Header />

            <h1>Cadastrar Evento</h1>
            <h1>Selecione o dia:</h1>
            <label> segunda
                <input
                    type="radio"
                    name="opt"
                    onChange={() => handleCheckboxChange("segunda")}
                />
            </label>
            <label> terça
                <input
                    type="radio"
                    name="opt"
                    onChange={() => handleCheckboxChange("terca")}
                />
            </label>
            <input
                type="text"
                placeholder="Nome do curso"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="Nome do palestrante do curso"
                value={speakerCourse}
                onChange={(e) => setSpeakerCourse(e.target.value)}
            ></input>

            <input
                type="text"
                placeholder="Nome da palestra"
                value={lecture}
                onChange={(e) => setLecture(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="Nome do palestrante"
                value={speakerLecture}
                onChange={(e) => setSpeakerLecture(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="hora da palestra"
                value={timeLecture}
                onChange={(e) => setTimeLecture(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="hora do minicurso"
                value={timeCourse}
                onChange={(e) => setTimeCourse(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="numero de vagas"
                value={qtd}
                onChange={(e) => setQtd(e.target.value)}
            ></input>
            <button onClick={() => submmitEvent()} >{"Cadastrar"} </button>

        </Style>)
}



const Style = styled.div`
section{
    width: auto;
}
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
justify-content: center;
margin-top: 80px;


`

import axios from "axios"
import { useEffect, useState } from "react";
import ParticipantsGrade from "../components/ParticipantsGrade";
import Loading from "../components/Loading";
import Header from "../components/Header";
import UserContext from "../components/Context/UserContext";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Admin() {
    const [participants, setParticipants] = useState([])
    const [control, setControl] = useState(false)
    const URL_GET_ALL_USER = `${process.env.REACT_APP_URL}/user-all`
    const URL_RELEASE_USER = `${process.env.REACT_APP_URL}/user-release-access`
    const URL_DENY_USER = `${process.env.REACT_APP_URL}/user-deny-access`
    const { user, setUser } = useContext(UserContext)
    const { credential } = useParams();
    const navigate = useNavigate()
    const adminCredential = process.env.CREDENTIAL

    function verifyCredential() {
        if (credential !== "scti" || !credential) {
            alert("oops, parece que vc não deveria estar aqui")
            navigate("/")
        }
    }
    verifyCredential()

    useEffect(() => {
        axios.get(URL_GET_ALL_USER)
            .then((res) => {
                const { data } = res;
                console.log(data)
                setParticipants(data)

            })
            .catch((err) => {
                console.log("deu erro", err.response);

            })
    }, [control])

    function releaseAccess(id) {

        const body = {
            id: id
        }

        axios.put(URL_RELEASE_USER, body)
            .then((res) => {
                console.log(res.data)
                alert("liberado")
                setControl(!control)

            })
            .catch((err) => {
                console.log("deu erro no console", err)
            })
    }
    function denyAccess(id) {
        const body = {
            id: id
        }

        axios.put(URL_DENY_USER, body)
            .then((res) => {
                console.log(res.data)
                alert('negado')
                setControl(!control)

            })
            .catch((err) => {
                console.log("deu erro no console", err)
            })
    }



    if (participants.length > 0) {

        return (<>
            {/* <Header/>*/}

            <h1 style={{ marginTop: 80 }} > Participantes </h1>
            {participants.map((el, i) => {
                return <ParticipantsGrade>
                    <div className="blocos" > {el.id} </div>
                    <div className="blocos" > {el.name} </div>
                    <div className="blocos" > {el.email} </div>
                    <div className="blocos"  > {el.isPaid ? "pago" : "não pago"} </div>
                    <div className="blocos liberar" onClick={() => releaseAccess(el.id)} > Liberar </div>
                    <div className="blocos negar" onClick={() => denyAccess(el.id)} > Negar </div>

                </ParticipantsGrade>
            })}</>)

    } else return (<Loading />)





    {/*essa rota deverá ter acesso aos nomes de todos os participantes inscritos
    bem como seu stts de compra do ingresso
    uma vez confirmada os organizadores deverão liberar o acesso do participante 
    para que esse possa se inscrever em nossos minicursos
    isso será feito através de um campo isPaid, um booleano que começa sendo nullo
    e uma vvez que a organização recebe o comprovante, torna-se true*/}

}
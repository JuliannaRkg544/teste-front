import axios from "axios"
import { useEffect, useState } from "react";
import ParticipantsGrade from "../components/ParticipantsGrade";
import Loading from "../components/Loading";
import Header from "../components/Header";

export default function Admin(){
    const [participants, setParticipants] = useState([])

    const URL_GET = "http://localhost:4000/getAll"
   useEffect(()=>{ 
    axios.get(URL_GET)
    .then((res)=>{
        const { data } = res;
        console.log(data)
        setParticipants(data)
        
    })
    .catch((err)=>{
        console.log("deu erro", err.response);

    })
 } ,[])

 if (participants.length>0){

    return( <> 
     {/* <Header/>*/} 
    
   <h1  style={{marginTop:80}} > Participantes </h1>
    {participants.map((el,i)=>{
       return <ParticipantsGrade>
       
        <div className="blocos" > {el.name} </div>
        <div className="blocos" > {el.email} </div>
        <div className="blocos"  > {el.isPaid===null? "não pago":"pago"} </div>
        <div className="blocos liberar" > Liberar </div>
        
        </ParticipantsGrade>
    })}</>)
   
 } else return( <Loading/> )
  



   
    {/*essa rota deverá ter acesso aos nomes de todos os participantes inscritos
    bem como seu stts de compra do ingresso
    uma vez confirmada os organizadores deverão liberar o acesso do participante 
    para que esse possa se inscrever em nossos minicursos
    isso será feito através de um campo isPaid, um booleano que começa sendo nullo
    e uma vvez que a organização recebe o comprovante, torna-se true*/}
 
}
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"
import { Rigth } from "../styledComponents/Container";


export default function Logup() {
  /*
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false)

 

  const URL_POST = `${process.env.REACT_APP_API_URL}/login`
  const body = {
    email: email,
    password: password,
  };

  function login(event) {
    event.preventDefault();
    setDisabled(true)

    axios
      .post(URL_POST, body)
      .then((response) => {
        const { data } = response;
        console.log(data)
        setUser(data)
        localStorage.setItem("token", data.token)

        navigate("/pets")
      })
      .catch((err) => {
        console.log("deu erro", err.response);
        alert(err.response.statusText);
        setDisabled(false)
      });
  } */

  return ( 
    <Container>
      <Rigth>
        <Link to={"/"}> 
        <img src={logo} />
        </Link>
        <input
          type="nome"
          placeholder="Nome"
         
        /*  onChange={(e) => setPassword(e.target.value)}*/
        ></input>
        <input
          type="email"
          placeholder="Email"
       
         /* onChange={(e) => setEmail(e.target.value)}*/
        ></input>
        
         <input
          type="password"
          placeholder="Senha"
         
        /*  onChange={(e) => setPassword(e.target.value)}*/
        ></input>
         <input
          type="confirmPassword"
          placeholder="Confirmar Senha"
         
        /*  onChange={(e) => setPassword(e.target.value)}*/
        ></input>
        <button  >{ "Cadastrar"} </button>
        <Link to={"/login"}>
          <span>Ja tem conta? Entre</span>
        </Link>
      </Rigth>
    </Container>
  );
}


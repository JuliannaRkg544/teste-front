import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import { Rigth } from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"
import UserContext from "../components/Context/UserContext";
import Loading from "../components/Loading";
import MiniLoading from "./MiniLoading";
import background2 from "../assets/imgs/Fundo.png"
import Header from "../components/Header";



export default function Login() {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false)



  const URL_LOGIN = `scti-back-teste-production-3e0d.up.railway.app/login`


  const body = {
    email: email,
    password: password,
  };

  function login(event) {
    event.preventDefault();

    setDisabled(true)


    axios
      .post(URL_LOGIN, body)
      .then((response) => {
        console.log(response.data)
        //agr seria o momento de usar o contexto
        setUser(body.email)
        localStorage.setItem("token", response.data)
        localStorage.setItem("email", body.email)
        navigate("/user")
      })
      .catch((err) => {
        console.log("deu erro", err);
        alert("Houve um erro: " + err.response.data + " :/ ");
        setDisabled(false)
      });
  }

  return (
    <Container  >
      <Rigth >
        <Link to={"/"} >
          <img src={logo} />
        </Link>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={login}>{!disabled ? "Entrar" : <MiniLoading />} </button>
        <Link to={"/checkout"}>
          <span>Não tem conta? Cadastre-se</span>
        </Link>
        <Link to={"/senha"}>
          <span>Esqueci minha senha</span>
        </Link>
      </Rigth>
    </Container>
  );
}


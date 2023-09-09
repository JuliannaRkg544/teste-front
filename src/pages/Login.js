import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import { Rigth } from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"
import UserContext from "../components/Context/UserContext";
import Loading from "../components/Loading";
import MiniLoading from "./MiniLoading";


export default function Login() {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false)



  const URL_LOGIN = `http://localhost:4000/login`
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
        const { data } = response;
        console.log(data)
        //agr seria o momento de usar o contexto
        setUser(data[0])
        navigate("/user")
      })
      .catch((err) => {
        console.log("deu erro", err.response);
        alert("Houve um erro: " + err.response.data + " :/ ");
        setDisabled(false)
      });
  }

  return (
    <Container>
      <Rigth>
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
      </Rigth>
    </Container>
  );
}


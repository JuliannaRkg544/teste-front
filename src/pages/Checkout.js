import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import { Rigth } from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"
import MiniLoading from "./MiniLoading";


export default function Checkout() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setPasswordConfirmation] = useState("");
  const [disabled, setDisabled] = useState(false)


  const URL_SIGNUP = `${process.env.REACT_APP_URL}/signup`
  const body = {
    name: name,
    email: email,
    password: password,
  };

  const navigate = useNavigate();
  function confirmPass() {
    if (password !== confirPassword) {
      console.log(password, confirPassword)
      return alert("senhas não conferem")
    }
    signUser()
  }
  function signUser(event) {
    setDisabled(true)
    axios
      .post(URL_SIGNUP, body)
      .then((response) => {
        const { data } = response;
        console.log(data)
        console.log("hello")
        navigate("/checkout-payment");

      })
      .catch((err) => {
        console.log("deu erro", err.response);
        alert("Houve um erro: " + err.response.data + " :/ ");
        setDisabled(false)
      });
  }
  return (<>
    <Container>
      <Rigth>
        <Link to={"/"} >
          <img src={logo} />
        </Link>
        <form>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirPassword}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
        </form>
        <button onClick={confirmPass} >{!disabled ? "Próximo" : <MiniLoading />} </button>
        <Link to={"/login"}>Já é cadastrado? Entre</Link>
      </Rigth>
    </Container>
  </>)

}


import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import { Rigth } from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"


export default function Checkout(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const URL_POST = `${process.env.REACT_APP_API_URL}/signuser`
  const URL_POST = "http://localhost:4000/signuser"
  const body = {
    name: name,
    email: email,
    password: password,
  };

  const navigate = useNavigate();

  function signUser(event) {
    event.preventDefault()
    axios
      .post(URL_POST, body)
      .then((response) => {
        const { data } = response;
        console.log(data)
        console.log("hello")
        navigate("/checkout-payment");
       
      })
      .catch((err) => {
        console.log("deu erro", err.response);
        alert("Houve um erro, revise os dados")
      });
    }
    return(<>
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
        ></input> 
        </form>
      <button onClick={signUser} >{ "Próximo"} </button> 
      <Link to={"/login"}>Já é cadastrado? Entre</Link>
      </Rigth>
    </Container>    
    </>)
    
}


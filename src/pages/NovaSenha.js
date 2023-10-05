import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"
import { Rigth } from "../styledComponents/Container";


export default function NovaSenha() {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [newPass, setNewPass] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false)



    const URL = `https://scti-back-teste-production-3e0d.up.railway.app/trocar-senha`
    const body = {
        email: email,
        newPass: password,
    };

    function confirmPass() {
        if (password !== newPass) {
            console.log(password, newPass)
            return alert("senhas não conferem")
        }
        alterarSenha()
    }
    function alterarSenha() {
        setDisabled(true)

        axios
            .put(URL, body)
            .then((response) => {
                const { data } = response;
                console.log(data)
                alert("Senha Alterada com sucesso")
                navigate("/login")
            })
            .catch((err) => {
                console.log("deu erro", err.response);
                alert(err.response.data);
                setDisabled(false)
            });
    }

    return (
        <Container>
            <Rigth>
                <Link to={"/"}>
                    <img src={logo} />
                </Link>
                <input
                    type="email"
                    placeholder="email cadastrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>

                <input
                    type="password"
                    placeholder="Nova Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                    type="confirmPassword"
                    placeholder="Confirmar Senha"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                ></input>
                <button onClick={() => confirmPass()} >{"Confirmar"} </button>
                <Link to={"/login"}>
                    <span>Ja tem conta? Entre</span>
                </Link>
            </Rigth>
        </Container>
    );
}


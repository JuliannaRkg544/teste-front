import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../styledComponents/Container";
import { Rigth } from "../styledComponents/Container";
import logo from "../assets/imgs/Frame.svg"
import styled from "styled-components";
import Loading from "../components/Loading";
import LoadingPage from "./MiniLoading";
import ModalS from "./ModalS";


export default function CheckoutPayment() {

  const [pagamento, setPagamento] = useState('');
  const [enviado, setEnviado] = useState(false)

  const handlePagamentoChange = (event) => {
    setPagamento(event.target.value);
  };
  return (<>
    <Container>
      <Rigth>
        <Link to={"/"} >
          <img src={logo} />
        </Link>
        <Pagamaneto>
          <form>
            <p>Escolha a forma de pagamento:</p>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="pix"
                checked={pagamento === 'pix'}
                onChange={handlePagamentoChange}
              />
              Pix
            </label>
            <br />
            {pagamento === 'pix' ?
              <p>pixzinho</p>

              : <></>}
            <label>
              <input
                type="radio"
                name="pagamento"
                value="boleto"
                checked={pagamento === 'boleto'}
                onChange={handlePagamentoChange}
              />
              Boleto Bancário
            </label>
            <br />

            {pagamento === 'boleto' ?
              <p>boletinho</p>

              : <></>}

          </form>
        </Pagamaneto>
        <button onClick={() => { setEnviado(true) }}  >{"Confirmar"} </button>

        {enviado ? <ModalS enviado={enviado} setEnviado={setEnviado} /> : <></>}
      </Rigth>
    </Container>
  </>)

}

const Pagamaneto = styled.div`
form{
    font-family:'Roboto', sans-serif;
}
p{
    color: #696969;
    font-size: 20px;
}
label{
    color: green;
    line-height: 22px;
}

input[name="pagamento"] {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    }

`
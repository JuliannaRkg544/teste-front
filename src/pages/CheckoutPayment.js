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
import pix from "../assets/imgs/qrcode.png"



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
              <img src={pix} />

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
              <p>26090955146004916107220800000000395110000005500</p>

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
img{
  width: 200px;
  height: 200px;
}
p{
    color: #696969;
    font-size: 20px;
}
label{
    line-height: 22px;
}

input[name="pagamento"] {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    }

`
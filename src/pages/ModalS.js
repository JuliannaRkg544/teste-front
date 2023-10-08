import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

const numero = "5522999279652";

let mensagem = `Olá, gostaria de avisar que já comprei meu ingresso
`;


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

  },
};

const mystyle = {
  color: "#000",
  lineHeigth: "1.5",
  fontSize: "22px",
  fontFamily: `'Roboto', sans-serif;`
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function ModalS({ enviado, setEnviado }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setEnviado(true);
  }



  function closeModal() {
    setEnviado(false);
  }
  function montaMensagemWhatsApp() {
    console.log("hello")

    mensagem = encodeURIComponent(mensagem);

    chamaNoZap()

  }
  function chamaNoZap() {
    window.open(`https://wa.me/${numero}?text=${mensagem}`)
  }

  return (
    <div>
      <Modal
        isOpen={enviado}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={mystyle}>Olá,</h2>
        <div>Você acabou de adquirir um ingresso para 13º SCTI. Entre em contato com um de nossos organizadores para confirmar seu pagamento e liberar seu acesso já!</div>
        <BtnStyle>
          <button onClick={montaMensagemWhatsApp} > Avisar que está pago </button>
          <button onClick={closeModal}>Fechar</button>
        </BtnStyle>
      </Modal>
    </div>
  );
}


const BtnStyle = styled.div`
display: flex;
justify-content: start;
align-items: start;
button{

      width: 180px;
      height: 40px;
      background-color: #FBB040;
      border-radius: 50px;
      border-style: none;

      margin: 10px 5px;
      color: #fff;
      font-family:'Roboto', sans-serif;
      box-shadow: 2px 2px 2px  #ccc;
      cursor: pointer;
   
    }
`
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function ModalS({ enviado, setEnviado }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setEnviado(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <div>Muito obrigada, entre em contato com um de nossos organizadores para liberar seu acesso</div>
        <button onClick={montaMensagemWhatsApp} > avisar que está pago </button>
        <button onClick={closeModal}>fechar</button>
      </Modal>
    </div>
  );
}

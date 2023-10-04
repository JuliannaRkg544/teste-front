import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Success from "../pages/Success";
import Fail from "../pages/Fail";
import Login from "../pages/Login";
import UserLogged from "../pages/UserLogged";
import Logup from "../pages/Logup"
import CheckoutPayment from "../pages/CheckoutPayment";
import Checkout from "../pages/Checkout";
import LoadingPage from "../pages/MiniLoading";
import Admin from "../pages/Admin";
import { useContext, useState } from "react";
import UserContext from "./Context/UserContext";
import CadastrarEvento from "../pages/CadastrarEvento";
import NovaSenha from "../pages/NovaSenha";
import Footer from "./Footer";
function App() {
  const [user, setUser] = useState("");


  return (
    <UserContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logup" element={<Logup />} />
          <Route path='/user' element={<UserLogged />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/liberar-user/:credential" element={<Admin />} />
          <Route path="/checkout-payment" element={<CheckoutPayment />} />
          <Route path="/cadastrar-evento/:credential" element={<CadastrarEvento />} />
          <Route path="/senha" element={<NovaSenha />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;

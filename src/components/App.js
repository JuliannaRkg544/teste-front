import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Success from "../pages/Success";
import Fail from "../pages/Fail";
import Login from "../pages/Login";
import UserLogged from "../pages/UserLogged";
import Logup from "../pages/Logup"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/fail" element={<Fail/>} />
        <Route path= "/login" element={<Login/>}/>
        <Route path="/logup" element={<Logup/>}/>
        <Route path= '/user' element={<UserLogged/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

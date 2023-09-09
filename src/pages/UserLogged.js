import styled from "styled-components";
import Container from "../styledComponents/Container";
import Header from "../components/Header"
import Table from "../components/Table";
import { useState } from "react";
import MyDayCronogram from "../components/weekdays/MyDayCronogram"
export default function UserLogged(){

    const [mondayClicked, setMondayClicked] = useState(false)
    const [tuesdayClicked, setTuesdayClicked] = useState(false)
    const [wednesdayClicked, setWednesdayClicked] = useState(false)
    const [thursdayClicked, setThursdayCliked] = useState(false) 
    const [fridayClicked, setFridayCliked] = useState(false)

    function mondayBtn() {
        setMondayClicked(true)
        setTuesdayClicked(false)
        setWednesdayClicked(false)
        setThursdayCliked(false)
        setFridayCliked(false)
  
     }
     function tuesdayBtn() {
        setTuesdayClicked(true)
        setMondayClicked(false)
        setWednesdayClicked(false)
        setThursdayCliked(false)
        setFridayCliked(false)
  
     }
     function wednesdayBtn() {
        setWednesdayClicked(true)
        setTuesdayClicked(false)
        setMondayClicked(false)
        setThursdayCliked(false)
        setFridayCliked(false)
  
     }
     function thursdayBtn() {
        setThursdayCliked(true)
        setWednesdayClicked(false)
        setTuesdayClicked(false)
        setMondayClicked(false)
        setFridayCliked(false)
  
     }
  
     function fridayBtn() {
        setFridayCliked(true)
        setWednesdayClicked(false)
        setTuesdayClicked(false)
        setMondayClicked(false)
        setThursdayCliked(false)
  
     }


    return(
    <Style>
        <Header></Header>
   
        <h1 className="title" >Área do Usuário</h1>

  <Cronogram>
                  <div className="days">

                     <div className="weekday">
                        <p className="date"  >


                           <button
                              onClick={() => mondayBtn()}
                              className={mondayClicked ? 'btn-active' : 'btn-inactive'} disabled={mondayClicked} >
                              Segunda
                           </button>


                        </p>
                     </div>

                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => tuesdayBtn()}
                              className={tuesdayClicked ? 'btn-active' : 'btn-inactive'} disabled={tuesdayClicked} >
                              Terça
                           </button>


                        </p>
                     </div>

                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => wednesdayBtn()}
                              className={wednesdayClicked ? 'btn-active' : 'btn-inactive'} disabled={wednesdayClicked} >
                              Quarta
                           </button>


                        </p>
                     </div>
                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => thursdayBtn()}
                              className={thursdayClicked ? 'btn-active' : 'btn-inactive'} disabled={thursdayClicked} >
                              Quinta
                           </button>


                        </p>
                     </div>
                     <div className="weekday">
                        <p className="date">

                           <button
                              onClick={() => fridayBtn()}
                              className={fridayClicked ? 'btn-active' : 'btn-inactive'} disabled={fridayClicked} >
                              Sexta
                           </button>


                        </p>
                     </div>
                  </div>
                  <div className="content" >




                  </div>
               </Cronogram>

            
            
               {mondayClicked ?
                  <MyDayCronogram
                     title="monday"
                     desc=""
                  /> : <></>}
               {tuesdayClicked ?
                  <MyDayCronogram
                     title="tuesday"
                     desc=""
                  /> : <></>}
               {wednesdayClicked ?
                  <MyDayCronogram
                     title="wednesday"
                     desc=""
                  /> : <></>}
                   {thursdayClicked ?
                  <MyDayCronogram
                     title="Quinta"
                     desc=""
                  /> : <></>}
                   {fridayClicked ?
                  <MyDayCronogram
                     title="Sexta"
                     desc=""
                  /> : <></>}

            
     
     {/*
     essa rota só poderá ser liberada para os users que tiveram  pagamento confirmado pela 
     comissão.
     Como fazer esse controle?  
     */}
    <h2 className="sub-title" >Meu Cronograma</h2>
    

 
    
    </Style>)
    
}


const Cronogram = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 100px;
.days{
    display: flex;
    flex-direction: row;
    
   
}
.weekday{
    margin-right: 10px; 
    button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border: none;
      width: auto;
      height: 30px;
      font-size: 20px;
      border-radius: 5px;
      cursor: pointer;

}
}

.btn-active{
   background-color: #eee;
   color: hsl(225, 72%, 47%, 100%);
}
.btn-inactive{
   background-color: #fff;
   color: hsl(225, 72%, 47%, 100%);}
`


const Style = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  .title{
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #232323;
 }
 .sub-title{
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    color: #6a6a6a;
    font-weight: 500;

 }
   `
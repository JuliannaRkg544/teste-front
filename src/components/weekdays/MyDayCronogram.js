import { useState } from "react";
import styled from "styled-components"

export default function DayCronogram({ title, desc }) {
    const [isChecked, setIsChecked] = useState(false);
     const handleCheckboxChange = () => {
          setIsChecked(!isChecked);
        };
      
    return (
        <Style>
            <div className="palestras" >
                <p className="title">{title}</p>
                <span>Now here you go again, you say you want your freedom
                    Well, who am I to keep you down?
                    It's only right that you should play the way you feel it
                    But listen carefully to the sound of your loneliness
                    Like a heartbeat, drives you mad
                    In the stillness of remembering what you had
                    And what you lost
                    And what you had
                    And what you lost</span>
            <p className="title">Minicusro</p>
            <div className="minicurso" >
                <span>Thunder only happen when its raining</span>
            <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
            </div>
            

            </div>
            

            </Style>
    )
}

const Style = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 600px;

.palestras{
    display: flex;
    justify-content:start;
   
    align-items: start;
    flex-direction: column;
    padding: 15px 80px;
    border-radius: 10px;
    border: solid 2px #f5f5f5 ;
    
}
.title{
    font-size: 18px;
   
}
.minicurso{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
span{
    font-family: 'Open Sans', sans-serif;

}
`
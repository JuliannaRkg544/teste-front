import styled from "styled-components"

export default function DayCronogram({ title, desc }) {
    return (
        <Style>
            <div className="palestras" >
                <p className="title">{title}</p>
                <div className="align-line" >
                    <span>Now here you go again, you say you want your freedom
                        Well, who am I to keep you down?
                        It's only right that you should play the way you feel it
                        But listen carefully to the sound of your loneliness
                        Like a heartbeat, drives you mad
                        In the stillness of remembering what you had
                        And what you lost
                        And what you had
                        And what you lost</span>
                </div>
            </div>
        </Style>
    )
}

const Style = styled.div`
display: flex;
justify-content: start;
align-items: center;


.palestras{
    display: flex;
//    border: 1px solid #e1e1e1 ;
    justify-content:start;
    align-items: start;
    flex-direction: column;
    padding: 20px 100px;
    border-radius: 10px;
    height: auto;

}
span{
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;

}
`
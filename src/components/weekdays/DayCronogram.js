import styled from "styled-components"

export default function DayCronogram({ title, desc }) {
    return (
        <Style>
            <div className="palestras" >


                <p className="eve-hour">  09:00am <span className="eve-title" >{title}</span></p>
                <div className="eve" ><p className="eve-text" > Cold bones, yeah, that's my love
                    She hides away, like a ghost
                    Ooh, does she know that we bleed the same?
                    Ooh, don't wanna cry but I break that way
                    Cold sheets, oh, where's my love?
                    I am searching high
                    I'm searching low in the night
                    <p className="eve-flag" >Minicurso</p>
                </p> </div>
            </div>




        </Style >
    )
}

const Style = styled.div`
display: flex;
justify-content: start;
align-items: start;
flex-direction: column;

.eve-text{
    display: flex;
    align-items: end;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 1.8;
}

.eve{
display: flex;
flex-direction: column;
}

.eve-hour{
    color: #4f4f4f;
    font-size: 22px;
    font-weight: 600;
    font-family: 'Inconsolata', monospace;
    width: 100%;
    display: flex;
    padding-right: 15px;

}

.eve-title{
    color: #001989;
    font-size: 22px;
    margin-left: 20px;
    font-weight: 600;
    font-family: 'Inconsolata', monospace;


}

.eve-flag{
    padding: 0px 20px;
    color: #4f4f4f;
    font-size: 22px;
    font-weight: 600;
    font-family: 'Inconsolata', monospace;

}
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
    font-size: 18px;
    line-height: 1.5;

}
`
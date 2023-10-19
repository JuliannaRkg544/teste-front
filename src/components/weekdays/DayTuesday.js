import styled from "styled-components"

export default function DayTuesday({ nameP, nameC, titleP, descP, titleC, descC }) {
    return (
        <Style>
            <div className="palestras" >
                <p className="eve-hour">  09:00am - 12:00am <span className="eve-title" >{nameC}: </span> <span className="eve-title" >{titleC}</span></p>
                <div className="eve" ><p className="eve-text" > {descC}
                    <p className="eve-flag" >Minicurso</p>

                </p> </div>

            </div>
            <div className="palestras" >
                <p className="eve-hour">  09:00am - 12:00am <span className="eve-title" >Zoey Pessanha: </span> <span className="eve-title" >Construindo uma API bancária RESTful com Elixir
                </span></p>
                <div className="eve" ><p className="eve-text" > Descubra como desenvolver uma API RESTful com Elixir/Phoenix na SCTI UENF! Aprenda a modelar dados, gerenciar transações bancárias e autenticação em um curso prático. Mergulhe no mundo do Elixir e explore o poder das APIs REST!

                    <p className="eve-flag" >Minicurso</p>

                </p> </div>

            </div>
            <div className="palestras" >
                <p className="eve-hour">  14:00pm - 16:00pm <span className="eve-title" >{nameP}: </span> <span className="eve-title" >{titleP}</span></p>
                <div className="eve" ><p className="eve-text" > {descP}
                    <p className="eve-flag" >Palestra</p>

                </p> </div>

            </div>
            <div className="palestras" >
                <p className="eve-hour">  16:00pm - 17:00pm <span className="eve-title" >Camila Martins: </span> <span className="eve-title" >
                    Programação linear mista para escalonamento em Kubernetes com Facility Location Problem

                </span></p>
                <div className="eve" ><p className="eve-text" >
                    A utilização dos recursos existentes
                    em um cluster Kubernetes para garantir sua melhor performance e uma redução significativa de custo, realizando uma customização no kube-scheduler.
                    <p className="eve-flag" >Palestra</p>

                </p> </div>

            </div>
            <div className="palestras" >
                <p className="eve-hour">  17:00pm - 18:00pm <span className="eve-title" >André Brandão: </span> <span className="eve-title" >Inteligência Emocional - Um Olhar Descomplicado</span></p>
                <div className="eve" ><p className="eve-text" >
                    Você já percebeu que a maneira como você se sente influencia totalmente na qualidade do seu dia e nas suas atitudes? Nessa palestra iremos conversar sobre como identificar e administrar
                    nossas emoções de maneira extremamente pragmática e prática. Um assunto cada vez mais útil e necessário nos dias atuais.
                    <p className="eve-flag" >Palestra</p>

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
import styled from "styled-components"

export default function DayMonday({ nameP, nameC, titleP, descP, titleC, descC }) {
    return (
        <Style>
            <div className="palestras" >
                <p className="eve-hour">  09:00am - 12:00am <span className="eve-title" >{nameC}: </span> <span className="eve-title" >{titleC}</span></p>
                <div className="eve" ><p className="eve-text" > {descC}
                    <p className="eve-flag" >Minicurso</p>

                </p> </div>

            </div>
            <div className="palestras" >
                <p className="eve-hour">  09:00am - 12:00am <span className="eve-title" >Matheus Schulz: </span> <span className="eve-title" >Desbravando a Programação Reativa com RxJS</span></p>
                <div className="eve" ><p className="eve-text" >
                    A Programação Reativa é um paradigma que chegou para revolucionar o mundo
                    do desenvolvimento de software. Além de ser amplamente utilizado nos principais
                    sites, serviços de streaming e frameworks, tornou-se um dos alicerces
                    da revolução da Indústria 4.0. Neste minicurso, exploraremos os conceitos
                    fundamentais por trás da Programação Reativa e do Padrão Observable,
                    que podem ser aplicados em qualquer linguagem de programação.
                    Prepare-se para uma jornada prática de aprendizado com RxJS, onde
                    mergulharemos no universo da reatividade e descobriremos como aplicá-lo de
                    maneira eficaz.
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
                <p className="eve-hour">  17:30pm - 18:30pm <span className="eve-title" > </span> <span className="eve-title" >Abertura da Semana Acadêmica</span></p>
                <div className="eve" ><p className="eve-text" >
                    Centro de Convenções (auditório principal)

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
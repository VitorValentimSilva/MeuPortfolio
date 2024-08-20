import React from "react"
import styled from "styled-components"

interface DivEstilizadaProps {
  inverter: boolean;
}

const DivEstilizada = styled.div<DivEstilizadaProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 65px;
  margin-bottom: 7%;
  flex-direction: ${({ inverter }) => (inverter ? "row-reverse" : "row")};
  margin-right: ${({ inverter }) => (inverter ? 0 : "20%")};

  img{
    width: 752px;
    height: 406px;
    border-radius: 20px;
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.300);
  }
    
  h3{
    font-size: 28px;
    margin: 0;
  }

  p{
    font-size: 18px;
    margin: 1.5% 0 8% 0;
  }

  #botoes{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  button{
    padding: 14px 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 14px;
    cursor: pointer;
    border: 1px solid #2A7AE4;
  }

  #repositorio{
    background-color: transparent;
    color: #2A7AE4;
  }

  #repositorio:hover{
    background-color: #80808021;
  }

  #verProjeto{
    background-color: #2A7AE4;
    color: #FFF;
  }

  #verProjeto:hover{
    background-color: #80808021;
    color: #2A7AE4;
  }
`

interface ProjetosProps {
  inverter: boolean,
  img: string,
  nomeProjeto: string,
  descricaoProjeto: string,
  linkRepositorio: string,
  linkProjeto: string
}

const Projetos: React.FC<ProjetosProps> = ({ inverter, img, nomeProjeto, descricaoProjeto, linkRepositorio, linkProjeto }) => {
  const onClickButton = (url: string) => {
    window.open(url, '_blank');
  }

  return(
    <DivEstilizada inverter={inverter}>
      <img src={"/img/" + img} alt={img} />

      <div>
        <h3>{nomeProjeto}</h3>
        <p>{descricaoProjeto}</p>
        <div id="botoes">
          <button id="repositorio" onClick={() => onClickButton(linkRepositorio)}>Repositório</button>
          <button id="verProjeto" onClick={() => onClickButton(linkProjeto)}>Ver Projeto</button>
        </div>
      </div>
    </DivEstilizada>
  )
}

export default Projetos
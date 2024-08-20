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
  margin-bottom: 10%;
  flex-direction: ${({ inverter }) => (inverter ? "row-reverse" : "row")};
  margin-right: ${({ inverter }) => (inverter ? 0 : "20%")};

  img{
    width: 100%;
    max-width: 752px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
    
  div {
    max-width: 500px;
    text-align: ${({ inverter }) => (inverter ? "right" : "left")};

    h3 {
      font-size: 1.75rem;
      margin: 0;
      color: ${({ theme }) => theme.colors.heading || "#383838"};
    }

    p {
      font-size: 1rem;
      margin: 1.5% 0 8% 0;
      color: ${({ theme }) => theme.colors.text || "#252525"};
    }
  }

  #botoes{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 1.5%;
  }

  button{
    padding: 14px 20px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 14px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.primary || "#2A7AE4"};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary || "#2A7AE4"};
    transition: background-color 0.3s, color 0.3s;
  }

  #repositorio {
    background-color: transparent;
  }

  #repositorio:hover {
    background-color: ${({ theme }) => theme.colors.hover || "#80808021"};
  }

  #verProjeto {
    background-color: ${({ theme }) => theme.colors.primary || "#2A7AE4"};
    color: #FFF;
  }

  #verProjeto:hover {
    background-color: ${({ theme }) => theme.colors.hover || "#80808021"};
    color: ${({ theme }) => theme.colors.primary || "#2A7AE4"};
  }

  @media (max-width: 1080px) {
    gap: 35px;
    flex-direction: column;
    margin-bottom: 20%;
    margin-right: 0;
    text-align: center;

    div{
      margin-right: 0;
    }
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
      <img src={`/img/${img}`} alt={`Imagem do projeto ${nomeProjeto}`} />

      <div>
        <h3>{nomeProjeto}</h3>
        <p>{descricaoProjeto}</p>
        <div id="botoes">
          <button id="repositorio" onClick={() => onClickButton(linkRepositorio)} aria-label={`Abrir repositório do projeto ${nomeProjeto}`}>
            Repositório
          </button>
          <button id="verProjeto" onClick={() => onClickButton(linkProjeto)} aria-label={`Ver projeto ${nomeProjeto}`}>
            Ver Projeto
          </button>
        </div>
      </div>
    </DivEstilizada>
  )
}

export default Projetos
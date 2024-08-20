import React from "react"
import styled from "styled-components"

const DivEstiliazada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  margin: 1% 0;
  max-width: 450px;
  text-align: center;

  img{
    width: 100%;
    height: auto;
    max-width: 430px;
    border-radius: 12px;
    margin-bottom: 1.5%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  h3{
    margin: 0.5% 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.heading || "#383838"};
  }

  p{
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text || "#252525"};
  }

  @media (max-width: 768px) {
    img {
      max-width: 100%;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`

interface FormacaoProps {
  img: string,
  nomeFormacao: string,
  andamento: string,
  nomeInstituicao: string
}

const Formacao: React.FC<FormacaoProps> = ({ img, nomeFormacao, andamento, nomeInstituicao }) => {
  return(
    <DivEstiliazada>
      <img src={`/img/${img}`} alt={`Imagem de ${nomeFormacao}`} />

      <h3>{nomeFormacao}</h3>
      <p>{andamento} - {nomeInstituicao}</p>
    </DivEstiliazada>
  )
}

export default Formacao
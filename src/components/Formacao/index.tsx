import React from "react"
import styled from "styled-components"

const DivEstiliazada = styled.div`
  display: flex;
  flex-direction: column;

  img{
    width: 430px;
    height: 310px;
    border-radius: 25px;
    margin-bottom: 2%;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.300);
  }

  h3{
    margin: 1%;
    font-size: 22px;
  }

  p{
    margin: 0;
    font-size: 18px;
    font-weight: 400;
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
      <img src={"/img/" + img} alt="" />

      <h3>{nomeFormacao}</h3>
      <p>{andamento} - {nomeInstituicao}</p>
    </DivEstiliazada>
  )
}

export default Formacao
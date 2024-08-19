import React from "react"
import styled from "styled-components"

const SectionEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6%;
  padding: 5% 6% 10% 6%;

  div{
    width: 70%;
  }

  h1{
    margin: 0 0 1.2% 0;
    font-size: 55px;
    text-align: justify;
    color: #383838;
  }

  p{
    margin: 0 0 3% 0;
    font-size: 23px;
    font-weight: 400;
    text-align: justify;
    color: #252525;
  }

  img{
    width: 370px;
    height: 380px;
    border-radius: 50%;
    box-shadow:  5px 10px 10px #00000052;
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 21px;
    color: #252525;
  }

  a:hover{
    color: #25252584;
  }

  img{
    width: 26px;
    height: 26px;
    border-radius: 0%;
    box-shadow: none;
  }
`

interface CampoInicialProps {
  nome: string,
  img: string
}

const CampoInicial: React.FC<CampoInicialProps> = ({ nome, img }) => {
  return(
    <SectionEstilizado>
      <div>
        <h1>Olá, eu sou {nome} – Desenvolvedor Full Stack</h1>
        <p>Sou um desenvolvedor Full Stack em formação, atualmente cursando Análise e Desenvolvimento de Sistemas. Estou preparado para enfrentar desafios complexos e criar soluções inovadoras.</p>

        <DivEstilizada>
          <a href="https://github.com/VitorValentimSilva" target="_blank">GitHub <img src="/icon/arrow.png" alt="Icone de fecha" /></a>
          
          <a href="https://www.linkedin.com/in/vitor-valentim-desenvolvedor/" target="_blank">Linkedin <img src="/icon/arrow.png" alt="Icone de fecha" /></a>
          
          <a href="https://www.instagram.com/vitorvalem/" target="_blank">Instagram <img src="/icon/arrow.png" alt="Icone de fecha" /></a>
          
          <a href="https://drive.google.com/file/d/1xFDMVdLgNnFdMYo6YdmEIjc8ZRLjD_q-/view?usp=sharing" target="_blank">Currículo <img src="/icon/arrow.png" alt="Icone de fecha" /></a>
          
        </DivEstilizada>
      </div>

      <img src={img} alt="Foto do meu rosto" />
    </SectionEstilizado>
  )
}

export default CampoInicial
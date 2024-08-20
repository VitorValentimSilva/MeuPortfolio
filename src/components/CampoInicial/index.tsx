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
    font-size: 3.5rem;
    text-align: justify;
    color: ${({ theme }) => theme.colors.primaryText || "#383838"};
  }

  p{
    margin: 0 0 3% 0;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.colors.secondaryText || "#252525"};
  }

  img{
    width: 100%;
    max-width: 370px;
    height: auto;
    border-radius: 50%;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.32);
  }

  @media (max-width: 890px){
    flex-direction: column-reverse;
    align-items: normal;

    div {
      width: 100%;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      text-align: center;
      text-align: left;
    }

    p {
      font-size: 1.2rem;
      text-align: left;
    }

    img {
      margin: 2rem 0;
      width: 100%;
      max-width: 220px;
      height: auto;
    }
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.linkText || "#252525"};
    transition: color 0.3s ease;
  }

  a:hover{
    color: ${({ theme }) => theme.colors.linkHover || "#25252584"};
  }

  img{
    width: 26px;
    height: 26px;
    border-radius: 0%;
    box-shadow: none;
    margin-left: 0.5rem;
  }
`

interface CampoInicialProps {
  nome: string,
  img: string
}

const CampoInicial: React.FC<CampoInicialProps> = ({ nome, img }) => {
  return (
    <SectionEstilizado>
      <div>
        <h1>Olá, eu sou {nome} – Desenvolvedor Full Stack</h1>
        <p>
          Sou um desenvolvedor Full Stack em formação, atualmente cursando Análise e Desenvolvimento de Sistemas. Estou preparado para enfrentar desafios complexos e criar soluções inovadoras.
        </p>

        <DivEstilizada>
          <a href="https://github.com/VitorValentimSilva" target="_blank" aria-label="Visitar perfil no GitHub">
            GitHub <img src="/icon/arrow.png" alt="Ícone de seta indicando um link externo" />
          </a>

          <a href="https://www.linkedin.com/in/vitor-valentim-desenvolvedor/" target="_blank" aria-label="Visitar perfil no LinkedIn">
            Linkedin <img src="/icon/arrow.png" alt="Ícone de seta indicando um link externo" />
          </a>

          <a href="https://www.instagram.com/vitorvalem/" target="_blank" aria-label="Visitar perfil no Instagram">
            Instagram <img src="/icon/arrow.png" alt="Ícone de seta indicando um link externo" />
          </a>

          <a href="https://drive.google.com/file/d/1xFDMVdLgNnFdMYo6YdmEIjc8ZRLjD_q-/view?usp=sharing" target="_blank" aria-label="Ver currículo">
            Currículo <img src="/icon/arrow.png" alt="Ícone de seta indicando um link externo" />
          </a>
        </DivEstilizada>
      </div>

      <img src={img} alt={`Foto de ${nome}`} />
    </SectionEstilizado>
  );
};

export default CampoInicial
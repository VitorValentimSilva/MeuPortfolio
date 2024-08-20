import React from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section`
  background-color: #EAF2FD;
  padding: 2.3% 28% 2.3% 6%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.300);
  border-radius: 8px;
  margin: 2% 0;

  h2{
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.heading || "#383838"};
  }

  p{
    font-size: 1.125rem;
    font-weight: 400;
    text-align: justify;
    margin: 1.2rem 0;
    color: ${({ theme }) => theme.colors.text || "#252525"};
  }

  @media (max-width: 768px) {
    padding: 4% 2%;
    
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

interface SobreMimProps {
  nome: string
}

const SobreMim: React.FC<SobreMimProps> = ({ nome }) => {
  return (
    <SectionEstilizada id="sobreMim">
      <h2>Sobre Mim</h2>

      <p>Olá! Eu sou {nome}, tenho 19 anos e sou natural de Presidente Prudente, interior de São Paulo. Atualmente, estou no quarto semestre do curso de Análise e Desenvolvimento de Sistemas na Universidade do Oeste Paulista (Unoeste).</p>

      <p>Minha paixão pela tecnologia começou na infância e, ao longo dos anos, se transformou em uma carreira. Desde o término do ensino médio, tenho me dedicado à programação, com experiência prática de 1 ano e meio em HTML, CSS, JavaScript, Node.js (Express) e MySQL. Além disso, estou constantemente aprimorando minhas habilidades em React e TypeScript, tanto na faculdade quanto em cursos complementares.</p>

      <p>Quando não estou mergulhado no mundo da tecnologia, gosto de me dedicar a outras paixões. Sou um entusiasta de séries e filmes, sempre em busca de novas histórias inspiradoras. A leitura é outra atividade que valorizo, permitindo-me explorar ideias e mundos diferentes. Também adoro jogar basquete com meus amigos, uma maneira divertida de relaxar e manter a forma.</p>

      <p>Estou entusiasmado em aplicar minhas habilidades e conhecimentos em projetos desafiadores, contribuindo para a inovação e o sucesso das empresas que buscam excelência no setor de tecnologia.</p>
    </SectionEstilizada>
  );
};

export default SobreMim;
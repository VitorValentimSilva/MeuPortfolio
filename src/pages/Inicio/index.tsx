import styled from "styled-components"
import CampoInicial from "../../components/CampoInicial"
import SobreMim from "../../components/SobreMim"
import CampoInformacoes from "../../components/CampoInformacoes"
import Formacao from "../../components/Formacao"

const MainEstilizado = styled.main`
  
`

const SectionEstiliazada = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #EAF2FD;
  padding: 2.4% 6%;
  margin: 8% 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.300);

  h2{
    font-size: 35px;
    padding-bottom: 1%;
  }

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Inicio = () => {
  return(
    <MainEstilizado>
      <CampoInicial 
        nome = "Vitor Valentim"
        img = "/img/fotoMinha.jpeg"
      />

      <SobreMim 
        nome = "Vitor Valentim"
      />

      <CampoInformacoes 
        nomePrincipal = "Skills"
        nomesDosCampos={[
          "HTML",
          "CSS",
          "JavaScript",
          "Node.Js",
          "React",
          "MySQL"
        ]}
      />

      <CampoInformacoes 
        nomePrincipal = "Hobbies"
        nomesDosCampos = {[
          "Assistir Séries",
          "Jogar Jogos",
          "Academia",
          "Jogar Basquete",
          "Ler Livros"
        ]}
      />

      <SectionEstiliazada>
        <h2>Formação acadêmica</h2>

        <div>
          <Formacao
            img = "logoUnoeste.png"
            nomeFormacao = "Análise e Desenvolvimento de Sistemas"
            andamento = "Em andamento"
            nomeInstituicao = "Unoeste"
          />

          <Formacao
            img = "logoOne.png"
            nomeFormacao = "Formação Front-End"
            andamento = "Finalizado"
            nomeInstituicao = "One Oracle Next Education"
          />
        </div>
      </SectionEstiliazada>
    </MainEstilizado>
  )
}

export default Inicio
import styled from "styled-components"
import CampoInicial from "../../components/CampoInicial"
import SobreMim from "../../components/SobreMim"
import CampoInformacoes from "../../components/CampoInformacoes"
import Formacao from "../../components/Formacao"
import Projetos from "../../components/Projetos"

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

const SectionFormacao = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground || "#EAF2FD"};
  padding: 2.4% 6%;
  margin: 8% 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.300);
  border-radius: 8px;

  h2{
    font-size: 2.2rem;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3% 5%;
    div {
      flex-direction: column;
    }
  }
`

const SectionProjetos = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 6%;
  margin-bottom: 5%;

  h2{
    font-size: 2.2rem;
    margin-bottom: 4%;
    color: ${({ theme }) => theme.colors.primaryText};
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
          "TypeScript",
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

      <SectionFormacao id="Formacao">
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
      </SectionFormacao>

      <SectionProjetos id="Projeto">
        <h2>Projetos</h2>

        <Projetos 
          inverter = {false}
          img = "projetoAluraFlix.png"
          nomeProjeto = "AluraFlix"
          descricaoProjeto = "Challenge Alura"
          linkRepositorio = "https://github.com/VitorValentimSilva/AluraFlix"
          linkProjeto = "https://alura-flix-olive.vercel.app"
        />

        <Projetos 
          inverter = {true}
          img = "projetoOrgano.png"
          nomeProjeto = "Organo"
          descricaoProjeto = "Challenge Alura"
          linkRepositorio = "https://github.com/VitorValentimSilva/organo"
          linkProjeto = "https://organo-nu-liart.vercel.app"
        />
      </SectionProjetos>
    </MainEstilizado>
  )
}

export default Inicio
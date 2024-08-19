import styled from "styled-components"
import CampoInicial from "../../components/CampoInicial"
import SobreMim from "../../components/SobreMim"
import CampoInformacoes from "../../components/CampoInformacoes"

const MainEstilizado = styled.main`
  
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
    </MainEstilizado>
  )
}

export default Inicio
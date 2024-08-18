import styled from "styled-components"
import CampoInicial from "../../components/CampoInicial"
import SobreMim from "../../components/SobreMim"
import Skills from "../../components/Skills"

const MainEstilizado = styled.main`
  
`

const Inicio = () => {
  return(
    <MainEstilizado>
      <CampoInicial />

      <SobreMim />

      <Skills />
    </MainEstilizado>
  )
}

export default Inicio
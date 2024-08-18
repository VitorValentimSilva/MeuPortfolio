import styled from "styled-components"
import CampoInicial from "../../components/CampoInicial"
import SobreMim from "../../components/SobreMim"

const MainEstilizado = styled.main`
  
`

const Inicio = () => {
  return(
    <MainEstilizado>
      <CampoInicial />

      <SobreMim />
    </MainEstilizado>
  )
}

export default Inicio
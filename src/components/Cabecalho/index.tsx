import styled from "styled-components"
import CampoNavegacao from "../CampoNavegacao"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3% 6% 0 6%;
`
const LinkEstilizado = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;

  img{
    height: 40px;
    width: 40px;
  }

  p{
    font-size: 26px;
    font-weight: 600;
    color: black;
  }
`

const Cabecalho = () => {
  return(
    <HeaderEstilizado>
      <LinkEstilizado to="/">
        <img src="/icon/awesome.png" alt="icone" />

        <p>Vitor Valentim</p>
      </LinkEstilizado>

      <CampoNavegacao />
    </HeaderEstilizado>
  )
}

export default Cabecalho
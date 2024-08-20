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
    color: ${({ theme }) => theme.colors.primary || "black"};
  }

  @media(max-width: 450px){
    display: none;
  }
`
interface CabecalhoProps {
  nome: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ nome }) => {
  return(
    <HeaderEstilizado>
      <LinkEstilizado to="/">
        <img src="/icon/awesome.png" alt="icone" />

        <p>{nome}</p>
      </LinkEstilizado>

      <CampoNavegacao 
        email = "vitorvalentin840@gmail.com"
      />
    </HeaderEstilizado>
  )
}

export default Cabecalho
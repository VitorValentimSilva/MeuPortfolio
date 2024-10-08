import styled from "styled-components"

const FooterEstilizado = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 1.4%;
  background-color: #FFF;

  p{
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text || "black"};
    margin: 0;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.linkHover || "gray"};
    }
  }
`

interface RodapeProps {
  nomeDoDesenvolvedor: string,
  ano: number
}

const Rodape: React.FC<RodapeProps> = ({ nomeDoDesenvolvedor, ano }) => {
  return(
    <FooterEstilizado>
      <p>Desenvolvido por {nomeDoDesenvolvedor}</p>
      <p>{ano}</p>
    </FooterEstilizado>
  )
}

export default Rodape
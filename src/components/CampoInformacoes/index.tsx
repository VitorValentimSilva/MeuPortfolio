import styled from "styled-components"

const SectionEstilizada = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4% 6%;
  background-color: ${({ theme }) => theme.colors.background || "#F9F9F9"};
  border-radius: 8px;
  margin: 2% 0;

  h2{
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.heading || "#383838"};
  }

  @media (max-width: 768px) {
    padding: 4% 2%;
    h2 {
      font-size: 1.5rem;
    }
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.5rem;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 170px;
    height: 160px;
    background-color: ${({ theme }) => theme.colors.cardBackground || "#FFF"};
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  div > img{
    width: 55px;
    height: 55px;
  }

  div > p{
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text || "#252525"};
  }

  @media (max-width: 768px) {
    gap: 1rem;

    div {
      width: 130px;
      height: 130px;

      img {
        width: 40px;
        height: 40px;
      }

      p {
        font-size: 0.875rem;
      }
    }
  }
`

interface CampoInformacoesProps {
  nomePrincipal: string,
  nomesDosCampos: string[]
}

const CampoInformacoes: React.FC<CampoInformacoesProps> = ({ nomePrincipal, nomesDosCampos }) => {
  const elementos = nomesDosCampos.map((nome, index) => (
    <div key={index}>
      <img src={`/icon/icone${nome}.png`} alt={`Ícone do ${nome}`} />
      <p>{nome}</p>
    </div>
  ))

  return(
    <SectionEstilizada>
      <h2 id={nomePrincipal}>{nomePrincipal}</h2>

      <DivEstilizada>
        {elementos}
      </DivEstilizada>
    </SectionEstilizada>
  )
}

export default CampoInformacoes
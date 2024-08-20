import styled from "styled-components"

const SectionEstilizada = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5.5% 6% 0 6%;

  h2{
    font-size: 34px;
    margin-bottom: 3.5%;
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 90px;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 175px;
    height: 165px;
    background-color: #FFF;
    border-radius: 18px;
  }

  div > img{
    width: 60px;
    height: 60px;
  }

  div > p{
    font-size: 18px;
    font-weight: 500;
  }
`

interface CampoInformacoesProps {
  nomePrincipal: string,
  nomesDosCampos: string[]
}

const CampoInformacoes: React.FC<CampoInformacoesProps> = ({ nomePrincipal, nomesDosCampos }) => {
  const elementos = nomesDosCampos.map((nome, index) => (
    <div key={index}>
      <img src={"/icon/icone" + nome + ".png"} alt={"icone do " + nome} />
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
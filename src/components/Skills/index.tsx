import styled from "styled-components"

const SectionEstilizada = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6%;

  h2{
    font-size: 34px;
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 150px;
    background-color: #FFF;
    border-radius: 18px;
  }
`

const Skills = () => {
  return(
    <SectionEstilizada id="skills">
      <h2>Skills</h2>

      <DivEstilizada>
        <div>
          <img src="" alt="" />
          <p>HTML 5</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>CSS</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>JavaScrpit</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Node JS</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>MySQl</p>
        </div>
      </DivEstilizada>

      <DivEstilizada>
        <div>
          <img src="" alt="" />
          <p>Assistir Séries</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Jogar Jogos</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Academia</p>
        </div>  

        <div>
          <img src="" alt="" />
          <p>Jogar Basquete</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Ler Livros</p>
        </div>
      </DivEstilizada>
    </SectionEstilizada>
  )
}

export default Skills
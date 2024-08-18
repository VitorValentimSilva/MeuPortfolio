import styled from "styled-components"

const NavEstiliazado = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;

  a{
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }

  a:hover{
    color: #5a5a5ab9;
  }
`

const CampoNavegacao = () => {
  return(
    <NavEstiliazado>
      <a href="#sobreMim">Sobre Mim</a>
      <a href="#skills">Skills</a>
      <a href="">Hobbies</a>
      <a href="">Formação</a>
      <a href="">Projeto</a>
      <a href="mailto:vitorvalentin840@gmail.com">vitorvalentin840@gmail.com</a>
    </NavEstiliazado>
  )
}

export default CampoNavegacao
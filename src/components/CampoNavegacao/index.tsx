import styled from "styled-components";

const NavEstiliazado = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;

  a {
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #5a5a5ab9;
  }
`;

interface CampoNavegacaoProps {
  email: string;
}

const CampoNavegacao: React.FC<CampoNavegacaoProps> = ({ email }) => {
  return (
    <NavEstiliazado>
      <a href="#sobreMim">Sobre Mim</a>
      <a href="#Skills">Skills</a>
      <a href="#Hobbies">Hobbies</a>
      <a href="#formacao">Formação</a>
      <a href="#projeto">Projeto</a>
      <a href={`mailto:${email}`}>{email}</a>
    </NavEstiliazado>
  );
};

export default CampoNavegacao;
import styled from "styled-components";

const NavEstiliazado = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;

  div{
    display: flex;
    align-items: center;
    gap: 50px;
  }

  a{
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.link || "black"};
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.linkHover || "#5a5a5ab9"};
  }

  .links{
    @media(max-width: 1202px){
      display: none;

      
    }
  }
`;

interface CampoNavegacaoProps {
  email: string;
}

const CampoNavegacao: React.FC<CampoNavegacaoProps> = ({ email }) => {
  return (
    <NavEstiliazado>
      <div className="links">
        <a href="#sobreMim">Sobre Mim</a>
        <a href="#Skills">Skills</a>
        <a href="#Hobbies">Hobbies</a>
        <a href="#Formacao">Formação</a>
        <a href="#Projeto">Projeto</a>
      </div>
      <a href={`mailto:${email}`} className="email">{email}</a>
    </NavEstiliazado>
  );
};

export default CampoNavegacao;
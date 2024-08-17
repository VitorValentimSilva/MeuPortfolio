import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import EstilosGlobais from "../../components/EstilosGlobais"
import Rodape from "../../components/Rodape"

const PaginaBase = () => {
  return(
    <>
      <EstilosGlobais />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}

export default PaginaBase
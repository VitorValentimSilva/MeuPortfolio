import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import EstilosGlobais from "../../components/EstilosGlobais"

const PaginaBase = () => {
  return(
    <>
      <EstilosGlobais />
      <Cabecalho />
      <Outlet />
    </>
  )
}

export default PaginaBase
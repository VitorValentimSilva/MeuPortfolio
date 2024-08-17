import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";

const AppRoutes = () => {
  return(
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
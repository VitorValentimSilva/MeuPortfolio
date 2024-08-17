import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";

const AppRoutes = () => {
  return(
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PaginaBase />}>
          
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
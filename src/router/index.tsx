import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "pages/home"
import Layout from "templates/Layout"
import { ROUTES } from "./paths"

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path={ROUTES.COLOR_NAME} element={<p>Color name</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RootRouter }

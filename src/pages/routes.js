import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Posts } from './posts'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Posts />} />
        <Route exact path='/post/:id' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
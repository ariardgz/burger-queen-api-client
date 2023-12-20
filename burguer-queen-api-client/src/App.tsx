
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login.tsx';
import  Delivers  from './Pages/Delivers/Delivers.tsx';
import { PrivateRoute } from "./Services/protectedRoutes.tsx";


export function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path= '/delivers' element={<PrivateRoute element={<Delivers/>} allowedRoles={['waiter']}></PrivateRoute>} />
      </Routes>
    </BrowserRouter>    
  )
}
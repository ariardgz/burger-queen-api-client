/*import './App.css'
const logo = <img src="https://i.pinimg.com/564x/d9/2f/7d/d92f7d222127f9ed93e1b7a48af1510b.jpg"></img>

function componet() {
  fetch('burger-queen-api-mock-production-1097.up.railway.app').then (response => console.log(response))
  
}
componet()

function App() {
  return (
    <div className='login'>  
     <div>
      {logo}
     </div>
     <div className='Regitro'>
      <h1>Bienvenido a Organic Burguer</h1>

      <p className='letraRegistro'>USUARIO</p>
      <input type ='text' placeholder='Ingresa tu nombre de usuario' className='inputRegistro'></input>

      <p className='letraRegistro'>CONTRASEÑA</p>
      <input type='password' placeholder='Ingresa tu contraseña' className='inputRegistro'></input>

      <button>INGRESAR</button>
      

     </div>


      
    </div>
    
     
  )
}

export default App */

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/Login';
import WaiterPage from './Pages/Waiter';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="Waiter" element={<WaiterPage />} />
    </Routes>
    </BrowserRouter>
}

export default App;
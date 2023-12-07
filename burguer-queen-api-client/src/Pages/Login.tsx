import React from 'react'

export interface ILoginProps {}

const LoginPage: React.FunctionComponent<ILoginProps> = (props) => {

    function mostrarAlerta() {
        alert('hola mundo')
        
      }
      

    return (
    
     <div className='Regitro'>
        <form>
      <h1>Bienvenido a Organic Burguer</h1>

      <p className='letraRegistro'>USUARIO</p>
      <input type ='text' placeholder='Ingresa tu nombre de usuario' className='inputRegistro'></input>

      <p className='letraRegistro'>CONTRASEÑA</p>
      <input type='password' placeholder='Ingresa tu contraseña' className='inputRegistro'></input>

      <button onClick={mostrarAlerta}>INGRESAR</button>
      
      </form>
     </div>
    )
}

export default LoginPage;
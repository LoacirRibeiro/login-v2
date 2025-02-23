import { useState } from 'react';
import './styles.css'



function App() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  return (
    <div className = 'container'>
      <div classname = 'container-login'>
        <div className = 'wrap-login'>
          <form classname = 'login-form'>

            <span className = 'login-form-title'>Bem Vindo!</span>

            <span className = 'login-form-title'>
              <img src = 'jp.svg' alt = 'Jovem programador'/>
            </span>

            <div className = "wrap-input">
              <input 
                className = {email !== "" ? 'has-val input' : 'input'} 
                type = 'email' 
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className = 'focus-input' data-placeholder = 'E-mail'></span>
            </div>

            <div className = "wrap-input">
              <input 
                className = {password !== "" ? 'has-val input' : 'input'} 
                type = 'password'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className = 'focus-input' data-placeholder = 'Password'></span>
            </div>

            <div className = 'container-login-form-btn'>
              <button className = 'login-form-btn'>Login</button>
            </div>

            <div className = 'text-center'>
              <span className = ' txt1'>Não possui conta?</span>

              <a className = 'txt2' href ='#'>Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

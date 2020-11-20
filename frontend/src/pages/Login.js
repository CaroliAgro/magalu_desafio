import React, {useState} from 'react';
import Api from '../services/api';

import Input from '../components/Input';

import LogoMagalu from '../assets/images/magalu_logo.png';

function Login() {
  const [usernameLogin, setUserNameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [usernameRegister, setUserNameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('username', usernameLogin);
    formData.set('password', passwordLogin);

    Api.post('token/', formData)
        .then((res)=>{
          localStorage.setItem('token', res.data.token)
          console.log('deu bom', res);
        })
        .catch((error)=>{
          console.log('deu erro', error);
        })
  }
  const handleRegister = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('username', usernameRegister);
    formData.set('password', passwordRegister);

    Api.post('users/register/', formData)
        .then((res)=>{
          
          console.log('deu bom', res);
        })
        .catch((error)=>{
          console.log('deu erro', error);
        })
  }

  return (
    <div className="container-fluid">
      <main className="login row d-flex align-items-center justify-content-center flex-column p-3">
        <img src={LogoMagalu} alt=""/>
        <div className="content-login col-md-7">
          <div className="row d-flex align-items-center justify-content-center">
            <div className='card-login col-6 d-flex align-items-center justify-content-center flex-column'>
            <h3>Cadastre-se Agora!</h3>
              <p>Registra-se agora para vender no Magalu.</p> <hr/>
              <form>
                <Input value={usernameRegister} onChange={e => setUserNameRegister(e.target.value)} type="text" label="Nome de Usuário" id="register-input-username" placeholder='Digite um usuário' />

                <Input value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)} type="password" label="Senha" id="register-input-email" placeholder='Digite senha' />
                <button className="btn btn-success my-2 my-sm-0" onClick={handleRegister}>
                  Cadastrar
                </button>
              </form>
            </div>

            <div className='card-login col-6 d-flex align-items-center justify-content-center flex-column'>

              <h3>Já tem cadastro? Entre.</h3>
              <p>Entrar no Você no Magalu :)</p> <hr/>
              <form>
                <Input value={usernameLogin} onChange={e => setUserNameLogin(e.target.value)} type="text" label="Nome de Usuário" id="login-input-username" placeholder='Digite um usuário' />

                <Input value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} type="password" label="Senha" id="login-input-email" placeholder='Digite senha' />
                <button className="btn btn-success my-2 my-sm-0" onClick={handleLogin}>
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
import React, {useState} from 'react';

import Input from '../components/Input';

import LogoMagalu from '../assets/images/magalu_logo.png';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="container-fluid">
      <main className="login row d-flex align-items-center justify-content-center flex-column">
        <img src={LogoMagalu} alt=""/>
        <div class="content-login col-md-7">
          <div className="row d-flex align-items-center justify-content-center">
            <div className='card-login col-6 d-flex align-items-center justify-content-center flex-column'>
            <h3>Cadastre-se Agora!</h3>
              <p>Registra-se agora para vender no Magalu.</p> <hr/>
              <form>
                <Input value={username} onChange={e => setUserName(e.target.value)} type="text" label="Nome de Usuário" id="input-username" placeholder='Digite um usuário' />

                <Input value={password} onChange={e => setPassword(e.target.value)} type="password" label="Senha" id="input-email" placeholder='Digite senha' />
                <button className="btn btn-success my-2 my-sm-0" onClick={handleSubmit}>
                  Cadastrar
                </button>
              </form>
            </div>

            <div className='card-login col-6 d-flex align-items-center justify-content-center flex-column'>

              <h3>Já tem cadastro? Entre</h3>
              <p>Entrar no Você no Magalu :)</p> <hr/>
              <form>
                <Input value={username} onChange={e => setUserName(e.target.value)} type="text" label="Nome de Usuário" id="input-username" placeholder='Digite um usuário' />

                <Input value={password} onChange={e => setPassword(e.target.value)} type="password" label="Senha" id="input-email" placeholder='Digite senha' />
                <button className="btn btn-success my-2 my-sm-0" onClick={handleSubmit}>
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
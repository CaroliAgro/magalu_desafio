import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../assets/images/header.png';
import MagaluLogo from '../assets/images/magalu_logo.png'

function Landing() {
    return (
        <>
            <div className="container-fluid">
                <main className="landing row d-flex align-items-center">
                    <div className="col-6 title">
                        <img src={MagaluLogo} alt="Logo Magalu"/>
                        <h1>Ganhar um dinheiro extra na internet nunca ficou mais fácil!</h1>
                        <p>Você no Magalu: uma plataforma criada para conectar vendedores com o Magazine Luiza de forma digital e prática.</p>
                        <button className="btn btn-dark my-2 my-sm-0" type="submit">
                            <Link to="/login">
                                Começar Agora
                            </Link>
                        </button>
                    </div>
                    <div className="img col-6">
                        <img src={Header} alt="Header" />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Landing;
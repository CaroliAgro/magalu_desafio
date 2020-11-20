import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_vc_no_magalu.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/inicio" className="navbar-brand">
                <img src={Logo} className="img-fluid" alt="Logo Você no Magalu" />
            </Link>

            <button className="btn btn-danger my-2 my-sm-0" type="submit">
                Sair
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </button>

        </nav>
    );
}

export default Navbar;

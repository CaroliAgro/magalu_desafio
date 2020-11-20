import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

// import { Container } from './styles';

function Home() {
  const produtos = [
    {
      codigo: 1,
      titulo: 'Sabonete',
      valor: 2.00,
      qtd: 500

    },
    {
      codigo: 2,
      titulo: 'Chiclete',
      valor: 2.00,
      qtd: 500
    }
  ]
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="home col-md-9 ml-sm-auto col-lg-10 px-md-4">


            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                  </svg>
                    Início
                    </li>
              </ol>
            </nav>


            <div className="row">
              <div className="col">
                <Card number="100" text="Produtos Cadastrados" />
              </div>
              <div className="col">
                <Card number="55" text="Produtos Vendidos" />
              </div>
            </div>

            <h2>Lista de Produtos</h2>

            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Título</th>
                  <th>Preço Unitário</th>
                  <th>Quantidade em Estoque</th>
                  <th>Editar</th>
                  <th>Inativar</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map(produto => (
                  <tr>
                    <td>{produto.codigo}</td>
                    <td>{produto.titulo}</td>
                    <td>{produto.valor}</td>
                    <td>{produto.qtd}</td>
                    <td className="btn-action text-center">
                      <button type="button" className="btn btn-secondary text-center">
                        <Link to="/cadastro_produto">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg>
                        </Link>
                      </button>

                    </td>
                    <td className="btn-action text-center">
                      <button type="button" className="btn btn-danger text-center">
                        <Link to="/cadastro_produto">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                          </svg>
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </main>
        </div>
      </div>
    </>

  );
}

export default Home;
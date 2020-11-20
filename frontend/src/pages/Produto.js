import React, { useState } from 'react';

import Api from '../services/api';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Input from '../components/Input';

function Produto() {
  const token = localStorage.getItem('token');
  Api.setAuth(token)

  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('product_code', code);
    formData.set('title', title);
    formData.set('unit_price', price);
    formData.set('quantity', quantity);
    formData.set('status', 'available');

    Api.post('products/', formData)
      .then((res) => {
        console.log('produto registrado', res);
      })
      .catch((error) => {
        console.log('deu erro', error);
      })
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                  </svg>
                    Início
                    </li>
                <li class="breadcrumb-item active" aria-current="page">Produtos</li>
              </ol>
            </nav>
            <h2>Cadastro de Produto</h2>
            <form>
              <Input value={code} onChange={e => setCode(e.target.value)} type="text" label="Código" id="input-code" placeholder="Insira código do produto" />
              <Input value={title} onChange={e => setTitle(e.target.value)} type="text" label="Título" id="input-name" placeholder="Insira título do produto" />
              <Input value={price} onChange={e => setPrice(e.target.value)} type="number" label="Preço Unitário" id="input-price" placeholder="Insira o preço unitário do produto" />
              <Input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" label="Quantidade em Estoque" id="input-quantity" placeholder="Insira a quantidade em estoque do produto" />
              <button className="btn btn-success my-2 my-sm-0" onClick={handleSubmit}>
                Cadastrar Produto
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default Produto;
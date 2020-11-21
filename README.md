

<p align="center">
  <img alt="Proffy" title="Proffy" src="logo.png" />
</p>

<h1 align="center">
  Conectando microempreendedores e clientes em uma mesma plataforma 
</h1>

<h3 align="center">
  Api Rest com Django Framework e Interfaces com React.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Bonizario/proffy?color=6842C2">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/bonizario/proffy?color=774DD6">


  <a href="https://github.com/Bonizario/proffy/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/bonizario/proffy?color=04D361">
  </a>

  <a href="https://github.com/Bonizario/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/bonizario/proffy?style=social">
  </a>
</p>

<br />

# 📚 Sobre


Você no Magalu é aplicação  que visa facilitar vendedores realizar o cadastro, a listagem a atualização e inativação de seus produtos. A aplicação foi desenvolvida visando atender os requisitos obrigatórios do desafio Luiza code. Além disso, como diferecial realizamos os testes  unitários, documentação da api, e upload de imagens através de uma Api que envia para uma nuvem imagens escolhidas por vendedores. 
<br />
  
####  :heavy_check_mark: Requisitos obrigatórios do desafio 
  - Desenvolvimento via Api Rest 
  - Apresentação dos dados via Json
  - Cadastrar, atualizar, consultar e inativar um produto.
  - O produto deve ter: título, preço, código do produto, identificador do vendedor, quantidade em estoque.

## 💻 Tecnologias utilizadas

Para o desenvolvimento dessa aplicação foi utilizado o framework Django Rest para a criação da API, juntamente com o banco de dados Sqlite3 no back end. Já no front end foi utilizado a biblioteca React para a prototipação das interfaces. 


## :pencil: Instalação da aplicação 

Para instalação é necessário ter o python e o node instalados na máquina.
#### :cherry_blossom: Front End
  ``` bash
$ node --version
$ git clone https://github.com/CaroliAgro/magalu_desafio.git
$ cd frontend
$ npm install
$ npm start

```
#### :wrench: Back End
 ``` bash
$ node --version
$ python3 - m venv luizacode
$ source luizacode/bin/activate
$ cd api
$ python manage.py runserver

```

## 💻 API Endpoints


- **endpoint:** `/users/register/`
- **method:** `POST`
- **params:** 
```json
{
	"username": "carca",
	"password": "carcassonne"
}
```
- **200 Response:**
```json
[
   {
	"username": "carca",
	"password": "carcassonne"
}
]
```


#### Criando um produto

- **endpoint:** `/products/`
- **method:** `POST`
- **params:** Em Basic passar o username e password
- **200 Response:**
```json
{
	"title": "Fogão",
	"product_code": "355",
	"quantity": 10,
	"unit_price": 250.00,
	"status": "available"
}
```
- **201 Response**
```json
{
	"title": "Fogão",
	"product_code": "355",
	"quantity": 10,
	"unit_price": 250.00,
	"status": "available"
}
```

#### Listando Produtos

- **endpoint:** `/products/`
- **method:** `GET`


- **201 Response:**
```json
{
	"title": "Fogão",
	"product_code": "355",
	"quantity": 0,
	"unit_price": 250.00,
	"status": "available"
},
{
	"title": "Mesa",
	"product_code": "356",
	"quantity": 20,
	"unit_price": 230.00,
	"status": "available"
}
```


<p align="center">
  <img alt="Proffy" title="Proffy" src="logo.png" />
</p>



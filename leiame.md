## Iniciando o projeto

### Instalando dependencias
- Inicie o prijeto : ``npm init``
- Instale o Jest para testes: ``npm install --save-dev jest ``
- Instale o Express para criar o servidor: ``npm install express ``

---

para testar, pode ser utilizado via postman:  http://localhost:3000/vendas

``
fetch('http://localhost:3000/vendas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    cliente: { nome: 'Cliente Teste' },
    produtos: [
      { nome: 'Produto1', quantidade: 2, precoUnitario: 10, fracionado: false },
      { nome: 'Produto2', quantidade: 1, precoUnitario: 5, fracionado: true },
    ],
    entrega: 5,
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));

``
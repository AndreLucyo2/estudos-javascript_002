class Venda {
    constructor(cliente, produtos, desconto, frete) {
      this.cliente = cliente; // um objeto com nome, cpf, etc.
      this.produtos = produtos; // uma lista de objetos com nome, preco e quantidade
      this.desconto = desconto; // um valor numérico ou uma porcentagem
      this.frete = frete; // um valor fixo
      this.total = 0; // o valor total da venda
      this.produtosComDesconto = []; // uma lista de objetos com nome, preco, quantidade e desconto de cada produto
    }
  
    // um método para calcular o valor total da venda e o desconto de cada produto
    calcularTotal() {
      // soma o preço de todos os produtos multiplicado pela quantidade
      let subtotal = this.produtos.reduce(
        (soma, produto) => soma + produto.preco * produto.quantidade,
        0
      );
      // verifica se o desconto é uma porcentagem ou um valor fixo
      if (this.desconto.includes("%")) {
        // converte o desconto para um número entre 0 e 1
        let porcentagem = parseFloat(this.desconto) / 100;
        // aplica o desconto e adiciona o frete
        this.total = subtotal * (1 - porcentagem) + this.frete;
        // calcula o desconto de cada produto proporcionalmente ao seu preço
        this.produtosComDesconto = this.produtos.map((produto) => {
          let desconto = produto.preco * porcentagem;
          return {
            ...produto,
            desconto: desconto,
          };
        });
      } else {
        // converte o desconto para um número
        let valor = parseFloat(this.desconto);
        // subtrai o desconto e adiciona o frete
        this.total = subtotal - valor + this.frete;
        // calcula o desconto de cada produto proporcionalmente ao seu preço
        this.produtosComDesconto = this.produtos.map((produto) => {
          let desconto = (produto.preco * produto.quantidade * valor) / subtotal;
          return {
            ...produto,
            desconto: desconto,
          };
        });
      }
      // retorna o objeto da venda completo
      return this;
    }
  }
  
// src/services/CalculadoraVenda.js
class CalculadoraVenda {
    constructor(calculadoraDesconto) {
      this.calculadoraDesconto = calculadoraDesconto;
    }
  
    calcularVendaComDesconto(venda, descontoValor, descontoPercentual) {
      const descontoTotal = this.calculadoraDesconto.calcularDescontoTotal(
        venda.entrega,
        descontoPercentual
      );
  
      venda.produtos.forEach((produto) => {
        const descontoProduto = produto.fracionado
          ? descontoValor / venda.produtos.length
          : descontoTotal / venda.produtos.length;
  
        produto.precoUnitario = this.calculadoraDesconto.calcularDescontoTotal(
          produto.precoUnitario,
          descontoPercentual
        );
  
        produto.precoUnitario -= descontoProduto;
      });
  
      venda.entrega = descontoTotal;
      return venda;
    }
  }
  
  export default CalculadoraVenda;
  
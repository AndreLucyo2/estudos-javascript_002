// test/calculadoraVenda.test.js
import Venda from '../src/models/venda';
import Produto from '../src/models/Produto';
import CalculadoraDesconto from '../src/services/CalculadoraDesconto';
import CalculadoraVenda from '../src/services/CalculadoraVenda';

test('CalculadoraVenda - calcularVendaComDesconto', () => {
  const cliente = { nome: 'Cliente Teste' };
  const produtos = [
    new Produto('Produto1', 2, 10, false),
    new Produto('Produto2', 1, 5, true),
  ];
  const entrega = 5;

  const venda = new Venda(cliente, produtos, entrega);
  const calculadoraDesconto = new CalculadoraDesconto();
  const calculadoraVenda = new CalculadoraVenda(calculadoraDesconto);

  const vendaComDesconto = calculadoraVenda.calcularVendaComDesconto(
    venda,
    3,
    10
  );

  expect(vendaComDesconto.entrega).toBe(2);
  expect(vendaComDesconto.produtos[0].precoUnitario).toBe(8);
  expect(vendaComDesconto.produtos[1].precoUnitario).toBeCloseTo(4.33, 2);
});

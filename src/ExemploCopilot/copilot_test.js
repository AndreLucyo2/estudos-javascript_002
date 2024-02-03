// importa a classe Venda
import * as Venda from "./copilot_class.js";

// cria um grupo de testes para a classe Venda
describe("Venda", () => {
  // cria um teste para o método calcularTotal
  test("calcularTotal deve retornar o valor correto da venda", () => {
    // cria um objeto cliente
    let cliente = {
      nome: "João",
      cpf: "123.456.789-10",
    };
    // cria uma lista de produtos
    let produtos = [
      { nome: "Camiseta", preco: 50, quantidade: 2 },
      { nome: "Calça", preco: 80, quantidade: 1 },
    ];
    // cria um objeto venda com desconto de 10%
    let venda1 = new Venda(cliente, produtos, "10%", 15);
    // espera que o valor total da venda1 seja 175
    expect(venda1.calcularTotal().total).toBe(175);

    // cria outro objeto venda com desconto de 20 reais
    let venda2 = new Venda(cliente, produtos, "20", 15);
    // espera que o valor total da venda2 seja 175
    expect(venda2.calcularTotal().total).toBe(175);
  });

  // cria outro teste para o atributo produtosComDesconto
  test("produtosComDesconto deve retornar a lista de produtos com o desconto rateado", () => {
    // cria um objeto cliente
    let cliente = {
      nome: "João",
      cpf: "123.456.789-10",
    };
    // cria uma lista de produtos
    let produtos = [
      { nome: "Camiseta", preco: 50, quantidade: 2 },
      { nome: "Calça", preco: 80, quantidade: 1 },
    ];
    // cria um objeto venda com desconto de 10%
    let venda1 = new Venda(cliente, produtos, "10%", 15);
    // espera que os produtos com desconto da venda1 sejam
    // [{nome: "Camiseta", preco: 50, quantidade: 2, desconto: 5},
    // {nome: "Calça", preco: 80, quantidade: 1, desconto: 8}]
    expect(venda1.calcularTotal().produtosComDesconto).toEqual([
      { nome: "Camiseta", preco: 50, quantidade: 2, desconto: 5 },
      { nome: "Calça", preco: 80, quantidade: 1, desconto: 8 },
    ]);

    // cria outro objeto venda com desconto de 20 reais
    let venda2 = new Venda(cliente, produtos, "20", 15);
    // espera que os produtos com desconto da venda2 sejam
    // [{nome: "Camiseta", preco: 50, quantidade: 2, desconto: 6.67},
    // {nome: "Calça", preco: 80, quantidade: 1, desconto: 13.33}]
    expect(venda2.calcularTotal().produtosComDesconto).toEqual([
      { nome: "Camiseta", preco: 50, quantidade: 2, desconto: 6.67 },
      { nome: "Calça", preco: 80, quantidade: 1, desconto: 13.33 },
    ]);
  });
});

// src/controllers/VendaController.js
import Venda from '../models/Venda.js';
import CalculadoraVenda from '../services/CalculadoraVenda.js';

class VendaController {
  constructor() {
    this.calculadoraVenda = new CalculadoraVenda();
  }

  calcularVendaComDesconto(venda, descontoValor, descontoPercentual) {
    // Validações, se necessário
    const vendaComDesconto = this.calculadoraVenda.calcularVendaComDesconto(
      venda,
      descontoValor,
      descontoPercentual
    );
    return vendaComDesconto;
  }
}

export default VendaController;

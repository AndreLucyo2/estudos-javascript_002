// src/controllers/VendaController.js
import CalculadoraVenda from '../services/CalculadoraVenda.js';

class VendaController {
    constructor() {
        this.calculadoraVenda = new CalculadoraVenda();
    }

    calcularVendaComDesconto(venda, descontoValor, descontoPercentual) {
        const vendaComDesconto = this.calculadoraVenda.calcularVendaComDesconto(
            venda,
            descontoValor,
            descontoPercentual
        );
        return vendaComDesconto;
    }
}

export default VendaController;

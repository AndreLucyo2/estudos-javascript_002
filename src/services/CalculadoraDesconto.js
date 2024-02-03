// src/services/CalculadoraDesconto.js
class CalculadoraDesconto {
    calcularDescontoTotal(valor, percentual) {
        return valor - (valor * percentual) / 100;
    }
}

export default CalculadoraDesconto;

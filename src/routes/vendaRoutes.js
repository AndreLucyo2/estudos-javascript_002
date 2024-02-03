// src/routes/vendaRoutes.js
import express from 'express';
import VendaController from '../controllers/VendaController.js';

const router = express.Router();
const vendaController = new VendaController();

router.post('/', (req, res) => {
  const venda = req.body;
  const vendaComDesconto = vendaController.calcularVendaComDesconto(
    venda,
    3,
    10
  );
  res.json(vendaComDesconto);
});

export default router;

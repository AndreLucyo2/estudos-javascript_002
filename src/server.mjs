// src/server.js
import express from 'express';

import vendaRoutes from './routes/vendaRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configurar rotas
app.use('/vendas', vendaRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

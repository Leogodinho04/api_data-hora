import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Rota raiz (OBRIGATÓRIA para acessar o link do Render)
app.get('/', (req, res) => {
  res.json({ 
    mensagem: "API no ar!",
    data: new Date().toLocaleString('pt-BR') 
  });
});

// Outras rotas (exemplo)
app.get('/api/data-hora', (req, res) => {
  res.json({ data: new Date().toLocaleString('pt-BR') });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
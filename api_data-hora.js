import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Configurações de formatação (reutilizável)
const formatarDataHora = () => {
  const options = {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  return new Date().toLocaleString('pt-BR', options);
};

// Rota raiz
app.get('/', (req, res) => {
  res.json({ 
    mensagem: "API no ar!",
    data: formatarDataHora() // Usa a função formatada
  });
});

// Rota /api/data-hora
app.get('/api/data-hora', (req, res) => {
  res.json({ 
    data: formatarDataHora() // Usa a mesma função
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
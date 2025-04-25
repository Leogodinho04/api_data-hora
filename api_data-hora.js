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
  const options = {
    timeZone: 'America/Sao_Paulo', // Fuso horário do Brasil
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const dataFormatada = new Date().toLocaleString('pt-BR', options);
  res.json({ data: dataFormatada });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
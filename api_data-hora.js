import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/data-hora', (req, res) => {
    res.json({
        data: new Date().toLocaleString('pt-BR'),
        mensagem: 'API funcionando no Render!'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
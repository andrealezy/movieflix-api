import express from "express";

const PORT = 3000;

const app = express();

app.get('/movies', (req, res) => {
    res.send('Listagem de filmes');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
    
})
import express from "express";

const port = 3000;
const app = express();

app.get("/movies", (req,res) => {
    res.send("listagem de filmes");
})

app.listen(port, () => {
    console.log(`Servidor esta em execução na porta ${port}`);
});
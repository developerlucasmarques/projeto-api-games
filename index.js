const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/games.routes.js');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/games', routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

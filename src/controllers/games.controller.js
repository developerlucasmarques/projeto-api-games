const e = require('express');
const gamesService = require('../services/games.service.js');

const findGamesController = (req, res) => {
    const allGames = gamesService.findGamesService();
    res.send(allGames);
};

const findGameByIdController = (req, res) => {
    const idParam = Number(req.params.id);
    const selectGame = gamesService.findGameByIdService(idParam);

    if (selectGame) {
        res.send(selectGame);
    } else if (isNaN(idParam)) {
        res.send({ error: `O ID procurado não é válido` });
    } else {
        res.send({ error: `O ID ${idParam} não existe.` });
    }
};

const findGamesByPriceController = (req, res) => {
    const selectGames = gamesService.findGamesByPriceService(req.params.price);
    res.send(selectGames);
};

const createGameController = (req, res) => {
    if (!req.body.name) {
        res.send({ message: 'O nome não pode estar vazio.' });
    } else if (!req.body.description) {
        res.send({ message: 'Por favor digite uma descrição para o jogo.' });
    } else if (!req.body.platform) {
        res.send({ message: 'Você precisa informar uma plataforma do jogo.' });
    } else if (!req.body.image) {
        res.send({ message: 'O jogo precisa de uma imagem.' });
    } else if (!req.body.price) {
        res.send({ message: 'Digite um valor para o jogo.' });
    } else {
        const newGame = gamesService.createGameService(req.body);
        res.send(newGame);
    }
};

const updateGameController = (req, res) => {
    if (!req.body.name) {
        res.send({ message: 'O nome não pode estar vazio.' });
    } else if (!req.body.description) {
        res.send({ message: 'Por favor digite uma descrição para o jogo.' });
    } else if (!req.body.platform) {
        res.send({ message: 'Você precisa informar uma plataforma do jogo.' });
    } else if (!req.body.platform) {
        res.send({ message: 'O jogo precisa de uma imagem.' });
    } else if (!req.body.price) {
        res.send({ message: 'Digite um valor para o jogo.' });
    } else {
        const idParam = Number(req.params.id);
        const updatedGame = gamesService.updateGameService(idParam, req.body);
        res.send(updatedGame);
    }
};

const deleteGameController = (req, res) => {
    const idParam = Number(req.params.id);
    const gameDeleted = gamesService.games.find(
        (element) => element.id === idParam,
    );

    if (isNaN(idParam)) {
        res.send({ message: `Por favor insira um ID válido` });
    } else {
        if (gameDeleted) {
            gamesService.deleteGameService(idParam);
            res.send({
                message: `O jogo ${gameDeleted.name} foi deletado com sucesso!`,
            });
        } else {
            res.send({ message: `O ID ${idParam} não é existe.` });
        }
    }
};

module.exports = {
    findGamesController,
    findGameByIdController,
    findGamesByPriceController,
    createGameController,
    updateGameController,
    deleteGameController,
};

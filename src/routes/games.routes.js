const router = require('express').Router();

const gamesController = require('../controllers/games.controller.js');

router.get('/find-games', gamesController.findGamesController);
router.get('/find-game/:id', gamesController.findGameByIdController);
router.get('/find-games-price/:price', gamesController.findGamesByPriceController);
router.post('/create', gamesController.createGameController);
router.put('/update/:id', gamesController.updateGameController);
router.delete('/delete/:id', gamesController.deleteGameController);

module.exports = router;
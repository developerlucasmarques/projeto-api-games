const games = [
    {
        id: 1,
        name: 'Valorant',
        description:
            'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.',
        platform: 'PC',
        image: './assets/images/capa-valorant.png',
        price: 0,
    },
    {
        id: 2,
        name: 'FIFA 22',
        description:
            'FIFA 22 é um jogo eletrônico de simulação de futebol desenvolvido e publicado pela Electronic Arts.',
        platform:
            'PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One e PC.',
        image: './assets/images/capa-fifa22.png',
        price: 180.89,
    },
    {
        id: 3,
        name: 'GTA 5',
        description:
            'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.',
        platform:
            'PlayStation 5, PlayStation 4, PlayStation 3, Xbox Series X/S, Xbox One, Xbox 360 e PC.',
        image: './assets/images/capa-gta5.png',
        price: 79.9,
    },
    {
        id: 4,
        name: 'Free Fire',
        description:
            'Free Fire é um jogo eletrônico de ação-aventura gratuito do gênero battle royale, criado pela desenvolvedora vietnamita 111dots Studio e publicado pela Garena.',
        platform: 'Android e iOS.',
        image: './assets/images/capa-freefire.png',
        price: 0,
    },
    {
        id: 5,
        name: 'CS-GO',
        description:
            'Counter-Strike: Global Offensive é um jogo online gratuito desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.',
        platform:
            'Microsoft Windows, macOS, Xbox One, PlayStation 3, Linux, Mac OS Classic, Xbox 360.',
        image: './assets/images/capa-csgo.png',
        price: 0,
    },
    {
        id: 6,
        name: 'Among Us',
        description:
            'Among Us é um jogo eletrônico online, dos gêneros jogo em grupo e sobrevivência, desenvolvido e publicado pelo estúdio de jogos estadunidense InnerSloth.',
        platform:
            'Nintendo Switch, Android, PlayStation 4, Xbox One, Microsoft Windows, iOS, PlayStation 5, Xbox Series X.',
        image: './assets/images/capa-amongus.png',
        price: 9.99,
    },
];

let lastIncrementId = 0;

const findGamesService = () => {
    return games;
};

const findGameByIdService = (id) => {
    return games.find((element) => element.id === id);
};

const findGamesByPriceService = (price) => {
    return games.filter((game) => game.price <= price);
};

const createGameService = (newGame) => {
    newGame.id = games[games.length - 1].id + (1 + lastIncrementId);
    if (lastIncrementId > 0) {
        lastIncrementId = 0;
    }
    games.push(newGame);
    return newGame;
};

const updateGameService = (id, gameEdited) => {
    gameEdited['id'] = id;
    const gameIndex = games.findIndex((element) => element.id == id);
    games[gameIndex] = gameEdited;
    return gameEdited;
};

const deleteGameService = (id) => {
    const gameIndex = games.findIndex((element) => element.id === id);
    if (gameIndex != -1) {
        if (gameIndex >= games.length - 1) {
            lastIncrementId = 1;
        }
        return games.splice(gameIndex, 1);
    }
};

module.exports = {
    games,
    findGamesService,
    findGameByIdService,
    findGamesByPriceService,
    createGameService,
    updateGameService,
    deleteGameService,
};

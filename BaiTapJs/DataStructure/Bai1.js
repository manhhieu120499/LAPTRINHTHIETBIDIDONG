const player1 = [
	'Neuer',
	'Pavard',
	'Martinez',
	'Alaba',
	'Davies',
	'Kimmich',
	'Goretzka',
	'Coman',
	'Muller',
	'Gnarby',
	'Lewandowski',
];

const player2 = [
	'Burki',
	'Schulz',
	'Hummels',
	'Akanji',
	'Hakimi',
	'Weigl',
	'Witsel',
	'Hazard',
	'Brandt',
	'Sancho',
	'Gotze',
];

const [gk, ...fieldPlayers] = player1;
const [gk1, ...fieldPlayers1] = player2;

const allPlayers = [...player1, ...player2];

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

const game = {
	odds: {
		team1: 1.33,
		draw: 3.25,
		team2: 6.5,
	},
};

const printGoals = (...players) => {
	console.log(`${players.length} goals were scored by:`);
	players.forEach((player) => console.log(player));
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

const { team1, draw, team2 } = game.odds;
const moreLikeWin = (team1 < team2 && 'Team 1') || 'Team 2';
console.log(`${moreLikeWin} is more likely to win.`);

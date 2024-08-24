const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
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
		],
		[
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
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

game.scored.forEach((player, index) =>
	console.log(`Goal ${index + 1} ${player}`)
);

console.log('Odd of victory Bayern Munich: ', game.odds.team1);
console.log('Odd of draw: ', game.odds.x);
console.log('Odd of victory Borrussia Dortmund: ', game.odds.team2);

const scores = {
	Gnarby: 1,
	Hummel: 1,
	Lewandowski: 2,
};

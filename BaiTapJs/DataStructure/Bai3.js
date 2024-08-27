const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

const events = new Map([
	[15, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[45, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[60, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[74, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[82, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

gameEvents.delete(64);
console.log(gameEvents);
const gameMinutes = 90;
const averageTime = gameMinutes / gameEvents.size;
console.log(
	`An event happened, on average, every ${averageTime.toFixed(1)} minutes`
);

for (const [minute, event] of gameEvents) {
	const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
	console.log(`${half} ${minute}: ${event}`);
}

let nomeDoHeroi = 'Kassia';
let xpDoHeroi = 10001;
let nivel;
let intervalosDeXp = [
	[xpDoHeroi <= 1000, 'Ferro'],
	[xpDoHeroi > 1000 && xpDoHeroi <= 2000, 'Bronze'],
	[xpDoHeroi > 2000 && xpDoHeroi <= 5000, 'Prata'],
	[xpDoHeroi > 5000 && xpDoHeroi <= 7000, 'Ouro'],
	[xpDoHeroi > 7000 && xpDoHeroi <= 8000, 'Platina'],
	[xpDoHeroi > 8000 && xpDoHeroi <= 9000, 'Ascendente'],
	[xpDoHeroi > 9000 && xpDoHeroi <= 10000, 'Imortal'],
	[xpDoHeroi > 10000, 'Radiante'],
];

for (let i = 0; i < intervalosDeXp.length; i++) {
	if (intervalosDeXp[i][0]) {
		nivel = intervalosDeXp[i][1];
		break;
	}
}

console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + nivel);

let nomeHeroi = "Auluccinado";
let nivelXP = 11000;
let rank = "";

// Laço de repetição;
do {

	if ( nivelXP < 0) { // Se a variável xp for menor que 0 o código vai encerrar com mensagem abaixo;
		console.log("XP Inválido!, mude a opção xp para um valor maior ou igual a 0");
		break;
	}

	if (nivelXP <= 1000) {
		rank = "Ferro";

	} else if (nivelXP >= 1001 && nivelXP <= 2000) {
		rank = "Bronze";

	} else if (nivelXP >= 2001 && nivelXP <= 6000) {
		rank = "Prata";

	} else if (nivelXP >= 6001 && nivelXP <= 7000) {
		rank = "Ouro";

	} else if (nivelXP >= 7001 && nivelXP <= 8000) {
		rank = "Platina";

	} else if (nivelXP >= 8001 && nivelXP <= 9000) {
		rank = "Ascedente";

	} else if (nivelXP >= 9001 && nivelXP <= 10000) {
		rank = "Imortal";

	} else {
		rank = "Radiante";
	}

	// Mensagem final se a variável xp for maior ou igual a zero, onde a classificação será dada de acordo com a quantidade de xp;
	console.log("O Herói " + nomeHeroi + " está no rank " + rank)
	break;

} while (nivelXP >= 0);
const WORD_LIST = [
  "HELLO", "CRANE", "PLANT", "STARE", "BRICK",
  "FLUTE", "GLOBE", "SHINY", "WATCH", "JAZZY"
];

const start = new Date("2026-01-01").getTime();
const today = new Date().setHours(0, 0, 0, 0);
const dayIndex = Math.floor((today - start) / 86400000);
const WORDLE_WORD = WORD_LIST[dayIndex % WORD_LIST.length];

let attemptsLeft = 6;
let guesses: Array<{ word: string, result: string[] }> = [];

export function submitMockRequest(path: string, params: Record<string, any>) {

	if (path === '/games/wordle') {
		const guess = (params.guess || "").toUpperCase();

		if (guess.length !== 5) {
			return {
				error: "Guess must be exactly 5 letters long.",
				status: 400
			};
		}

		if (attemptsLeft <= 0) {
			return {
				message: `Game over! The word was ${WORDLE_WORD}. Refresh to play again.`,
				guesses,
				status: 400
			}
		}

		attemptsLeft--;

		const result = Array(5).fill('⬛');
		const targetArr = WORDLE_WORD.split('');

		for (let i = 0; i < 5; i++) {
			if (guess[i] === targetArr[i]) {
				result[i] = '🟩';
				targetArr[i] = '#';
			}
		}

		for (let i = 0; i < 5; i++) {
			if (result[i] === '⬛') {
				const idx = targetArr.indexOf(guess[i]);
				if (idx !== -1) {
					result[i] = '🟨';
					targetArr[idx] = '#';
				}
			}
		}

		guesses.unshift({ word: guess, result });

		const isWin = guess === WORDLE_WORD;

		return {
			status: isWin ? "You win!" : (attemptsLeft === 0 ? "You lose!" : "Playing"),
			attemptsLeft,
			guesses,
		};
	}

	return { error: "Route not implemented API." };
}

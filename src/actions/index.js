export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = (guess) => ({
		type: MAKE_GUESS,
		guess
})

export const RESTART_GAME = 'RESTART_GAME'
export const restartGame = correctAnswer => ({
		type:RESTART_GAME,
		correctAnswer
})

export const GENERATE_AURAL_UPDATE = 'GENERATE AURAL UPDATE'
export const generateAuralUpdate = () => ({
	type: GENERATE_AURAL_UPDATE
})
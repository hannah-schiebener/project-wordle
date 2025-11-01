import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuess(guess) {
    const newGuess= {
      id: crypto.randomUUID(),
      guess,
    };

    const nextGuessResults = [...guessResults, newGuess];
    setGuessResults(nextGuessResults);
  }

  return <>
    <GuessResults guessResults={guessResults} />
    <GuessInput handleGuess={handleGuess} />
  </>
}

export default Game;

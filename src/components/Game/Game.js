import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuess(tentativeGuess) {
    const nextGuessResults = [...guessResults, tentativeGuess];
    setGuessResults(nextGuessResults);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return <>
    <GuessResults guessResults={guessResults} answer={answer} />
    <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
    {
      (gameStatus === 'won') && <WonBanner numGuesses={guessResults.length}></WonBanner>
    }
    {
      (gameStatus === 'lost') && <LostBanner answer={answer}></LostBanner>
    }
  </>
}

export default Game;

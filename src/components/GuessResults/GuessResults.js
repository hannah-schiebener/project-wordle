import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { range } from '../../utils.js';


function GuessResults({ guessResults }) {
  return <div className='guess-results'>
    {
      range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guess = guessResults[num]
        return (
          <Guess 
            key={num} 
            guessValue={guess?.value} 
          />
        )
      })
    }
    
  </div>;
}

export default GuessResults;

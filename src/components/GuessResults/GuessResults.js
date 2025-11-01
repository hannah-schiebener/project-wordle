import React from 'react';

function GuessResults({ guessResults }) {

  return <div className='guess-results'>
    {
      guessResults.map(result => (
        <p className='guess' key={result.id}>
          {result.guess}
        </p>
      ))
    }
    
  </div>;
}

export default GuessResults;

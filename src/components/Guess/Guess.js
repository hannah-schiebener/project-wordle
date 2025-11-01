import React from 'react';
import { range } from '../../utils.js';


function Guess({ guessValue }) {
  return <p className="guess">
    {
      range(5).map((index) => {
        const letter = guessValue?.[index] || ''
        return <span key={index} className="cell">{letter}</span>
      }
      )
    }
  </p>;
}

export default Guess;

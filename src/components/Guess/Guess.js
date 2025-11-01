import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

  return <p className="guess">
    {
      range(5).map((num) => {
        const statusClass = `cell ${checkedGuess ? checkedGuess[num].status : ''}`
        return <span key={num} className={statusClass}>{checkedGuess ? checkedGuess[num].letter : ''}</span>
      }
      )
    }
  </p>;
}

export default Guess;

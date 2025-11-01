import React from 'react';

function GuessInput({ handleGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleChange = event => {
    const nextTentativeGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextTentativeGuess);
  }

  const handleSubmit = event => {
    event.preventDefault();

    handleGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return <div>
    <form 
      className='guess-input-wrapper'
      onSubmit={handleSubmit}
    >
      <label htmlFor='guess-input'>
        Enter guess:
      </label>
      <input 
        id='guess-input' 
        type='text'
        required
        pattern='[A-Za-z]{5}'
        disabled={gameStatus === 'lost'}
        value={tentativeGuess}
        onChange={handleChange}
        ></input>
    </form>
  </div>;
}

export default GuessInput;

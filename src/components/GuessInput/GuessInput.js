import React from 'react';

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState('');

  const handleChange = event => {
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  const handleSubmit = event => {
    event.preventDefault();

    handleGuess(guess);
    console.log({guess});
    setGuess('');
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
        value={guess}
        onChange={handleChange}
        ></input>
    </form>
  </div>;
}

export default GuessInput;

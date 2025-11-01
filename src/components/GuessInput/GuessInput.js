import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const changeCase = event => {
    const value = event.target.value.toUpperCase();

    if (value.length <= 5) {
      setGuess(value);
    }
  }

  const submitCase = event => {
    event.preventDefault();
    console.log({guess});
    setGuess('')
  }

  return <div>
    <form 
      className='guess-input-wrapper'
      onSubmit={submitCase}
    >
      <label htmlFor='guess-input'>
        Enter guess:
      </label>
      <input 
        id='guess-input' 
        type='text'
        required={true}
        pattern='[A-Za-z]{5}'
        value={guess}
        onChange={changeCase}
        ></input>
    </form>
  </div>;
}

export default GuessInput;

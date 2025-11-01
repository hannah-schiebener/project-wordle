import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numGuesses }) {
  return <Banner status='happy'>
    <p>
      <strong>Congratulations!</strong> Got it in {' '}
      <strong>{numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}</strong>.
    </p>
  </Banner>;
}

export default WonBanner;

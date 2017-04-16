import React, { Component } from 'react';

import Confetti from '../src/confetti';


const slowClick = (setLoading) => () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 1000);
};

export default ({ confettiConfig, isLoading, setLoading }) => {
  return (
    <button
      className="button button-primary loading-button"
      onClick={ slowClick(setLoading) }
    >
      <Confetti
        className="loading-button__confetti"
        active={ !isLoading }
        config={ confettiConfig }
      />

      { isLoading ? 'Loading...' : 'Hit me!' }
    </button>
  );
}

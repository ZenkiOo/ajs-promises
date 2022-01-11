/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => {
    // saving объект класса GameSaving
    console.log(saving);
  },
  (error) => {
    console.error(error);
  }
);

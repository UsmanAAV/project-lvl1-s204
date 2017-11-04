import { getRandom, runBrainGame } from '..';

const runIterBrainEven = () => {
  const number = getRandom(100);
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [`Question: ${number}\nYour answer `, rightAnswer];
};

const runBrainEven = () => {
  runBrainGame(runIterBrainEven, 'Answer "yes" if number even otherwise answer "no".');
};

export default runBrainEven;

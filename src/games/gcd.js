import { getRandom, runBrainGame, getGCD } from '..';

const runIterBrainGCD = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);

  return [`Question: ${num1} ${num2}\nYour answer: `, String(getGCD(num1, num2))];
};

const runBrainGCD = () => {
  runBrainGame(runIterBrainGCD, 'Find the greatest common divisor of given numbers.');
};

export default runBrainGCD;

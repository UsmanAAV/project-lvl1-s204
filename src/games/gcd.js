import { getRandom, runBrainGame } from '..';

const getGCD = (a, b) => {
  return b ? getGCD(b, a % b) : a;
};

const generateQuestionAnswer = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);
  const gcd = getGCD(num1, num2);

  const question = `${num1} ${num2}`;
  const answer = String(gcd);
  return [question, answer];
};

const runBrainGCD = () => {
  runBrainGame(generateQuestionAnswer, 'Find the greatest common divisor of given numbers.');
};

export default runBrainGCD;

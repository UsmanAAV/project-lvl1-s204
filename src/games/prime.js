import { getRandom, runBrainGame } from '..';

const isPrime = (number) => {
  let i = 2;
  while (i < number) {
    if (number % i === 0) { return false; }
    i += 1;
  }
  return true;
};

const generateQuestionAnswer = () => {
  const number = getRandom(100) + 1;
  let answer = '';

  answer = (isPrime(number)) ? 'yes' : 'no';

  const question = String(number);
  return [question, answer];
};

const runBrainPrime = () => {
  runBrainGame(generateQuestionAnswer, 'Answer "yes" if number prime otherwise answer "no".');
};

export default runBrainPrime;

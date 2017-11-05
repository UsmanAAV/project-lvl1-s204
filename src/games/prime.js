import { getRandom, isPrime, runBrainGame } from '..';

const generateQuestionAnswer = () => {
  const number = getRandom(100) + 1;
  let answer = '';

  if (isPrime(number)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  const question = String(number);
  return [question, answer];
};

const runBrainPrime = () => {
  runBrainGame(generateQuestionAnswer, 'Answer "yes" if number prime otherwise answer "no".');
};

export default runBrainPrime;

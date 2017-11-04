import { getRandom, runBrainGame } from '..';

const isPrime = (number) => {
  let i = 2;
  while (i < number) {
    if (number % i === 0) { return false; }
    i += 1;
  }

  return true;
};

const runIterBrainPrime = () => {
  const number = getRandom(100) + 1;
  let rightAnswer = '';

  if (isPrime(number)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  return [`Question: ${number}\nYour answer `, rightAnswer];
};

const runBrainPrime = () => {
  runBrainGame(runIterBrainPrime, 'Answer "yes" if number prime otherwise answer "no".');
};

export default runBrainPrime;

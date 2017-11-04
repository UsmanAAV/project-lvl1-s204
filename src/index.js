import readlineSync from 'readline-sync';
import runIterBrainEven from './games/even';
import runIterBrainCalc from './games/calc';
import runIterBrainGCD from './games/gcd';
import runIterBrainBalance from './games/balance';

export const say = text => console.log(text);

export const getAnswer = question => readlineSync.question(question);

export const getRandom = limit => Math.floor(Math.random() * limit);

export const getGCD = (number1, number2) => {
  let result = 1;

  for (let i = 1; i <= (number1 < number2 ? number1 : number2); i += 1) {
    if (number1 % i === 0 && number2 % i === 0) { result = i; }
  }

  return result;
};

export const checkAnswer = (userName, userAnswer, rightAnswer, counter) => {
  let i = counter;
  if (userAnswer === rightAnswer) {
    say('Correct!');
    i += 1;
  } else {
    say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    say(`Let's try again, ${userName}!`);
    i = 4;
  }
  return i;
};

const getUserName = (text) => {
  say(`Welcome to the Brain Games!\n${text}\n`);
  const name = getAnswer('May I have your name? ');
  say(`Hello, ${name}!\n`);
  return name;
};

export const runBrainGame = (runGameIter, gameQuestion) => {
  const userName = getUserName(gameQuestion);

  let i = 0;
  while (i < 3) {
    i = runGameIter(userName, i);
  }
  if (i < 4) { say(`Congratulations, ${userName}!`); }
};

export const runBrainEven = () => {
  runBrainGame(runIterBrainEven, 'Answer "yes" if number even otherwise answer "no".');
};

export const runBrainCalc = () => {
  runBrainGame(runIterBrainCalc, 'What is the result of the expression?');
};

export const runBrainGCD = () => {
  runBrainGame(runIterBrainGCD, 'Find the greatest common divisor of given numbers.');
};

export const runBrainBalance = () => {
  runBrainGame(runIterBrainBalance, 'Balance the given number.');
};

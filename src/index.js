import readlineSync from 'readline-sync';

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

export const insertFigure = (number, index, figure) =>
  (Math.floor(number / (10 ** (index + 1))) * (10 ** (index + 1))) +
   (figure * (10 ** index)) +
   (number % (10 ** index));

export const isPrime = (number) => {
  let i = 2;
  while (i < number) {
    if (number % i === 0) { return false; }
    i += 1;
  }

  return true;
};

const checkAnswer = (userName, userAnswer, rightAnswer, counter) => {
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

export const runBrainGame = (runGameIter, gameQuestion) => {
  say(`Welcome to the Brain Games!\n${gameQuestion}\n`);
  const userName = getAnswer('May I have your name? ');
  say(`Hello, ${userName}!\n`);

  let i = 0;
  while (i < 3) {
    const [question, rightAnswer] = runGameIter();
    const userAnswer = getAnswer(`Question: ${question}\nYour answer `);
    i = checkAnswer(userName, userAnswer, rightAnswer, i);
  }
  if (i < 4) { say(`Congratulations, ${userName}!`); }
};

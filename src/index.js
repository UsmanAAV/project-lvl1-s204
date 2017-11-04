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
    const gameData = runGameIter();
    const userAnswer = getAnswer(gameData[0]);
    i = checkAnswer(userName, userAnswer, gameData[1], i);
  }
  if (i < 4) { say(`Congratulations, ${userName}!`); }
};

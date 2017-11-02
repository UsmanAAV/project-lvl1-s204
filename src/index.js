import readlineSync from 'readline-sync';

export const say = text => console.log(text);

export const getAnswer = question => readlineSync.question(question);

export const getRandom = limit => Math.floor(Math.random() * limit);

export const check = (userName, userAnswer, rightAnswer, counter) => {
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

export const runBrainGame = (gameName, gameQuestion) => {
  const userName = getUserName(gameQuestion);

  let i = 0;
  while (i < 3) {
    i = gameName(userName, i);
  }
  if (i < 4) { say(`Congratulations, ${userName}!`); }
};

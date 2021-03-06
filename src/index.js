import readlineSync from 'readline-sync';

export const say = text => console.log(text);

export const getAnswer = question => readlineSync.question(question);

export const getRandom = limit => Math.floor(Math.random() * limit);

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

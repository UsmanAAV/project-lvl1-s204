import readlineSync from 'readline-sync';

export const say = text => console.log(text);

export const getAnswer = question => readlineSync.question(question);

const getRand100 = () => Math.floor(Math.random() * 100); // numbers must be two-valued - 0..99

const getRand3 = () => Math.ceil(Math.random() * 3); // numbers 1, 2, 3

const check = (userName, userAnswer, rightAnswer, counter) => {
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

const runBrainEven = (userName, counter) => {
  const number = getRand100();
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = getAnswer(`Question: ${number}\nYour answer `);
  return check(userName, userAnswer, rightAnswer, counter);
};

const runBrainCalc = (userName, counter) => {
  const num1 = getRand100();
  const num2 = getRand100();
  const operation = getRand3(); // 1 is +, 2 is -, 3 is *
  let result = 0;
  let opr = '';
  switch (operation) {
    case 1: {
      result = num1 + num2;
      opr = '+';
      break;
    }
    case 2: {
      result = num1 - num2;
      opr = '-';
      break;
    }
    case 3: {
      result = num1 * num2;
      opr = '*';
      break;
    }
    default: {
      result = 0;
      opr = '';
    }
  }
  const userAnswer = getAnswer(`Question: ${num1} ${opr} ${num2}\nYour answer: `);
  return check(userName, userAnswer, String(result), counter);
};

const runBrainGCD = (userName, counter) => {
  const num1 = getRand100();
  const num2 = getRand100();
  let result = 1;

  for (let i = 1; i < (num1 < num2 ? num1 : num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) { result = i; }
  }

  const userAnswer = getAnswer(`Question: ${num1} ${num2}\nYour answer: `);
  return check(userName, userAnswer, String(result), counter);
};

export const runBrainGame = (userName, gameName) => {
  let i = 0;
  while (i < 3) {
    switch (gameName) {
      case 'brain-even':
        i = runBrainEven(userName, i);
        break;
      case 'brain-calc':
        i = runBrainCalc(userName, i);
        break;
      case 'brain-gcd':
        i = runBrainGCD(userName, i);
        break;
      default:
        say('We have no this game.');
        return;
    }
  }
  if (i < 4) { say(`Congratulations, ${userName}!`); }
};

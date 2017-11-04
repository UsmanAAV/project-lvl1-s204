import { getRandom, getAnswer, checkAnswer } from '..';

const runIterBrainCalc = (userName, counter) => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);
  const operation = getRandom(3); // 1 is +, 2 is -, 3 is *
  let result = 0;
  let opr = '';
  switch (operation) {
    case 0: {
      result = num1 + num2;
      opr = '+';
      break;
    }
    case 1: {
      result = num1 - num2;
      opr = '-';
      break;
    }
    case 2: {
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
  return checkAnswer(userName, userAnswer, String(result), counter);
};

export default runIterBrainCalc;

import { getRandom, runBrainGame } from '..';

const generateQuestionAnswer = () => {
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

  const question = `${num1} ${opr} ${num2}`;
  const answer = String(result);
  return [question, answer];
};

const runBrainCalc = () => {
  runBrainGame(generateQuestionAnswer, 'What is the result of the expression?');
};

export default runBrainCalc;

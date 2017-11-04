import { getRandom, getAnswer, checkAnswer } from '..';

const getProgression = (number1, number2) => {
  const offset = getRandom(10);
  let result = '';

  for (let i = 0; i < 10; i += 1) {
    if (i - offset === 0) {
      result = ` .. ${result}`;
    } else {
      result = ` ${(number1 - (number2 * (i - offset)))} ${result}`;
    }
  }

  return result;
};

const runIterBrainProgression = (userName, counter) => {
  const num1 = getRandom(100);
  const num2 = getRandom(4) + 1;
  const result = getProgression(num1, num2);

  const userAnswer = getAnswer(result);
  return checkAnswer(userName, parseInt(userAnswer, 10), num1, counter);
};

export default runIterBrainProgression;

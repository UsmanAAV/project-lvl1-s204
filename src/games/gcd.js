import { getRandom, getAnswer, getGCD, checkAnswer } from '..';

const runIterBrainGCD = (userName, counter) => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);

  const userAnswer = getAnswer(`Question: ${num1} ${num2}\nYour answer: `);
  return checkAnswer(userName, userAnswer, String(getGCD(num1, num2)), counter);
};

export default runIterBrainGCD;

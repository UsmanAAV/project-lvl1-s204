import { getRandom, getAnswer, check } from '..';

const runBrainGCD = (userName, counter) => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);
  let result = 1;

  for (let i = 1; i <= (num1 < num2 ? num1 : num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) { result = i; }
  }

  const userAnswer = getAnswer(`Question: ${num1} ${num2}\nYour answer: `);
  return check(userName, userAnswer, String(result), counter);
};

export default runBrainGCD;

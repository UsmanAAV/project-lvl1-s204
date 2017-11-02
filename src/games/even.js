import { getRandom, getAnswer, check } from '..';

const runBrainEven = (userName, counter) => {
  const number = getRandom(100);
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = getAnswer(`Question: ${number}\nYour answer `);
  return check(userName, userAnswer, rightAnswer, counter);
};

export default runBrainEven;

import { getRandom, getAnswer, checkAnswer } from '..';

const runIterBrainEven = (userName, counter) => {
  const number = getRandom(100);
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = getAnswer(`Question: ${number}\nYour answer `);
  return checkAnswer(userName, userAnswer, rightAnswer, counter);
};

export default runIterBrainEven;

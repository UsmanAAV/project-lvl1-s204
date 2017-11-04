import { getRandom, runBrainGame } from '..';

const generateQuestionAnswer = () => {
  const number = getRandom(100);

  const question = String(number);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const runBrainEven = () => {
  runBrainGame(generateQuestionAnswer, 'Answer "yes" if number even otherwise answer "no".');
};

export default runBrainEven;

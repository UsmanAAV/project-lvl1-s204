import { getRandom, runBrainGame } from '..';

const getProgression = (start, step) => {
  const num = (start + (step * getRandom(10)));
  let result = '';

  for (let i = 0; i < 10; i += 1) {
    if ((start + (step * i)) === num) {
      result += ` .. `;
    } else {
      result += ` ${(start + (step * i))} `;
    }
  }

  return [result, String(num)];
};

const generateQuestionAnswer = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(4) + 1;

  return getProgression(num1, num2);
};

const runBrainProgression = () => {
  runBrainGame(generateQuestionAnswer, 'What number is missing in this progression?');
};

export default runBrainProgression;

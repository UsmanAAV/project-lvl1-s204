import { getRandom, runBrainGame } from '..';

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

const runIterBrainProgression = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(4) + 1;
  const result = getProgression(num1, num2);

  return [result, String(num1)];
};

const runBrainProgression = () => {
  runBrainGame(runIterBrainProgression, 'What number is missing in this progression?');
};

export default runBrainProgression;

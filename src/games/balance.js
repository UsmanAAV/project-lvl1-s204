import { getRandom, runBrainGame } from '..';

const isBalancedNumber = (number) => {
  let i = number;
  let index = 0;
  let max = i % 10;
  let indexMax = 0;
  let min = max;
  let indexMin = 0;
  let result;

  while (Math.ceil(i / 10) > 0) {
    if (i % 10 >= max) { max = i % 10; indexMax = index; }
    if (i % 10 < min) { min = i % 10; indexMin = index; }
    i = Math.floor(i / 10);
    index += 1;
  }

  if (max - min > 1 || (indexMax > indexMin && max - min > 0)) {
    result = false;
  } else {
    result = true;
  }

  return result;
};

const getMaxAndMin = (number) => {
  let i = number;
  let figure = (i % 10);
  let maximum = figure;
  let minimum = figure;
  let indexMaximum = 0;
  let indexMinimum = 0;
  let index = 0;

  while (Math.ceil(i / 10) > 0) {
    figure = (i % 10);
    if (figure >= maximum) {
      maximum = figure;
      indexMaximum = index;
    }
    if (figure < minimum) {
      minimum = figure;
      indexMinimum = index;
    }
    i = Math.floor(i / 10);
    index += 1;
  }

  return [maximum, indexMaximum, minimum, indexMinimum];
};

const insertFigure = (number, index, figure) =>
  (Math.floor(number / (10 ** (index + 1))) * (10 ** (index + 1))) +
  (figure * (10 ** index)) +
  (number % (10 ** index));

const doBalance = (number) => {
  const [max, imax, min, imin] = getMaxAndMin(number);
  let res = 0;

  if (max - min === 1) {
    res = insertFigure(number, imax, min);
    res = insertFigure(res, imin, max);
  } else {
    res = insertFigure(number, imax, max - Math.floor((max - min) / 2));
    res = insertFigure(res, imin, min + Math.ceil((max - min) / 2));
  }

  return res;
};

export const generateQuestionAnswer = () => {
  const num = getRandom(9900) + 100;
  let result = num;

  while (!isBalancedNumber(result)) {
    result = doBalance(result);
  }

  const question = String(num);
  const answer = String(result);
  return [question, answer];
};

const runBrainBalance = () => {
  runBrainGame(generateQuestionAnswer, 'Balance the given number.');
};

export default runBrainBalance;

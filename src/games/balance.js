import { getRandom, getAnswer, checkAnswer } from '..';

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

const reConstruct = (number, indexMax, indexMin) => {
  const max = (Math.floor(number / (10 ** indexMax))) % 10;
  const min = (Math.floor(number / (10 ** indexMin))) % 10;

  let res = '';
  let i = number;
  let index = 0;
  while (Math.ceil(i / 10) > 0) {
    switch (index) {
      case indexMax:
        if (max - min === 1) {
          res = min + res;
        } else {
          res = ((i % 10) - Math.floor((max - min) / 2)) + res;
        }
        break;
      case indexMin:
        if (max - min === 1) {
          res = max + res;
        } else {
          res = ((i % 10) + Math.ceil((max - min) / 2)) + res;
        }
        break;
      default:
        res = (i % 10) + res;
    }

    i = Math.floor(i / 10);
    index += 1;
  }

  return res;
};

const findMaxOrMin = (number, maxOrMin) => {
  let i = number;
  let index = 0;
  let figure = i % 10;
  let indexMaxOrMin = 0;

  while (Math.ceil(i / 10) > 0) {
    if (maxOrMin === 'max' ? figure <= i % 10 : figure > i % 10) {
      figure = i % 10;
      indexMaxOrMin = index;
    }
    i = Math.floor(i / 10);
    index += 1;
  }

  return indexMaxOrMin;
};

const doBalance = (number) => {
  const indexMax = findMaxOrMin(number, 'max');
  const indexMin = findMaxOrMin(number, 'min');
  return parseInt(reConstruct(number, indexMax, indexMin), 10);
};

const runIterBrainBalance = (userName, counter) => {
  const num = getRandom(9900) + 100;
  let result = num;

  while (!isBalancedNumber(result)) {
    result = doBalance(result);
    console.log(result);
  }

  const userAnswer = getAnswer(`Question: ${num}\nYour answer: `);
  return checkAnswer(userName, userAnswer, String(result), counter);
};

export default runIterBrainBalance;

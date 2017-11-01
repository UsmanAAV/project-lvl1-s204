import readlineSync from 'readline-sync';

export const sayWelcome = (introduction = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(`${introduction}\n`);
};

export const askTheName = () => {
  const actual = readlineSync.question('May I have your name? ');
  return actual;
};

const isEven = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer ');
  switch (answer) {
    case 'yes':
      if (number % 2 === 0) { return true; } return false;
    case 'no':
      if (number % 2 === 0) { return false; } return true;
    default: return false;
  }
};

export const runBrainEven = (name) => {
  let i = 0;
  while (i < 3) {
    const number = Math.round(Math.random() * 100);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    const wrongAnswer = number % 2 === 0 ? 'no' : 'yes';

    if (isEven(number)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      i = 4;
    }
  }
  if (i < 4) { console.log(`Congratulation, ${name}!`); }
};

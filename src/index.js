import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const acquaintanceship = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello!, ${actual}!\n`);
  return actual;
};

const checkeven = (number) => {
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

export const braineven = (name) => {
  let i = 0;
  while (i < 3) {
    const number = Math.round(Math.random() * 100);
    const rightanswer = number % 2 === 0 ? 'yes' : 'no';
    const wronganswer = number % 2 === 0 ? 'no' : 'yes';

    if (checkeven(number)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${wronganswer}' is wrong answer ;(. Correct answer was '${rightanswer}'`);
      console.log(`Let's try again, ${name}!`);
      i = 4;
    }
  }
  if (i < 4) { console.log(`Congratulation, ${name}!`); }
};

#!/usr/bin/env node
import { say, getAnswer, runBrainGame } from '..';

say('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');

const name = getAnswer('May I have your name? ');

say(`Hello, ${name}!\n`);

runBrainGame(name, 'brain-gcd');

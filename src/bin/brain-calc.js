#!/usr/bin/env node
import { say, getAnswer, runBrainGame } from '..';

say('Welcome to the Brain Games!\nWhat is the result of the expression?\n');

const name = getAnswer('May I have your name? ');

say(`Hello, ${name}!\n`);

runBrainGame(name, 'brain-calc');

#!/usr/bin/env node
import { say, getAnswer, runBrainGame } from '..';

say('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
const name = getAnswer('May I have your name? ');
say('\n');

runBrainGame(name, 'brain-even');

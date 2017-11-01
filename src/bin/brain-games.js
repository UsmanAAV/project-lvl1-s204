#!/usr/bin/env node
import { say, getAnswer } from '..';

say('Welcome to the Brain Games!\n');
const name = getAnswer('May I have your name? ');
say(`Welcome, ${name}!`);

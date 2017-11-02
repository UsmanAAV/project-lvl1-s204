#!/usr/bin/env node
import { runBrainGame } from '..';
import runBrainCalc from '../games/calc';

runBrainGame(runBrainCalc, 'What is the result of the expression?');

#!/usr/bin/env node
import { runBrainGame } from '..';
import runBrainEven from '../games/even';

runBrainGame(runBrainEven, 'Answer "yes" if number even otherwise answer "no".');

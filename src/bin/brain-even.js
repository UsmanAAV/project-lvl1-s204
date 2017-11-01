#!/usr/bin/env node
import { sayWelcome, askTheName, runBrainEven } from '..';

sayWelcome('Answer "yes" if number even otherwise answer "no".');

const name = askTheName();

runBrainEven(name);

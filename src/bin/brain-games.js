#!/usr/bin/env node
import { sayWelcome, askTheName } from '..';

sayWelcome();

const name = askTheName();

console.log(`Welcome, ${name}!`);

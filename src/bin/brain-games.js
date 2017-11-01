#!/usr/bin/env node
import { greeting, acquaintanceship } from '..';

greeting();

const name = acquaintanceship();

console.log(`Welcome, ${name}!`);

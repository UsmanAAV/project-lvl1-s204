#!/usr/bin/env node
import { saywelcome, askthename } from '..';

saywelcome();

const name = askthename();

console.log(`Welcome, ${name}!`);

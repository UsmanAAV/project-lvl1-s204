#!/usr/bin/env node
import { saywelcome, askthename, runbraineven } from '..';

saywelcome('Answer "yes" if number even otherwise answer "no".');

const name = askthename();

runbraineven(name);

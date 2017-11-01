#!/usr/bin/env node
import { greeting, acquaintanceship, braineven } from '..';

greeting('Answer "yes" if number even otherwise answer "no".');

const name = acquaintanceship();

braineven(name);

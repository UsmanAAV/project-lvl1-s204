#!/usr/bin/env node
import { runBrainGame } from '..';
import runBrainGCD from '../games/gcd';

runBrainGame(runBrainGCD, 'Find the greatest common divisor of given numbers.');

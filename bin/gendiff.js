#!/usr/bin/env node
import { Command } from 'commander';
import _ from 'lodash';
import fs from 'fs';
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<type>')
  .option('-f --format <type>', 'output format')

  program.parse(process.argv);

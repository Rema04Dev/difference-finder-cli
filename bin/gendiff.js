#!/usr/bin/env node
import { Command } from 'commander';
import compareFiles from '../src/compare.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format [type]', 'output format')
  .arguments('<filepath>', 'filepath to first file')
  .arguments('<file2>', 'filepath to second file')
  .action((filepath1, filepath2) => {
    compareFiles(filepath1, filepath2);
  });

program.parse(process.argv);

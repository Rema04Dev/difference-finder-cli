#!/usr/bin/env node
import { Command } from "commander";
import gendiff from '../src/gendiff.js'

const program = new Command();
program
  .version('0.0.1')
  .description('Compare two configureation files and shows a difference.')
  .option('-f, --format [type]', 'output format', '(default: "stylish")')
  .arguments('filepath1')
  .arguments('filepath2')
  .action((filepath1, filepath2) => {
    const diff = gendiff(filepath1, filepath2)
    console.log(diff);
  })

  program.parse(process.argv)
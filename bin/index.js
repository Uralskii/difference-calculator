#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const result = gendiff(filepath1, filepath2);
    console.log(result);
  });

program.parse();
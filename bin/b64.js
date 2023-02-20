#!/usr/bin/env node

import { Command } from 'commander'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { version } = require('../package.json')

const program = new Command()

program
  .name('b64')
  .description('validate, encode and decode in Base64')
  .version(version)
  .command('validate', 'Validate base64')
  .alias('v')
  .command('encode', 'Encode in base64')
  .alias('e')
  .command('decode', 'Decode base64')
  .alias('d')

program.parse(process.argv)

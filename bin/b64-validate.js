#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { isValid } from 'js-base64'

const program = new Command()

program.argument('<str>', 'String to validate').parse(process.argv)

const [str] = program.args

const isValidBase64 = isValid(str)
const validationText = isValidBase64
  ? chalk.green('valid')
  : chalk.red('invalid')

const output = `
Base64 is ${validationText}
`

console.log(output)

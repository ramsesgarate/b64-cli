import { Command } from 'commander'
import { encode } from 'js-base64'
import chalk from 'chalk'
import clipboardy from 'clipboardy'

const program = new Command()

program.argument('<str>', 'Str enconde to Base64').parse(process.argv)

const [str] = program.args

const strEncode = encode(str)
const strPretty = chalk.green(strEncode)

const output = `
${chalk.blue(str)} enconde to Base64 ${strPretty}
`

clipboardy.writeSync(strEncode)
console.log(output)

import { Command } from 'commander';
import { decode, isValid } from 'js-base64';
import chalk from 'chalk';
import clipboardy from 'clipboardy';

const program = new Command();

program.argument('<str>', 'Str decode base64 to str').parse(process.argv);

let output;
const [str] = program.args;

const isValidaBase64 = isValid(str, true);
if (isValidaBase64) {
  const strDecode = decode(str);
  const strPretty = chalk.green(strDecode);

  output = `
${chalk.blue(str)} decode to String ${strPretty}
  `;
  clipboardy.writeSync(strDecode);
} else {
  output = `
Base64 is ${chalk.red('invalid')}
`;
}

console.log(output);

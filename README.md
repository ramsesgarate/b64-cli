# B64 CLI

Validate, Encode and Decode strings in Base64 - cross platform

## Badges
[![js-standard-style][lint-standard-src]][lint-standard-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]


[lint-standard-src]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[lint-standard-href]: http://standardjs.com

[npm-version-src]: https://img.shields.io/npm/v/@rsgarate/b64-cli?style=flat-square
[npm-version-href]: https://npmjs.com/package/@rsgarate/b64-cli

[npm-downloads-src]: https://img.shields.io/npm/dm/@rsgarate/b64-cli?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@rsgarate/b64-cli

[github-actions-src]: https://img.shields.io/github/workflow/status/ramsesgarate/b64-cli/ci/main?style=flat-square
[github-actions-href]: https://github.com/ramsesgarate/b64-cli/actions?query=workflow%3Aci

## Installation

Install package:

```bash
npm install -g @rsgarate/b64-cli
```
    
## Usage

```
$ b64 --help

  Commands

    validate, v      Validate base64
    encode, e        Encode in base64
    decode, d        Decode base64
    help [command]  display help for command
```

### Commands

**Encode String**

```
  Usage
    $ b64 encode "Hello world"
```

**Decode Base64**

```
  Usage
    $ b64 decode SGVsbG8gd29ybGQ=
```

**Validate Base64**

```
  Usage
    $ b64 validate SGVsbG8gd29ybGQ=
```

## Related

Here are some related projects

- [js-base64](https://github.com/dankogai/js-base64) - API for this module


## Authors

- [@ramsesgarate](https://www.github.com/ramsesgarate)


## License

Made with 💛

Published under [MIT License](./LICENSE).
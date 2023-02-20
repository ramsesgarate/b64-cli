import { describe, expect, it } from 'vitest'
import { execa } from 'execa'
import { stdoutFormat } from './helper.js'

describe('main', () => {
  it('Encode String to Base64', async () => {
    const { stdout } = await execa('./bin/b64.js', ['e', 'Hello world'])
    const [str, strEncode] = stdoutFormat(stdout, 'enconde to Base64')

    expect(str).toBe('Hello world')
    expect(strEncode).toBe('SGVsbG8gd29ybGQ=')
  })

  it('Decode Base64 to String', async () => {
    const { stdout } = await execa('./bin/b64.js', ['d', 'SGVsbG8gd29ybGQ='])
    const [str, strDecode] = stdoutFormat(stdout, 'decode to String')

    expect(str).toBe('SGVsbG8gd29ybGQ=')
    expect(strDecode).toBe('Hello world')
  })

  it('Decode return base64 is invalid', async () => {
    const { stdout } = await execa('./bin/b64.js', ['d', 'SGVsbG8gd29ybGQ=<<<'])

    expect(stdout).toBe('Base64 is invalid')
  })

  it('Valid Base64', async () => {
    const { stdout } = await execa('./bin/b64.js', ['v', 'SGVsbG8gd29ybGQ='])
    expect(stdout).toBe('Base64 is valid')
  })

  it('Invalid Base64', async () => {
    const { stdout } = await execa('./bin/b64.js', ['v', 'SGVsbG8gd29ybGQ=<<<<'])
    expect(stdout).toBe('Base64 is invalid')
  })
})

export const stdoutFormat = (stdout, textSplit) => {
  const result = stdout
    .split(textSplit)
    .filter((item) => item)
    .map((item) => item.trim())

  return result
}

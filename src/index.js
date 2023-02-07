module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];

  for (const c of bracketsConfig) {
    openBrackets.push(c[0]);
    closeBrackets.push(c[1]);
  }

  const stack = [];

  if (str.length % 2 !== 0) {
    return false;
  }

  for (const char of str) {
    if (closeBrackets.includes(char)) {
      if (openBrackets.indexOf(stack.at(-1)) === closeBrackets.indexOf(char)) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

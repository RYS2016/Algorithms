function superReducedString(s) {
    const stack = [];   

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // Check if the current character matches the top of the stack
    if (stack.length > 0 && stack[stack.length - 1] === currentChar) {
      stack.pop(); // Remove the matching character from the stack
    } else {
      stack.push(currentChar); // Add the current character to the stack
    }
  }

  const reducedString = stack.join('');

  return reducedString.length === 0 ? 'Empty String' : reducedString;

}
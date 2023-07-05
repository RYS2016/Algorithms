function spinalCase(str) {
  //console.log(str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase())
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

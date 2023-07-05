/* Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

----Example-----


Delete a, to leave bcdbd. Now, remove the character c to leave the valid string bdbd with a length of 4. Removing either b or d at any point would not result in a valid string. Return .

Given a string , convert it to the longest possible string  made up only of alternating characters. Return the length of string . If no string  can be formed, return .

-----Function Description-------

Complete the alternate function in the editor below.

alternate has the following parameter(s):

string s: a string

-----Returns.-----

int: the length of the longest valid string, or  if there are none

----Input Format-----

The first line contains a single integer that denotes the length of .
The second line contains string . */

function alternate(s) {
    let maxLength = 0;                              // Variable to store the length of the longest valid string
    const uniqueChars = [...new Set(s)];            // Find the unique characters in the input string
  
    // Iterate over each unique pair of characters
    for (let i = 0; i < uniqueChars.length; i++) {
      for (let j = i + 1; j < uniqueChars.length; j++) {
        const char1 = uniqueChars[i];
        const char2 = uniqueChars[j];
        let currentString = '';                         // Variable to store the current string being constructed
        let isValid = true;                             // Flag to track if the current string is valid
  
        // Construct the current string using only the two alternating characters
        for (let k = 0; k < s.length; k++) {
          const currentChar = s[k];
  
          if (currentChar === char1 || currentChar === char2) {
            // Check if adding the current character violates the alternating pattern
            if (currentChar === currentString[currentString.length - 1]) {
              isValid = false;
              break;
            }
            currentString += currentChar;
          }
        }
  
        // Update the maximum length if the current string is valid and longer than the previous maximum length
        if (isValid && currentString.length > maxLength) {
          maxLength = currentString.length;
        }
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  console.log(alternate("beabeefeab"));                     // Output: 5
  console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab"));   // Output: 8
  console.log(alternate("asvkugfiugsalddlasguifgukvsa"));   // Output: 0
  
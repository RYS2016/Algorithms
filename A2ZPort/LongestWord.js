function findLongestWordWithMostVowels(sentence) {
    const words = sentence.match(/[a-zA-Z]+/g);                                // Match words using a regular expression
    if (!words) return null;                                                   //Handle the case where there are no words in the input sentence
  
    const result = words.reduce((acc, word) => {                               //Use reduce to find the longest word with the most vowels
        const vowelCount = (word.match(/[aeiou]/gi) || []).length;             //Count the number of vowels in the current word
        if (word.length > acc.longest.length || (word.length === acc.longest.length && vowelCount > acc.maxVowels)) {  //Compare the current word's length and vowel count with the accumulator
          return { longest: word, maxVowels: vowelCount };                     //Update the accumulator if the current word has more vowels or is longer
        }
        return acc;                                                            //Return the accumulator unchanged if the current word is not longer or doesn't have more vowels
      },
      { longest: "", maxVowels: 0 }                                            //initial value for the accumulator in the reduce function
    );
  
    return result.longest;                                                     //Return the longest word with the most vowels
  }
  const longestWord1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
  const longestWord2 = "The cat sat on the mat";                                //Sentence with Repeated Longest Word
  const longestWord3 = "";                                                      //Empty Sentence
  const longestWord4 = "This ~sentence~ has @special! characters";              //Sentence with Special Characters
  const longestWord5 = "Hello! How are you doing today? The number is 12345.";  //Sentence with Punctuation and Numbers
  const longestWord6 = "Supercalifragilisticexpialidocious is a long word";     //Sentence with Long Words
  const longestWord7 = "!@#$%^&*()_+";                                          //Sentence with Non-Alphabetic Characters Only
  const longestWord8 = "Solitude"                                               //Sentence with Single Word
  const longestWord9 = "123 456 7890";                                          //Sentence with Digits as Words
  const longestWord10 = "Hello 你好 World 世界"                                 //Sentences with a mix of languages

  console.log("Longest word with the most vowels Scenario 1 Result:", findLongestWordWithMostVowels(longestWord1));
  console.log("Longest word with the most vowels Scenario 2 Result:", findLongestWordWithMostVowels(longestWord2));
  console.log("Longest word with the most vowels Scenario 3 Result:", findLongestWordWithMostVowels(longestWord3));
  console.log("Longest word with the most vowels Scenario 4 Result:", findLongestWordWithMostVowels(longestWord4));
  console.log("Longest word with the most vowels Scenario 5 Result:", findLongestWordWithMostVowels(longestWord5));
  console.log("Longest word with the most vowels Scenario 6 Result:", findLongestWordWithMostVowels(longestWord6));
  console.log("Longest word with the most vowels Scenario 7 Result:", findLongestWordWithMostVowels(longestWord7));
  console.log("Longest word with the most vowels Scenario 8 Result:", findLongestWordWithMostVowels(longestWord8));
  console.log("Longest word with the most vowels Scenario 9 Result:", findLongestWordWithMostVowels(longestWord9));
  console.log("Longest word with the most vowels Scenario 10 Result:", findLongestWordWithMostVowels(longestWord10));
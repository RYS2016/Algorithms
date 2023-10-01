function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
  }
  
  function countVowels(word) {
    return word.split('').filter(char => isVowel(char)).length;
  }
  
  function findLongestWordWithMostVowels(sentence) {
    let longestWord = '';
    let maxVowelCount = 0;
  
    sentence.split(/\W+/).forEach(word => {
      const vowelCount = countVowels(word);
      if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowelCount)) {
        longestWord = word;
        maxVowelCount = vowelCount;
      }
    });
  
    return longestWord;
  }

  // Example usage

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
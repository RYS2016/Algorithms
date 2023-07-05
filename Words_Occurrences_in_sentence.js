/* Given a list of strings, determine how many times each word occurs and in what sentence they occur in. */

function countWords(sentences) {
    const wordCount = {};
    const wordSentences = {};
  
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      const words = sentence.split(' ');
  
      for (let j = 0; j < words.length; j++) {
        const word = words[j];
  
        // Update word count
        if (wordCount.hasOwnProperty(word)) {
          wordCount[word]++;
        } else {
          wordCount[word] = 1;
        }
  
        // Update word sentences
        if (wordSentences.hasOwnProperty(word)) {
          wordSentences[word].push(i);
        } else {
          wordSentences[word] = [i];
        }
      }
    }
  
    return { wordCount, wordSentences };
  }
  
  // Example usage
  const sentences = [
    "The quick brown fox",
    "jumps over the lazy dog",
    "The dog barks at the fox"
  ];
  
  const { wordCount, wordSentences } = countWords(sentences);
  
  // Display word count
  console.log("Word Count:");
  for (const word in wordCount) {
    if (wordCount.hasOwnProperty(word)) {
      console.log(`${word}: ${wordCount[word]}`);
    }
  }
  
  // Display word occurrences
  console.log("\nWord Occurrences:");
  for (const word in wordSentences) {
    if (wordSentences.hasOwnProperty(word)) {
      const sentenceIndices = wordSentences[word];
      const sentenceList = sentenceIndices.map(index => sentences[index]);
      console.log(`${word}: ${sentenceList.join(', ')}`);
    }
  }
  
/*There is a sequence of words in CamelCase as a string of letters, , having the following properties:

    It is a concatenation of one or more words consisting of English letters.
    All letters in the first word are lowercase.
    For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
    Given , determine the number of words in .
*/
function camelcase(s) {
 let wordCount = 1;
    
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        
        if(char === char.toUpperCase()){
            console.log(char.toUpperCase());
            wordCount++;
        }
    }
    return wordCount;
}
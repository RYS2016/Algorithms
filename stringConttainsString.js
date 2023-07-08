/* We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. Remeber that a subsequence maintains the order of characters selected from a sequence.

More formally, let  be the respective indices of h, a, c, k, e, r, r, a, n, k in string . If  is true, then  contains hackerrank.

For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.

------------------Example-----------------------------------------------------------

This contains a subsequence of all of the characters in the proper order. Answer YES


This is missing the second 'r'. Answer NO.


There is no 'c' after the first occurrence of an 'a', so answer NO.

-------------------Function Description--------------------------

Complete the hackerrankInString function in the editor below.

hackerrankInString has the following parameter(s):

string s: a string
--------------------Returns-------------------

string: YES or NO */

/*--------------------------------------------Approach--1----------------------*/

function hackerrankInString(s) {
    // Write your code here
      const hackerrank = {
    h: 1,
    a: 2,
    c: 1,
    k: 2,
    e: 1,
    r: 2,
    n: 1,
  };

  const originalStr = {};

  for (let i = 0; i < s.length; i++) {
    if (!originalStr[s[i]]) {
      originalStr[s[i]] = 1;
    } else {
      originalStr[s[i]]++;
    }
  }

  for (const key in hackerrank) {
    if (!(key in originalStr) || originalStr[key] < hackerrank[key]) {
      return "NO";
    }
  }

  return "YES";
}

/*--------------------------------------------Approach--2----------------------*/
function hackerrankInString(s) {
    const STRING_MATCH = "hackerrank";
    let matchIdx = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === STRING_MATCH[matchIdx]) 
            matchIdx +=1;
    }
    return matchIdx === STRING_MATCH.length ? "YES" :"NO";
}

/*--------------------------------------------Approach--3----------------------*/

function hackerrankInString(s) {
    return /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/g.test(s)? 'YES' : 'NO'
}

/*--------------------------------------------Approach--4----------------------*/

function hackerrankInString(s) {
    // Write your code here

    let words = "hackerrank";
    let wordPos = 0;

    for(let i =0; i < s.length; i++) {
            if(s[i] === words[wordPos]) {
                    wordPos++
            }
}

return wordPos === 10 ? 'YES' : 'NO'
}

/*----------------------------------------------Approach--5----------------------*/
let a='hackerrank';
    for(let i=0;i<a.length;i++){
        let b=s.indexOf(a[i]);
        if(b==-1){
            return 'NO';
        }
        s=s.slice(b+1);
    }
    return 'YES';
}

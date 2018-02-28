
function findLongestWord(str) {
  var strString = str.split(" ");
  
  var longestWord = strString.reduce(function(longest, currentWord){ 
    if (longest.length > currentWord.length)
        return longest;
    else 
        return currentWord;
    
  });
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


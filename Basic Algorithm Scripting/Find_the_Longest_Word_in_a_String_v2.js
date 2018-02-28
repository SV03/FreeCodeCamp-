
function findLongestWord(str) {
  var strString = str.split(" ");
  
  var longestWord = strSplit.sort(function(a, b) { 
    return b.length - a.length;
  });
  
  return longestWord[0].length;;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

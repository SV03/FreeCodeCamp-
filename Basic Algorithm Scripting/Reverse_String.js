function reverseString(str) {
  var splitString = str.split("");
   splitString = splitString.reverse("");
   splitString = splitString.join("");
  return splitString;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");



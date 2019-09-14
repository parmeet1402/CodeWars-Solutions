// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
  // 1. convert to lowercase
  const lowerCaseString = string.toLowerCase();
  // 2. Remove spaces
  const removedSpacesString = lowerCaseString.replace(/\s/g, "");
  // 3. convert to array
  const stringArray = removedSpacesString.split("");
  // 4. convert to char array
  const charArray = stringArray.map(str => str.charCodeAt(0));
  // 5. Loop through 97 to 122
  for (i = 97; i <= 122; i++) {
    if (!charArray.includes(i)) {
      return false;
    }
  }
  return true;
}

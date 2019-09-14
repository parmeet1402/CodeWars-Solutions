function accum(s) {
	const arrayFromString = s.split("");
  // 2. Convert to the desired form
  const newArray = arrayFromString.map((letter, index) => letter.toUpperCase().concat(letter.toLowerCase().repeat(index)));
  // 3. Combine the array
  const string = newArray.join("-");
  return string;
}

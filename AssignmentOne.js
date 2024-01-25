const Display_Shortest_Substrings = (s, x) => {
  let shortest_Substrings = [];
  let minLength = Infinity;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + x - 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        let subString = s.substring(i, j + 1);
        if (subString.length >= x && subString.length < minLength) {
          minLength = subString.length;
          shortest_Substrings = [subString];
        } else if (subString.length === minLength) {
          shortest_Substrings.push(subString);
        }
      }
    }
  }

  if (shortest_Substrings.length > 0) {
    console.log(shortest_Substrings.join(" "));
  } else {
    console.log("not-found");
  }
};
Display_Shortest_Substrings("abccdbacca", 5);

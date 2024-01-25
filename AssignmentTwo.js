const transformString = (s) => {
  let result = [];
  let prevChanged = false;

  for (let i = 0; i < s.length; i++) {
    let asciiVal = s.charCodeAt(i);

    if (asciiVal % 2 === 0 && i < s.length - 1 && !prevChanged) {
      let nextAsciiVal = asciiVal % 7;
      let newChar = String.fromCharCode(
        (s.charCodeAt(i + 1) + nextAsciiVal) % 128
      );
      result.push(s[i], newChar);
      prevChanged = true;
      i++;
    } else if (asciiVal % 2 !== 0 && i > 0 && !prevChanged) {
      let prevAsciiVal = s.charCodeAt(i - 1) % 5;
      let newChar = String.fromCharCode(
        (s.charCodeAt(i - 1) - prevAsciiVal + 128) % 128
      );
      result[result.length - 1] = newChar;
      prevChanged = true;
    } else {
      result.push(s[i]);
      prevChanged = false;
    }
  }

  result = result.map((char) =>
    char.charCodeAt(0) < 32 || char.charCodeAt(0) > 127 ? "S" : char
  );

  return result.join("");
};

let result = transformString("sHQen}");
console.log(result);

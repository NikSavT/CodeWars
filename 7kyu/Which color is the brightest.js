// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// For example,

// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:

// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
// Note that both input and output should use upper case for characters A, B, C, D, E, F.
function deleteHashSymbol(array) {
  const noHashArray = [];
  array.forEach(element => {
    noHashArray.push(element.slice(1))
  });
  return noHashArray;
}

function arrayOfNumbers(str) {
  noHashstr = str.slice(1);
  let array = [];

  for (let i = 0; i < noHashstr.length; i += 2) {
    array.push(parseInt(`${noHashstr[i]}${noHashstr[i + 1]}`, 16))
  }
  return array;

}

function brightest(colors) {

  const matrix = [];
  colors.forEach(element => {
    matrix.push(arrayOfNumbers(element))
  });
  console.log(matrix);
  console.log(matrix[0][0]);
  const answear = (matrix) => {
    for (let i; i <= 2; i++) {
      console.log(matrix[1][0]);
      if (matrix[0][i] === matrix[1][i]) continue;

      matrix[0][i] < matrix[1][i] ? colors[0] : colors[1];
    }
  }
  return answear(matrix);
}
// console.log(deleteHashSymbol(["#ABCDEF", "#123456"]));
// console.log(arrayOfNumbers('#ABCDEF'));
console.log(brightest(["#ABCDEF", "#123456"]));
console.log(brightest(["#ABCDEF", "#123456"]));
console.log(brightest(["#ABCDEF", "#123456"]));
console.log(brightest(["#ABCDEF", "#123456"]));


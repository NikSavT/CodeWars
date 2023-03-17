// // DESCRIPTION:
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")//should return :

// "333122"
// explode("102269")// should return : "12222666666999999999"



// //------------------------------ My Solution ------------------------------

function explode(s) {
  let newS = '';
  for (const e of s) {
    newS += e.repeat(+e)
  }
  return newS;
}


// //------------------------------Solution 1------------------------------

explode=s=>[...s].map(n=>n.repeat(n)).join``

// //------------------------------Solution 2------------------------------
const explode = s => s.replace(/\d/g, d => d.repeat(d));

let str = '"102269"'
console.log(explode(str));//"12222666666999999999"
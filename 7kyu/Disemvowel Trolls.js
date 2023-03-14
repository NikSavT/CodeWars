//------------------------------ My Solution ------------------------------
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'u', 'o'];
  let sumStr = '';

  for (let e of str) {
    if (!vowels.includes(e.toLowerCase())) {
      sumStr += e;
    }
  };
  return sumStr;
}

//------------------------------Solution 1------------------------------

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//------------------------------Solution 2------------------------------

function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'');
}

//------------------------------CHECK------------------------------
console.log(disemvowel("This website is for losers LOL!"));//"Ths wbst s fr lsrs LL!"
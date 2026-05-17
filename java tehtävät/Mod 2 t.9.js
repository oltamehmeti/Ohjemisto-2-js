// Funktio, joka palauttaa vain parilliset luvut
function even(array) {
  let result = [];

  for (let num of array) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}

// Pääohjelma
const numbers = [2, 7, 4];

const evenNumbers = even(numbers);

// Tulostetaan molemmat taulukot konsoliin
console.log("Alkuperäinen taulukko:", numbers);
console.log("Parilliset luvut:", evenNumbers);
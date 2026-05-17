// Funktio, joka palauttaa satunnaisen nopan silmäluvun (1–6)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let roll;

// Heitetään noppaa kunnes saadaan 6
do {
  roll = rollDice();
  console.log(roll);
} while (roll !== 6);
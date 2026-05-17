// Kysytää käyttäjältä tiedot
const noppienMaara = parseInt(prompt("Kuinka monta noppaa heitetään?"));
const haluttuSumma = parseInt(prompt("Mikä silmälukujen summa halutaan?"));

const toistot = 10000;
let onnistumiset = 0;

// Simuloidaan heittoja
for (let i = 0; i < toistot; i++) {
  let summa = 0;

  // Heitetään nopat
  for (let j = 0; j < noppienMaara; j++) {
    summa += Math.floor(Math.random() * 6) + 1;
  }

  // Tarkistetaan tuliko haluttu summa
  if (summa === haluttuSumma) {
    onnistumiset++;
  }
}

// Lasketaan todennäköisyys prosentteina
const todennakoisyys = (onnistumiset / toistot) * 100;

// Tulostetaan tulos HTML-sivulle
document.write(
  `Todennäköisyys saada summa ${haluttuSumma} ${noppienMaara} nopalla on ${todennakoisyys.toFixed(2)}%`
);
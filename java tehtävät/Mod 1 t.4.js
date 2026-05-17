// Kysytään käyttäjän nimi
const nimi = prompt("Anna sun nimi:");

// Arvotaan numero väliltä 1–4
const satunnainenNumero = Math.floor(Math.random() * 4) + 1;

let tupa;

// Määritetään Hogwardsin tupa
if (satunnainenNumero === 1) {
  tupa = "Gryffindor";
} else if (satunnainenNumero === 2) {
  tupa = "Slytherin";
} else if (satunnainenNumero === 3) {
  tupa = "Hufflepuff";
} else {
  tupa = "Ravenclaw";
}

// Tulostetaan lopputulos HTML-sivulle
document.write(`${nimi}, sä kuulut tupaan ${tupa}.`);
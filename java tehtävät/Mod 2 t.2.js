// Kysytään osallistujien määrä
const maara = parseInt(prompt("Kuinka monta osallistujaa on?"));

let osallistujat = [];

// Kysytään kaikkien nimet
for (let i = 0; i < maara; i++) {
  const nimi = prompt(`Anna osallistujan ${i + 1} nimi:`);
  osallistujat.push(nimi);
}

// Järjestetään nimet aakkosjärjestykseen
osallistujat.sort();

// Tulostetaan nimet HTML-sivulle listana
document.write("<ol>");

for (let nimi of osallistujat) {
  document.write(`<li>${nimi}</li>`);
}

document.write("</ol>");
<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <title>TV-sarjat</title>
</head>
<body>

<input type="text" id="query" placeholder="Etsi sarjoja">
<button onclick="searchShows()">Hae</button>

<div id="results"></div>

<script>
async function searchShows() {
  const query = document.getElementById("query").value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  const resultsDiv = document.getElementById("results");

  // Tyhjennä vanhat tulokset
  resultsDiv.innerHTML = "";

  for (let item of data) {
    const show = item.show;

    const article = document.createElement("article");

    // Nimi
    const h2 = document.createElement("h2");
    h2.textContent = show.name;

    // Linkki
    const link = document.createElement("a");
    link.href = show.url;
    link.target = "_blank";
    link.textContent = "Lisätietoa";

    // Kuva (optional chaining)
    const img = document.createElement("img");
    img.src = show.image?.medium || "";
    img.alt = show.name;

    // Summary
    const summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = show.summary || "";

    // Kootaan article
    article.appendChild(h2);
    article.appendChild(link);
    article.appendChild(img);
    article.appendChild(summaryDiv);

    // Lisätään sivulle
    resultsDiv.appendChild(article);
  }
}
</script>

</body>
</html>
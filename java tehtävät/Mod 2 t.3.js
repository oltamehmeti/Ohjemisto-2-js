<ul id="lista"></ul>

<script>
  let dogs = [];

  for (let i = 0; i < 6; i++) {
    const dogName = prompt(`Anna koiran ${i + 1} nimi:`);
    dogs.push(dogName);
  }

  dogs.sort().reverse();

  const lista = document.getElementById("lista");

  for (let dog of dogs) {
    lista.innerHTML += `<li>${dog}</li>`;
  }
</script>

</body>
</html>
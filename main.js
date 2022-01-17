const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "flexbox",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  // 1 Recorrer el array
  cosasQueAprendimos.forEach((cosa) => {
    // 2 Creaar el li (hijo)
    const nuevoItem = document.createElement("li");
    nuevoItem.innerText = cosa.tema;
    nuevoItem.className = cosa.class;
    // 3 Agregar el li al padre (ul)
    document.querySelector("ul.lista").appendChild(nuevoItem);
  });
}

main();

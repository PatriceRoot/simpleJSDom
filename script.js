const MONTAGNES = [
  { nomm: "Kilimanjaro", longueur: 5895, pays: "Tanzanie" },
  { nomm: "Everest", longueur: 8848, pays: "Nepal" },
  { nomm: "Mount Fuji", longueur: 3776, pays: "Japon" },
  { nomm: "Vaalserberg", longueur: 323, pays: "Netherlands" },
  { nomm: "Denali", longueur: 6168, pays: "USA" },
  { nomm: "Popocatepetl", longueur: 5465, pays: "Mexique" },
  { nomm: "Mont Blanc", longueur: 4808, pays: "Italie/France" },
  { nomm: "Nyiragongo", longueur: 4808, pays: "Congo" },
];

let table = document.querySelector("#mountainTable");

MONTAGNES.forEach((montagne) => {
  let row = document.createElement("tr");

  let cell1 = document.createElement("td");
  cell1.textContent = montagne.nomm;
  row.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.textContent = montagne.longueur;
  row.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.textContent = montagne.pays;
  row.appendChild(cell3);

  table.appendChild(row);
});

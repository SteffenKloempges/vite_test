console.clear();
console.log("%c map ", "background: gold; color: tomato;");
// ========================
//          map()
// ========================
// map(callback) durchläuft das ganze array und gibt ein neues array zurück
// wir können mit einem befehl alle elemente in einem array verändern/anpassen
// man kann die elemente auch direkt auf eine bedingung prüfen

// Wir würden jetzt gerne an jedes Element ein "!" hängen
const shoppingList: string[] = ["Eis", "Schokolade", "Eier", "Nudeln", "Salat", "Gurke", "Fleisch"];

// früher --> super umständlich und auch bei sehr großen arrays nicht mehr möglich
// shoppinglist[0] = shoppinglist[0] + "!";
// shoppinglist[1] = shoppinglist[1] + "!";
// shoppinglist[2] = shoppinglist[2] + "!";

const shoppingListWithExclamationMark: string[] = shoppingList.map((item) => {
  return item + "!";
});

console.log(shoppingListWithExclamationMark);

// alle elemente in großbuchstaben
const shoppingListUpper: string[] = shoppingList.map((item) => item.toUpperCase());
console.log(shoppingListUpper);

// neben den einzelnen elementen, kann man sich auch noch den jeweiligen index mit ausgeben lassen
const shoppingListWithOrder: string[] = shoppingList.map((item, index) => {
  // index fängt bei 0 an, um jetzt die liste bei 1.) starten zulassen machen wir ein + 1
  return `${index + 1}.) ${item}`;
})

console.log(shoppingListWithOrder);

console.log("%c forEach ", "background: gold; color: tomato;");
// ========================
//         forEach()
// ========================
// funktioniert wie map(), mit dem unterschied das es kein neues array zurück gibt
// forEach(callback) wird zur wiedergabe/ausgeben von daten genutzt

shoppingList.forEach((item) => {
  console.log(item);
})

shoppingList.forEach((item) => {
  if (item.length <= 5) {
    console.log(item)
  }
})







const checkBtn = document.querySelector('checkBtn');

if (checkBtn) {
  checkBtn.addEventListener("clik", () => {
    console.log("click")
  })
}
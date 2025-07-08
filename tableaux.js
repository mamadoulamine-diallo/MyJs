// Retourne aléatoirement un des items du tableau `items`
const getRandomItem = (items) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

// Retourne le premier item du tableau `items`
const getFirstItem = (items) => {
  return items[0];
};

// Retourne le dernier item du tableau `items`
const getLastItem = (items) => {
  return items[items.length - 1];
};

// Retourne les `n` premiers items de `items`
// ex: getFirstItems([1, 2, 3, 4], 2) retourne [1, 2]
const getFirstItems = (items, n) => {
  return items.slice(0, n);
};

// Ajoute un nombre aléatoire entre 0 et 1 (ex: 0.132, 0.723423, etc.)
// au DÉBUT du tableau passé en paramètre
const addRandomItem = (items) => {
  const randomNumber = Math.random();
  items.unshift(randomNumber);
  return items;
};

////////////////////////Vacations //////////////////

function makeLuggage(destinations) {
  const items = [];
  if (destinations.length === 0) return [];

  items.push("appareil photo");

  if (destinations.includes("forêt")) {
    items.push("chaussures de rando");
  }
  if (destinations.includes("montagne")) {
    items.push("crème solaire");
    items.push("chaussures de rando");
    items.push("skis");
    items.push("bonnet");
  }
  if (destinations.includes("plage")) {
    if (!destinations.includes("montagne")) {
      items.push("crème solaire");
    }
    items.push("maillot de bain");
  }

  return items;
}

console.log(makeLuggage(["montagne", "plage"]));
console.log(makeLuggage(["plage"]));

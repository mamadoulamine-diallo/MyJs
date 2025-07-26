function present(person) {
  const { name, age, city, isStudent } = person;

  if (isStudent) {
    console.log(`Je m'appelle ${name}, j'ai ${age} ans et j'étudie à ${city}.`);
  } else {
    console.log(`Je m'appelle ${name}, j'ai ${age} ans et j'habite à ${city}.`);
  }
}
////////////////////////////////////////////////////

const recipe = {
  introduction:
    "Voici une recette pour apprendre à réaliser des coques de macarons au chocolat.",
  ingredients: [
    { name: `blanc d'œuf`, poids: 36 },
    { name: `sucre en poudre`, poids: 27 },
    { name: `poudre d'amande`, poids: 45 },
    { name: "sucre glace", poids: 47 },
    { name: "cacao en poudre", poids: 5 },
  ],
  instructions: [
    `Mélanger la poudre d'amande, le cacao et le sucre glace`,
    `Monter les blancs en neige et ajouter le sucre en poudre pour faire une meringue`,
    `Ajoute la première préparation à la meringue`,
    `Poche des petites boules puis laisse sécher`,
    `Cuit le tout au four à 120 pendant 10-15 minutes`,
  ],
};

console.log(recipe.introduction);
console.log("");

console.log("Ingrédients :");
for (let i = 0; i < recipe.ingredients.length; i++) {
  const ingr = recipe.ingredients[i];
  console.log(`- ${ingr.name} (${ingr.poids}g)`);
}

console.log("");

console.log("Instructions :");
for (let i = 0; i < recipe.instructions.length; i++) {
  console.log(`${i + 1}. ${recipe.instructions[i]}`);
}
//////////////////////////////////////////////////////

const pokedex = [
  { id: 1, name: "Bulbizarre", evolution: 2, type: "plante" },
  { id: 2, name: "Herbizarre", evolution: 3, type: "plante" },
  { id: 3, name: "Florizarre", evolution: -1, type: "plante" },
  { id: 4, name: "Salamèche", evolution: 5, type: "feu" },
  { id: 5, name: "Reptincel", evolution: 6, type: "feu" },
  { id: 6, name: "Dracaufeu", evolution: -1, type: "feu" },
  { id: 7, name: "Carapuce", evolution: 8, type: "eau" },
  { id: 8, name: "Carabaffe", evolution: 9, type: "eau" },
  { id: 9, name: "Tortank", evolution: -1, type: "eau" },
];

function countpokemonsFromType(y) {
  let count = 0;
  for (let i = 0; i < pokedex.length; i++) {
    poke = pokedex[i];
    if (poke.type === y) {
      count++;
    }
  }
  return count;
}
console.log(countpokemonsFromType("feu"));

function getPokemonsFromType(z) {
  let result = [];
  for (let i = 0; i < pokedex.length; i++) {
    poke = pokedex[i];
    if (poke.type === z) {
      result.push(pokedex[i]);
    }
  }
  return result;
}
console.log(getPokemonsFromType("eau"));

function getPokemonFromName(n) {
  for (let i = 0; i < pokedex.length; i++) {
    poke = pokedex[i];
    if (poke.name === n) {
      return pokedex[i];
    }
  }
}
console.log(getPokemonFromName("Carapuce"));

function getPokemonEvolution(name) {
  const pokemon = getPokemonFromName(name);
  if (!pokemon || pokemon.evolution === -1) {
    return null;
  }

  for (let i = 0; i < pokedex.length; i++) {
    if (pokedex[i].id === pokemon.evolution) {
      return pokedex[i];
    }
  }

  return null;
}
//////////////////////////////////////////////////////////

// Retourne aléatoirement des éléments du tableau choice
const randomChoice = (choices) => {
  return choices[Math.floor(Math.random() * choices.length)];
};

// Retourne un nombre aléatoire, compris entre min et max.
// Le nombre de chiffres après la virgule est défini par precision
const randomRange = (min, max, precision) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};

function generateFlowers(width, depth, count) {
  const flowers = [];
  const flowerTypes = ["🌹", "🌷", "🌻"];

  for (let i = 0; i < count; i++) {
    const flower = {
      type: randomChoice(flowerTypes),
      size: Math.floor(randomRange(15, 21, 0)), // 15 à 20 inclus
      x: randomRange(0, width, 2),
      y: randomRange(0, depth, 2),
    };
    flowers.push(flower);
  }

  return flowers;
}
console.log(generateFlowers(6, 6, 5));

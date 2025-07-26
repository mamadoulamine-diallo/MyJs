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

const person = {
  name: "Lina",
  hobbies: ["lecture", "musique", "natation"],
};
function printHobbies(person) {
  console.log(`${person.name} aime :`);
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`- ${person.hobbies[i]}`);
  }
}
printHobbies(person);

function addHobby(person, hobby) {
  person.hobbies.push(hobby);
}

addHobby(person, "dessin");
printHobbies(person);
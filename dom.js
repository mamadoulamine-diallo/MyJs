// ⚠️ ne supprime pas ces variables
/*
let people = [
  "une personne",
  "deux personnes",
  "trois personnes",
  "quatre personnes",
];
let times = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

// ajoute ton code ci-dessous :
const person = document.getElementById("person");
const time = document.getElementById("time");

// Remplir le select "person
let personHTML = "";
people.forEach((ppl) => {
  personHTML += `<option value="${ppl}">${ppl}</option>`;
});
person.innerHTML = personHTML;

// Remplir le select "time"
let timeHTML = "";
times.forEach((t) => {
  timeHTML += `<option value="${t}">${t}</option>`;
});
time.innerHTML = timeHTML;

////////////////////Panier/Piano///////////////////////

const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
  if (event.target.innerText === "Panier 🧺") {
    event.target.innerText = "Piano 🎹";
  } else {
    event.target.innerText = "Panier 🧺";
  }
});

//////////////////////////////////////////////////////////////

const choices = document.querySelectorAll("#choices > div");
const message = document.getElementById("message");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Supprimer .selected de tous les enfants
    choices.forEach((c) => c.classList.remove("selected"));

    // Ajouter .selected à l'élément cliqué
    choice.classList.add("selected");

    // Mettre à jour le message avec le data-name
    const name = choice.dataset.name;
    message.innerText = `${name}, je te choisis !`;
  });
});
*/
// Ne modifie pas cet objet, mais utilise dans le code d'affichage

const recipe = {
  introduction:
    "Voici une recette pour apprendre à réaliser des coques de macarons au chocolat.",
  ingredients: [
    { name: `blanc d'œuf`, weight: 36 },
    { name: `sucre en poudre`, weight: 27 },
    { name: `poudre d'amande`, weight: 45 },
    { name: `sucre glace`, weight: 47 },
    { name: `cacao en poudre`, weight: 5 },
  ],
  instructions: [
    `Mélanger la poudre d'amande, le cacao et le sucre glace`,
    `Monter les blancs en neige et ajouter le sucre en poudre pour faire une meringue`,
    `Ajoute la première préparation à la meringue`,
    `Poche des petites boules puis laisse sécher`,
    `Cuit le tout au four à 120 pendant 10-15 minutes`,
  ],
};

// Écris ton code ci-dessous :
// Données de base
const BASE_PEOPLE = 2; // la recette de base est pour 2 personnes
let peopleCount = BASE_PEOPLE;

const idPlus = document.getElementById("plus");
const idMinus = document.getElementById("minus");
const people = document.getElementById("peopleCount");
const ingredientsList = document.getElementById("ingredients");
const instructionsList = document.getElementById("instructions");

// Fonction de mise à jour de l'affichage des ingrédients
function updateIngredients() {
  let html = "";
  recipe.ingredients.forEach((ingr) => {
    // On adapte le poids à la portion
    const newWeight = Math.round((ingr.weight / BASE_PEOPLE) * peopleCount);
    html += `<li>${ingr.name} (${newWeight}g)</li>`;
  });
  ingredientsList.innerHTML = html;
}

// Fonction de mise à jour du nombre de personnes
function updatePeopleText() {
  people.innerText =
    peopleCount === 1 ? "1 personne" : `${peopleCount} personnes`;
}

// Bouton +
idPlus.addEventListener("click", () => {
  if (peopleCount < 10) {
    peopleCount++;
    updatePeopleText();
    updateIngredients();
  }
});

// Bouton -
idMinus.addEventListener("click", () => {
  if (peopleCount > 1) {
    peopleCount--;
    updatePeopleText();
    updateIngredients();
  }
});

// Affichage initial
updatePeopleText();
updateIngredients();

// Instructions (elles ne changent pas)
let htmlInst = "";
recipe.instructions.forEach((inst) => {
  htmlInst += `<li>${inst}</li>`;
});
instructionsList.innerHTML = htmlInst;

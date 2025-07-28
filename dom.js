// ⚠️ ne supprime pas ces variables

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

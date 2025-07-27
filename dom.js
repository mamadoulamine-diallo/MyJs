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

// const colorEl = document.getElementById("colorEl");

// const colorGenerator = () => {
//   const redColor = Math.floor(Math.random() * 256);
//   const greenColor = Math.floor(Math.random() * 256);
//   const blueColor = Math.floor(Math.random() * 256);

//   const color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

//   document.body.style.backgroundColor = color;
//   colorEl.innerText = color;
// };

// setInterval(colorGenerator, 2000);

const input = document.getElementById("todo");
const formEl = document.querySelector(".form");
const taskContainer = document.querySelector(".tasks");

// Charger les tâches depuis le localStorage au démarrage
let tasks = JSON.parse(localStorage.getItem("listes")) || [];

// Fonction pour afficher une tâche
function renderTask(task) {
  const div = document.createElement("div");
  div.textContent = task;
  div.classList.add("task");

  // Supprimer tâche au clic
  div.addEventListener("click", () => {
    tasks = tasks.filter((t) => t !== task); // retire de la liste
    localStorage.setItem("listes", JSON.stringify(tasks));
    div.remove(); // retire du DOM
  });

  taskContainer.appendChild(div);
}

// Afficher les tâches existantes au démarrage
tasks.forEach(renderTask);

// Ajouter nouvelle tâche
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  tasks.push(task); // ajouter à la liste
  localStorage.setItem("listes", JSON.stringify(tasks)); // sauvegarde

  renderTask(task); // affiche

  input.value = "";
});

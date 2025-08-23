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

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;
  

  // if (task === "") return;

  const div = document.createElement("div");
  div.textContent = task;
  div.classList.add("task");

  taskContainer.appendChild(div);

  input.value = "";

  div.addEventListener('click', () => {
    div.remove();
  })
});

const colorEl = document.getElementById("colorEl");

const colorGenerator = () => {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);

  const color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

  document.body.style.backgroundColor = color;
  colorEl.innerText = color;
};

setInterval(colorGenerator, 2000);

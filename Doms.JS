/////////////////////DOM-1////////////////////////

function createCircle(size, color) {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.borderRadius = "50%";
  el.style.pointerEvents = "none";
  el.style.mixBlendMode = "difference"; // tous en blend
  el.style.background = color;
  document.body.appendChild(el);
  return el;
}

// Ronds
const mouse1 = createCircle(20, "blue");
const mouse2 = createCircle(50, "white");
const mouse3 = createCircle(100, "linear-gradient(45deg, #000, #555)");

// Pour le dégradé CSS sur mouse3
mouse3.style.backgroundImage = "linear-gradient(45deg, #000, #555)";
mouse3.style.backgroundColor = "";

// Déplacement
document.addEventListener("mousemove", (e) => {
  mouse1.style.left = e.pageX - 10 + "px";
  mouse1.style.top = e.pageY - 10 + "px";

  mouse2.style.left = e.pageX - 25 + "px";
  mouse2.style.top = e.pageY - 25 + "px";

  mouse3.style.left = e.pageX - 50 + "px";
  mouse3.style.top = e.pageY - 50 + "px";
});

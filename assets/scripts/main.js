let counter = 0;
let display = document.getElementById("counter");
let startTasbih = document.getElementById("start_tasbih");
let reset = document.getElementById("reset");

startTasbih.onclick = () => {
  counter++;
  display.textContent = counter;
};

reset.onclick = () => {
  display.textContent = 0;
};

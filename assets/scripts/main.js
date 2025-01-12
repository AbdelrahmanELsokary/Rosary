let counter = 0;
let display = document.getElementById("counter");
let startTasbih = document.getElementById("start_tasbih");
let reset = document.getElementById("reset");

startTasbih.onclick = () => {
  counter++;
  display.textContent = counter;
};

reset.onclick = () => {
  counter = 0;
  display.textContent = counter;
};

let tasbih1 = document.querySelectorAll(".tasbih");

tasbih1.forEach((tasbih1) => {
  tasbih1.onclick = () => {
    tasbih1.style.backgroundColor = "chocolate";
  };
});

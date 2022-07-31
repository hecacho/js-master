let clickcount = 0;

const popcatImg = document.querySelector("#popcat_img");
const popcatClick = document.querySelector(".click_count");

console.dir(popcatImg);
console.dir(popcatClick);
function handlePopcatMousedown() {
  popcatImg.src = "img/popcat_open.png";
  clickcount++;
  popcatClick.innerText = clickcount;
}
function handlePopcatMouseup() {
  popcatImg.src = "img/popcat_close.jpg";
}

popcatImg.addEventListener("mousedown", handlePopcatMousedown);
popcatImg.addEventListener("mouseup", handlePopcatMouseup);

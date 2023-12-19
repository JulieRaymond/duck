const duck = document.getElementById("duck");
const bullets = document.getElementsByClassName("bullet");
const stepX = 100;
const stepY = 50;
const maxY = 450;
const maxX = 1000;
let bulletCount = 3; 

//ETAPE 1 et 2 :
document.addEventListener("keydown", (event) => {
  const duck = document.getElementById("duck");

  // Remove existing direction classes
  duck.classList.remove("duck-left", "duck-up", "duck-right", "duck-down");

  switch (event.key) {
    case "ArrowLeft": // Left arrow key
      moveDuck(-stepX, 0);
      duck.classList.add("duck-left");
      break;
    case "ArrowUp": // Up arrow key
      moveDuck(0, -stepY);
      duck.classList.add("duck-up");
      break;
    case "ArrowRight": // Right arrow key
      moveDuck(stepX, 0);
      duck.classList.add("duck-right");
      break;
    case "ArrowDown": // Down arrow key
      moveDuck(0, stepY);
      duck.classList.add("duck-down");
      break;
  }
});

function moveDuck(deltaX = 0, deltaY = 0) {
  let posX = duck.offsetLeft;
  let posY = duck.offsetTop;

  posX = Math.max(0, Math.min(maxX, posX + deltaX));
  posY = Math.max(0, Math.min(maxY, posY + deltaY));

  duck.style.left = posX + "px";
  duck.style.top = posY + "px";
}

// duck.addEventListener("click", function () {
//   let bulletCount = 3;
//   shoot();
//   if (bulletCount === 0) {
//     gameOver();
//   }
// });
// bulletCount--;

duck.addEventListener("click", function () {
  // Vérifie s'il reste des balles avant de tirer
  if (bulletCount > 0) {
    shoot();
    bulletCount--;

    // Vérifie si le joueur n'a plus de balles
    if (bulletCount === 0) {
      gameOver(); // Appelle Game Over quand il n'y a plus de balles
    }
  }
}); 

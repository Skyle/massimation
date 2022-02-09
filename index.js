let malgrund, ball, animation;
const optionen = {
  ball: { size: 24 },
  running: true,
};

window.onload = () => {
  malgrund = document.getElementById("malgrund");
  update();
};

function update() {
  if (optionen.running) {
    malgrund.appendChild(createBall());
    animation = window.requestAnimationFrame(update);
  }
}

function createBall(color = "black", size = optionen.ball.size + "px") {
  ball = document.createElement("div");
  ball.style.height = size;
  ball.style.width = size;
  ball.style.backgroundColor = "#" + getColor();
  ball.style.position = "absolute";
  [randomX, randomY] = getRandomXY();
  ball.style.transform = "translate(" + randomX + "px ," + randomY + "px)";
  ball.style.borderRadius = "50%";
  return ball;
}

function getRandomXY() {
  const xCord = getRandomZahlZwischen(
    0,
    window.innerWidth - optionen.ball.size
  );
  const yCord = getRandomZahlZwischen(
    0,
    window.innerHeight - optionen.ball.size
  );
  return [xCord, yCord];
}

function getRandomZahlZwischen(min, max) {
  return Math.random() * (max - min) + min;
}

function getColor() {
  const colors = ["047857", "1d4ed8", "db2777"];
  return colors[Math.floor(Math.random() * colors.length)];
}

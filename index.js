let malgrund, ball;
const optionen = {
  ball: { size: 24 },
};
window.onload = () => {
  malgrund = document.getElementById("malgrund");
  malgrund.appendChild(createBall());
};

function createBall(color = "black", size = optionen.ball.size + "px") {
  ball = document.createElement("div");
  ball.style.height = size;
  ball.style.width = size;
  ball.style.backgroundColor = color;
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

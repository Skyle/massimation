let malgrund;
window.onload = () => {
  malgrund = document.getElementById("malgrund");
  var p = document.createElement("p");
  p.innerHTML = "Hallo";
  p.style.fontSize = "50px";
  malgrund.appendChild(p);
};

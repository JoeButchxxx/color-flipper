const colors = ["green", "blue", "hotpink", "yellowgreen", "greenyellow", "orange", "grey", "goldenrod", "rebeccapurple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
  // Get Random Number Between 0-3

  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

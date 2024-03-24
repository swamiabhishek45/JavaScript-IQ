const pbtm = document.querySelector(".pbtm");
const timer = document.querySelector("#timer");
const hit = document.querySelector("#hit");
const score = document.querySelector("#score");

var time = 5;
var scoreVal = 0;

function createBubble() {
  var clutter = "";
  for (var i = 1; i <= 114; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }
  pbtm.innerHTML = clutter;
}

function getNewHit() {
  var num = Math.floor(Math.random() * 10);
  hit.textContent = num;
}

function runTimer() {
  var ID = setInterval(function () {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(ID);
      pbtm.innerHTML = `<div class="gameOver">
      <h1>GAME OVER</h1>
      <button onclick = location.reload() >Restart Game</button>
      </div>`;
    }
  }, 1000);
}

function increaseScore() {
  scoreVal += 10;
  score.textContent = scoreVal;
}

function decreaseScore() {
  if (scoreVal > 0) {
    scoreVal -= 10;
    score.textContent = scoreVal;
  }
}

pbtm.addEventListener("click", function (dets) {
  const clickedNum = Number(dets.target.textContent);
  const targetElement = dets.target;
  if (clickedNum === parseInt(hit.textContent)) {
    increaseScore();
    getNewHit();
    createBubble();
  } else if (clickedNum !== parseInt(hit.textContent)) {
    decreaseScore();
    targetElement.style.backgroundColor = "red";
    setTimeout(function () {
      targetElement.style.backgroundColor = "rgb(77, 128, 77)";
    }, 1000);
  }
});

getNewHit();
createBubble();
runTimer();

var time = 60;
function createBubble() {
  const pbtm = document.querySelector(".pbtm");

  var clutter = "";

  for (var i = 1; i <= 114; i++) {
    var num = Math.floor(Math.random() * 100);
    clutter += `<div class="bubble">${num}</div>`;
  }

  pbtm.innerHTML = clutter;
}

function runTimer() {
  const timer = document.querySelector("#timer");
  var ID = setInterval(function () {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(ID);
    }
  }, 1000);
}

runTimer();
createBubble();

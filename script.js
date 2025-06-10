let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["first", "second", "third", "fourth"];
let highestscore =0;
let score = document.createElement("h4")


document.addEventListener("keypress", (e) => {
  if (started == false && e.code == "Enter") {
    started = true;
    levelup();
  }
});
function levelup() {
  userseq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let ranind = Math.floor(Math.random() * 3);
  let colour = btns[ranind];
  let randbtn = document.querySelector(`.${colour}`);
  gameseq.push(colour);
  flashbtn(randbtn);
}

function flashbtn(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userflashbtn(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}
function checkAns(idx) {
  if (gameseq[idx] === userseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 750);
    }
    if (userseq.length >= 5) {
      document.querySelector("button").style.display = "block";
    }
  } else {
    h3.innerHTML = `Game Over your score was <b>${level}<b> <br> click any key to start again`;
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 250);
    
    restart();
  }
}
function btnpress() {
  let btn = this;
  userflashbtn(btn);
  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  let idx = userseq.length - 1;
  checkAns(idx);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function restart() {
  let highestscore =0;
  if(highestscore < level){
    highestscore=level
  }
  score.innerText=`the highest score is ${highestscore}`
 document.body.appendChild(score)
  gameseq = [];
  userseq = [];
  started = false;
  level = 0;
  document.querySelector("button").style.display = "none";
}

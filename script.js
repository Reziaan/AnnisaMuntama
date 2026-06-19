function hideAll() {
  const menus = document.querySelectorAll(".container");
  menus.forEach(menu => menu.classList.add("hidden"));
}

function openGift() {
  hideAll();
  document.getElementById("menuGift").classList.remove("hidden");
}

function noThanks() {
  alert("It's okay, I still love you ❤️");
  alert("You can try again 😢");
}


function backToHome() {
  hideAll();
  document.getElementById("menuAwal").classList.remove("hidden");
}

function backToGift() {
  hideAll();
  document.getElementById("menuGift").classList.remove("hidden");
}

function showMenu(menuId) {
  hideAll();
  document.getElementById(menuId).classList.remove("hidden");
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

function playMusic() {
  const music = document.getElementById("bgMusic");

  if (music.paused) {
    music.volume = 0.5;
    music.play().catch(error => {
      console.log("Music error:", error);
    });
  }
}

const music = document.getElementById("bgMusic");
const loveText = document.getElementById("loveText");

function playMusic() {
  music.play();
  loveText.innerText = "💖 Lagu ini untukmu 💖";
}

function pauseMusic() {
  music.pause();
  loveText.innerText = "⏸ Musik dijeda";
}

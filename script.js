const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classlist != "animate") {
    dino.classList.add("animate");
  }
    dino.classList.add("animate");
    setTimeout(function () {
    dino.classList.remove("animate");
  }, 500)
}


var checkDead = setInterval(function () {
  var dinoTop = parseInt(window.getComputedStyle(
    dino).getPropertyValue("top"));
  var cactusleft = parseInt(window.getComputedStyle(cactus).
    getPropertyValue("left"));
  //if (cactusleft < 20 && cactusleft > 0 && dinoTop >= 130) {
    //cactus.style.animation = "none";
    //cactus.style.display = "none";
    //alert("u lose :(");
  }
}, 10);
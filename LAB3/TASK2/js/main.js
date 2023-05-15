window.addEventListener("load", function () {
  myvideo = this.document.getElementById("myvideo");
  btn = this.document.querySelectorAll(".btn");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      myvideo.src = "Video/" + btn[i].id + ".mp4";
    });
  }
}); //end of load
function playpausefun() {
  if (myvideo.paused) {
    myvideo.play();
  } else {
    myvideo.pause();
  }
}
function double() {
  myvideo.requestFullscreen();
}
function oneClick() {
  if (myvideo.paused) {
    myvideo.play();
  } else {
    myvideo.pause();
  }
}

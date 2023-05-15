window.addEventListener("load", function () {
  allimages = this.document.images;
  img=up.getElementsByTagName('img').length;
  for (var i = 0; i < allimages.length; i++) {
    allimages[i].addEventListener("dragstart", startdrag);
    allimages[i].addEventListener("dragend", enddrag);
  }
  bottom = this.document.getElementById("bottom");
  bottom.addEventListener("drop", dropped);
  bottom.addEventListener("dragenter", enterdrag);
  bottom.addEventListener("dragover", overdrag);
  up = this.document.getElementById("up");
  up.addEventListener("dragleave", leavedrag);
  empty=this.document.querySelector('.empty');
}); //edn of load
function startdrag(e) {
  e.dataTransfer.setData("myimg", e.target.outerHTML);
  
}
function enddrag(e) {
  e.preventDefault();
  e.target.style.display = "none";
}
function isEmpty(){ 
    if(img==0)
    {
      up.style.backgroundColor="yellow";
      up.innerHTML="<p style='text-align: center;display: flex;margin: auto;justify-content: center;align-items: center;'>Empty</p>";
    }

  }
  
function dropped(e) {
  
  img--;
  e.preventDefault();
  bottom.innerHTML += e.dataTransfer.getData("myimg");
  isEmpty();
  
}
function enterdrag(e) {
  e.preventDefault();
  bottom.style.backgroundColor = "lightgrey";
}
function overdrag(e) {
  e.preventDefault();
}
function leavedrag(e) {
  e.preventDefault();
}




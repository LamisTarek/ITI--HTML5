

function display() {
    console.log("hello");
  let mainBranch = document.getElementById("main_branch");
  let mainDiv = document.querySelector(".main");
  let branch = document.getElementById("branch");
  let branchDiv = document.querySelectorAll(".sec-branch");
  if (mainBranch.checked == true) {
    for (let i = 0; i < branchDiv.length; i++) {
      branchDiv[i].classList.add('show');
    }
  }else{
    mainDiv.classList.remove('show');
  }

  if (branch.checked == true){
    console.log("bhhh");
    mainDiv.classList.add('show');
    for(let i=0;i<branchDiv.length;i++){
        branchDiv[i].classList.remove("show");}
    }
    if((mainBranch.checked == true && branch.checked == true)||(mainBranch.checked == false && branch.checked == false)){
        mainDiv.classList.remove("show");
        for(let i=0;i<branchDiv.length;i++){
        branchDiv[i].classList.remove("show");
        }
    }

}

// if(mainBranch.checked==true)
// {

// }

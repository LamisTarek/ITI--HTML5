let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let num4 = document.querySelector(".num4");
let num5 = document.querySelector(".num5");
let num6 = document.querySelector(".num6");
function add() {
  let add = Number(num1.value) + Number(num2.value);
  num3.innerText = add;
}

function mul() {
  let mul = Number(num4.value) * Number(num5.value);
  num6.innerText = mul;
}

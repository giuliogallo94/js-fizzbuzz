const rowElem = document.querySelector(".row");

let gridString = "";
let innerText = "";

for (let i = 1; i <= 100; i++) {
  // Creazione delle varie celle
  let result;
  if (i % 3 === 0) {
    result = "Fizz";
    innerText = "Fizz";
  } else if (i % 5 === 0) {
    result = "Buzz";
    innerText = "Buzz";
  } else if ((i % 3 === 0) & (i % 5 === 0)) {
    result = "FizzBuzz";
    innerText = "FizzBuzz";
  } else {
    result = "";
    innerText = "";
  }
  // console.log(i, result);
  gridString += `<div class="col-1 my-2 square ${result}">${innerText}</div>`;
}

rowElem.innerHTML = gridString;

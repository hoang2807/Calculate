const numbers = document.getElementsByClassName("btn");
const result = document.getElementById("result");
for (let number of numbers) {
    number.addEventListener("click", function() {
        result.innerHTML += this.value;
    });
}

function equal() {
    let res = result.innerHTML;
    let out = eval(res);
    result.innerHTML = out;
}

function clean() {
    result.innerHTML = " ";
}
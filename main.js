var display = document.getElementById("display");


function clickevent(dets) {
    let data = dets.target.value;
    display.value += data ;
}

let a =  document.querySelectorAll(".btnIn");
console.log(a)
a.forEach((item) =>{
    item.addEventListener('click', clickevent)
})


var equal = document.querySelector("#equal");
equal.addEventListener("click", function evaluate() {
    display.value = eval(display.value)
    // display.value = display.value.substring(0, display.value.length-1)
})

var ac = document.querySelector("#ac");
ac.addEventListener("click", function () {
    display.value = ""
    // display.value = display.value.substring(0, display.value.length-1)
})

var del = document.querySelector("#del");
del.addEventListener("click", function () {
    display.value = display.value.substring(0, display.value.length-1)
})







// var btns = document.querySelectorAll(".btnIn");
// console.log(btns);
// btns.addEventListner("click", function () {
//     console.log("ok");
// });

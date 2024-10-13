const display = document.getElementById("display");


function inputbtn(input) {
    display.value += input;

}

function inputbtnclear() {
    display.value = "";
}

function inputbtncalc() {
    try {
        display.value = eval(display.value); 
    } catch {
        alert("Invalid Format")
        display.value=""
        return;
    }
   
}

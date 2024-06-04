function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

function clearIndex(){
    var display = document.getElementById('display').value;
    var newDisplay = display.substring(0, (display.length - 1));
    document.getElementById('display').value = newDisplay;
}

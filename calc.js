function sinclicked(){
    calculator.answer.value = Math.sin(calculator.answer.value);
}
function cosclicked(){
    calculator.answer.value = Math.cos(calculator.answer.value);
}
function tanclicked(){
    calculator.answer.value = Math.tan(calculator.answer.value);
}
function backspace(){
    var prevalue = calculator.answer.value;
    calculator.answer.value = prevalue.substr(0, prevalue.length-1);
}
function square(){
  calculator.answer.value = Math.pow(calculator.answer.value, 2);
}
function root(){
  calculator.answer.value = Math.pow(calculator.answer.value, 1/2);
}

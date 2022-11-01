const operator = prompt('Que operacion quiere realizar?(+, -, * o /)');
const num1 = parseFloat(prompt('Escriba el primer numero'));
const num2 = parseFloat(prompt('Escriba el segundo numero'));


function calculator (num1, num2) {
    
    if (operator == '+'){
        result = num1 + num2;
    }
    else if (operator == '-'){
    result = num1 - num2;
    }
    else if (operator == '*'){
    result = num1 * num2;
    }
    else {
    result = num1 / num2;
    }

    window.print(result)

}

calculator()
var fieldForEnter = document.querySelector('p');
var arrayButtonElements = document.querySelectorAll('button');
var variableForCalculate = '';
var resultCalculate = '0';
var mathAction = '';

function returnStringValueOfElements(e) {
    /*при нажатии кнопки записываем значение и
    выводим его в поле калькулятора*/
    var stringValueForField = e.currentTarget.innerHTML;
    if (stringValueForField !== 'C') {
        fieldForEnter.innerHTML += stringValueForField;
    }

    /*это же значение записываем переменную
    var variableForCalculate  для последущих матеметических
    действий */
    returnStringOfNumber(stringValueForField);

    /*парсим строку, записываем число в  resultCalculate
    (первый член математического выражения готов), variableForCalculate
    обнуляем для второго члена. Определяем порядок действий при
    нажатии кнопок C, sin, cos, x2. Запоминаем действие в переменной mathAction.*/
    mathimaticAction(stringValueForField);

    /*парсим строки, выполнем действие согласно переменной mathAction, 
    обнуляем переменные*/
    if (stringValueForField === '=') {
        resultCalculation(mathAction);
    }
}

function returnStringOfNumber(par) {
    switch (par) {
        case '0':
            variableForCalculate += par;
            break;
        case '1':
            variableForCalculate += par;
            break;
        case '2':
            variableForCalculate += par;
            break;
        case '3':
            variableForCalculate += par;
            break;
        case '4':
            variableForCalculate += par;
            break;
        case '5':
            variableForCalculate += par;
            break;
        case '6':
            variableForCalculate += par;
            break;
        case '7':
            variableForCalculate += par;
            break;
        case '8':
            variableForCalculate += par;
            break;
        case '9':
            variableForCalculate += par;
            break;
        case '.':
            variableForCalculate += par;
            break;
    }
}

function writeFirstVariable(x, y, par) {
    x += y;
    resultCalculate = x;
    variableForCalculate = '';
    mathAction = par;
}

function mathimaticAction(par) {
    var x = parseFloat(resultCalculate);
    var y = parseFloat(variableForCalculate);

    switch (par) {
        case "+":
            writeFirstVariable(x, y, par);
            break;
        case "-":
            writeFirstVariable(x, y, par);
            break;
        case "*":
            writeFirstVariable(x, y, par);
            break;
        case "/":
            writeFirstVariable(x, y, par);
            break;
        case "C":
            variableForCalculate = '';
            resultCalculate = '0';
            fieldForEnter.innerHTML = '';
            break;
        case "sin":
            fieldForEnter.innerHTML = Math.sin(y * 3.14 / 180);
            variableForCalculate = '';
            break;
        case "cos":
            fieldForEnter.innerHTML = Math.cos(y * 3.14 / 180);
            variableForCalculate = '';
            break;
        case "x2":
            fieldForEnter.innerHTML = Math.pow(y, 2);
            variableForCalculate = '';
            break;
    }
}


function resetValueVariable(x) {
    resultCalculate = '0';
    variableForCalculate = '';
    mathAction = '';
    fieldForEnter.innerHTML = x;
}

function resultCalculation(act) {
    var x = parseFloat(resultCalculate);
    var y = parseFloat(variableForCalculate);

    switch (act) {
        case '+':
            x += y;
            resetValueVariable(x);
            break;
        case '-':
            x -= y;
            resetValueVariable(x);
            break;
        case '*':
            x *= y;
            resetValueVariable(x);
            break;
        case '/':
            x /= y;
            resetValueVariable(x);
            break;
    }
}

/*определяем слушателей и действия при нажатии кнопок калькулятора.
Для корректной работы калькулятора обязателен сброс через С*/ 
for (var i = 0; i < arrayButtonElements.length; i++) {
    arrayButtonElements[i].addEventListener('click', returnStringValueOfElements);
}












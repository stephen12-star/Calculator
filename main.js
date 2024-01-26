const display1E1 = document.querySelector ('.display-1');
const display2E1 = document.querySelector ('.display-2');
const tempResult1E1 = document.querySelector ('.temp-reslut');
const numbersE1 = document.querySelectorAll ('.number');
const operationE1 = document.querySelectorAll ('.operation');
const equalE1 = document.querySelector ('.equal');
const clearE1 = document.querySelector ('.all-clear');
const clearLastE1 = document.querySelector ('.last-entity-clear');

let dis1Num ='';
let dis2Num ='';
let reult = null;
let lastOperation= '';
let haveDot = false;

numbersE1.forEach (number => {
    number.addEventListener ('click', (e)=> {
        if (e.target.innerText === '.' && !haveDot){
            haveDot=true;
        } else if (e.target.innerText=== '.' && haveDot){
            return;
        }
        dis2num += e.target.innerText;
        display2E1 += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
})
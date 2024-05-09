// var num = 20;
// var num = +prompt('enter your num');
// if (20 <60) {
//     console.log('to earing karo')
// }else if(20>8){
//     console.log('sadi pki')
// }
//  var Age = 35;
// var  Age = +prompt('Enter you Age');
// if ( Age  >= 23 ){
//     console.log('sadi pki')
// }
// else if(Age >= 20){
//     console.log('study kar')
// }
// else if( Age <= 15    ){
//     console.log('pisa kama')
// }
// else{
//     console.log('ok') 
// }

// var salary = 350000;
// var salary = +prompt('Enter your salary');

// if (salary >=30000){
//     console.log('sadi pki')
// }
// else if(salary <= 20000){
//     console.log('bhai sccuses hasil kar')
    
// }
// else{
//     console.log('study kar')
// }
// ASSIGMENT 
// 1 ANSWER

// const num =3
// if(num >=3) {
//     console.log('Number is disvible');
    
// }else {
//     console.log('Number is not disvible');
// }
// 2 ANSWER



// function getsubmit(){
    // const inputnumber=parseInt(document.querySelector('#number').value)
    
//     // console.log(number.value)
//     if(inputnumber % 2 === 0 ){
//         console.log('Even');
//     }else{
//         console.log('Odd');
//     }
// // }

// 3 ANSWER
// const age = 18
// if (age <= 17) {
//     console.log('old engouh');
    
// }else{
//     console.log('Too engouh');
// }
// 4 ANSWER

// const names=prompt('Enter your name')
// if (names ){
//     console.log('name enterd:',names);
//     console.log('shows');
    
// }else{
//     console.log('not Enter name:');

//     console.log('not shows');
// }
// 5 ANSWER

// function getsubmit() {
//     const inputnumber=parseInt(document.querySelector('#number').value)
//     if(inputnumber % 3 === 0){
//         console.log('number is disvible by 3')
//     }else{
//     console.log('number is not disvible by 3');
// }

// // }

// function isUpperCase(char) {
//     return char >= 'A'& char <= 'z'
    
// }
// function isLowerCase(char) {
//     return char >= 'a'& char <= 'z'
// }
// function getsubmit(inputfield){
//     const number=document.querySelector('#number').value
// if(inputfield) {
//     console.log (  isUpperCase(number) || isLowerCase(number))
//     console.log('upper letter');
// }else{
    // return char >= 'a'& char <= 'z'
    // console.log('lower letter');


// console.log( char 'upper letter & lower letter');

// function isLowerCase(char) {
//     return char >= 'a' && char <= 'z'; }

// function isUpperCase(char) {
//     return char >= 'A' && char <= 'Z';
// }

// function getSubmit(inputField) {
//     const number = document.querySelector('#number').value;
//     if (inputField) {
//         if (isUpperCase(number) || isLowerCase(number)) {
//             console.log('Letter is either upper or lower case.');
//         } else {
//             console.log('Not a letter.');
//         }
//     } else {
//         console.log('lower letter');
//     }
const number1=parseFloat(prompt
    ('num1'))
const number2=parseFloat(prompt('num2'))




function calculator(operator,num1,num2) {
    switch (operator) {
        case     '+':
            return number1 + number2
            case     '-':
                return number1 -  number2
                case     '*':
                    return number1 * number2
                    case     '/':

                        if (number2 === 0) {

                            
                            return number1 / number2
                        }else{
                            return 'no divide by zero'
                        }
                        case     '%':

                        if (number2 === 0) {

                            
                            return number1 % number2
                        }else{
                            return 'no divide by zero'
                        }
                    

         default:
         return "Invalid operator"       
    }
    
}


const result1 = calculator('+', number1, number2);
console.log(result1);

const result2 = calculator('-', number1, number2);
console.log(result2);


const result3 = calculator('*', number1, number2);
console.log(result3);


const result4 = calculator('/', number1, number2);
console.log(result4);


const result5 = calculator('%', number1, number2);
console.log(result5);
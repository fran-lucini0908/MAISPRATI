/*
o método 'log' do objeto 'console', utilizado para imprimir informações
no console do navegador ou servidor
*/
console.log("Hello");
//modo aceito pelo console, podendo conter dentro das aspas duplas, as aspas simples
console.log("Hello");
//modo aceito pelo console, podendo conter dentro das aspas simples, as aspas duplas
console.log(10);
//para imprimir numeros se usa sem as aspas, por ser um number
console.log(1000, 1450.1, "Jaques");
//ele aceita numer e name

nome = "Fran"; //não recomnedado
let nome = "Fran"; //declaração padrão
var name = "Fran"; //antiga e inadequada

const NAME = "Fran"; //sempre precisa de uma atribuição

let teste;
console.log(teste); //vai dar undefined

let meuNull = null;
console.log(meuNull); //usado quando quero desconfigurar uma variavel

let meuNumber = 10.1;
console.log(typeof meuNumber); //usado para verificar os tipos

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2); //potencia

let numTeste = "5";
let numTeste2 = parseInt(numTeste);

console.log(numTeste2 + num1);

let numTeste = "5.5";
let numTeste2 = parseFloat(numTeste);

console.log(numTeste2 + num1);

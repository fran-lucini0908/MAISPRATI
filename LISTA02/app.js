// ======================================= Exercício 01 ============================================
const prompt = require("prompt-sync")();

let cigarrosPorDia = prompt("Quantidade de cigarros fumados por dia: ");
let anosFumando = prompt("Quantos anos fumando? ");
let diasPorAno = 365;
let minutosPorDia = 1440;
let minutosDeVidaPorCigarro = 10;

let diasFumando = anosFumando * diasPorAno;
let totalCigarros = diasFumando * cigarrosPorDia;

let tempoPerdido = totalCigarros * minutosDeVidaPorCigarro;
let diasRestando = Number(tempoPerdido / minutosPorDia);
console.log(`Tempo de vida perdido: ${Math.round(diasRestando)} dias`);

// ======================================= Exercício 11 ============================================
const prompt = require("prompt-sync")();

let primeiroTermo = parseInt(prompt("Digite o primeiro termo: "));
let razao = parseInt(prompt("Digite a razão: "));

let soma = 0;

for (let i = 1; i <= 10; i++) {
  let calculo = primeiroTermo + (i - 1) * razao;
  console.log(`Termo ${i}: ${calculo}`);
  soma += calculo;
}

console.log(`A soma dos termos é: ${soma}`);

// ======================================= Exercício 12 ============================================
const prompt = require("prompt-sync")();

let valor1 = 0;
let valor2 = 1;

for (let i = 0; i <= 10; i++) {
  console.log(`${valor2}`);
  let valor3 = valor1 + valor2;
  valor1 = valor2;
  valor2 = valor3;
}

// ======================================= Exercício 13 ============================================
const prompt = require("prompt-sync")();

const fibonnaci = [];

fibonnaci[0] = 0;
fibonnaci[1] = 1;

for (let i = 2; i < 15; i++) {
  fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
}

console.log(`Primeiros 15 elementos da sequencia de Fibonacci:`);
for (let i = 1; i < fibonnaci.length; i++) {
  console.log(`${fibonnaci[i]}`);
}

// ====================================== Exercício 19 ==============================================
// Função para validar o horário no formato HH:MM:SS
function validarHorario(horario) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return regex.test(horario);
}

// Função para formatar o horário no formato HH.MM.SS
function formatarHorario(horario) {
  return horario.replace(/:/g, ".");
}

// Função principal para ler e validar 5 horários
function lerHorarios() {
  const horarios = [];
  let count = 0;

  while (count < 5) {
    const horario = prompt(
      `Digite o horário ${count + 1} no formato HH:MM:SS:`
    );

    if (validarHorario(horario)) {
      horarios.push(formatarHorario(horario));
      count++;
    } else {
      alert("Horário inválido. Tente novamente.");
    }
  }

  console.log("Horários válidos formatados:");
  horarios.forEach((horario) => console.log(horario));
}

// Chamada da função principal
lerHorarios();

// ======================================= Exercício 23 ============================================
const prompt = require("prompt-sync")();

const linhas = 7;
const colunas = 7;

let MI = [];

for (let i = 1; i <= linhas; i++) {
  MI[i] = [];
  for (let j = 1; j <= colunas; j++) {
    if (i === j) {
      MI[i][j] = 1;
    } else {
      MI[i][j] = 0;
    }
  }
}

for (let i = 1; i <= linhas; i++) {
  let linha = "";
  for (let j = 1; j <= colunas; j++) {
    linha += MI[i][j] + " ";
  }
  console.log(linha);
}

// ======================================= Exercício 24 ============================================
const prompt = require("prompt-sync")();

let M = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, 6, -7, 8],
  [1, 2, 3, -4, -5, -6, 7, 8],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-1, -2, -3, 4, 5, -6, -7, 8],
];

let C = Array(M.length).fill(0);

for (let i = 0; i < M.length; i++) {
  for (let j = 0; j < M[i].length; j++) {
    if (M[i][j] < 0) {
      C[i]++;
    }
  }
}

console.log(`Vetor C: ${C}`);

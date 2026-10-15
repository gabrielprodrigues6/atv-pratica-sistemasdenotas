/*
const nome = "Gabriel";      
const idade = 16;         
const curso = "Desenvolvimento de Sistemas";  
const matriculado = true;    

console.log(nome);
console.log(idade);
console.log(curso);
console.log(matriculado);
*/


const nome = "Gabriel";
const idade = 16;
const curso = "Desenvolvimento de Sistemas";
const nota1 = 8;
const nota2 = 7;
const nota3 = 9;
const faltas = 5;
const matriculado = true;


console.log("CADASTRO DO ALUNO: ");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Primeira nota:", nota1);
console.log("Segunda nota:", nota2);
console.log("Terceira nota:", nota3);
console.log("Faltas:", faltas);
console.log("Matriculado:", matriculado);


const media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));


let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação acadêmica:", situacao);


const totalAulas = 40;
const aulasFrequentadas = totalAulas - faltas;
const frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("Frequência:", frequencia + "%");

if (frequencia >= 75) {
    console.log("Atingiu a frequência mínima.");
} else {
    console.log("Não atingiu a frequência mínima.");
}


if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Aprovado nos critérios finais!");
} else {
    console.log("Não foi aprovado nos critérios finais.");
}


console.log("RELATÓRIO FINAL:");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Média:", media.toFixed(2));
console.log("Percentual de frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Resultado final: Aprovado");
} else {
    console.log("Resultado final: Não aprovado");
}

// Numeros pares com FOR:
// peça ao usuário um numero e mostre todos os números pares de 1 até ele.

let numero4 = parseInt(prompt("Digite um número para ver os parees até ele:"));
for (let i = 2; i <= numero4; i += 2){
    console.log(i);
}



// 5. Fatorial com WHILE:
// peça ao usuário um número e calculo o fatorial dele.

let numero5 = parseInt(pronpt("Digite um némro para calcular o fatorial:"));
let fatorial = 1;
let i = 1;
while (i <= numero5) {
    faterial *= i;
    i++;
}
console.log('Fatorial de $(numero5): $(fatorial}');


// 6. Validação de entrada com DO WHILE:
// peça aao usuário um número maior que 10. Se ele digitar um número invalida,

let numero2;
do {
    numero6 = parseInt(prompt("Digite um número maior que 10:"));
} while (numero <= 10);
console.log("número válido:", numero6);




// 7 . Desenho com loops aninhados
// peça ao usuário o tamanho de um quadrado e desenhe-o com asteriscos (*).

let tamanho = parse\Int16Array(promot("Digite o tamanho do quadrado:");
for (let i = 0; i < tamanho; i ++) {
    let linha = "";
    for (let j = 0; j < tamanho; j++) {
        linha += "* ";
    }
console.log(linha);
}
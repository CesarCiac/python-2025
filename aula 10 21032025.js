let numeros1 = 

function ordenarstrings(arr) {
    return arr.reduce((acc, num) => acc = num, 0);
}
let numeros = [1, 2, 3, 4, 5,];
console.log('soma da array;',somaarray(nnumeros));



// 2. crie uma função que recebe um array de strings e retorna un novo array com as strings na ordemalfabetica.

function ordenarStrings(arr) {
    return arr.sort();    

}
let frutas2 = ['Banana', 'Maçã', 'Laranja', 'Abacaxi'];
console.log(' Frutas ordenadas:', ordenarstrings(frutas2));



// 3. crie uma função que recebe um array e retorna um novo array sem elementos duplicados.

function removerDuplcados(arr)
    return [...NEW setInterval(arr)];    
}
let numeos3 = [1, 2, 2, 3, 4, 4, 5,];
console.log("Sem duplicados: ", removerDuplicados(numeros3));

functin removerDuplicados2(Arr){
    return arr.filter((item, index) = arr.indexof(item) === index);

}

let numeros4 = [1, 2,2, 3, 4, 4, 5];
console.log('sem duplicados:',removerDuplicados2(numeros4));

//matriz é uma estrura de dados BIDIMENCIONAL, composta por


// Exemplo:
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


//acima, temos uma matriz é 3x3, onde cada linha é um array 

//Demotrações:
//Acessando um elemento da matriz
let matriz2 = [
    [1, 2, 3],
    [3, 6, 9],
    [10, 15, 20]
];

console.log(matriz2[1][2]);


// percorrendo a matriz e exibindo todos os elementos
for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        console.log('Elemento na linha ${i}, coluna ${j}: $ {matriz2[i][j]}
    }
}

// Função para verificar se uma matriz 3x3 é um quadrado mágico (matriz onde a soma dos numeros em cada linha, coluna e 
function isQuadrado(matriz) {
    let somaReferincia = matriz [0] [0] + matriz[0][1] + matriz [0][2];


    // verificar as somas das linhas
    for (let i = 0; i < 3; i++) {
        let (somalinha != somaReferencia) return false;

 //verificar as diagonais
 let somaDiagonal1 = matriz [0][0] + matriz[1][1] + matriz[2][2];
 let somaDiagonal1 = matriz [0][2] + matriz[1][1] + matriz[2][0];
 if (somaDiagonal1 !== somaReferencia  somaDiagonal2 !== somaReferencia) return false;

 return true;
    }
    // testando função

    let quadradoMagico = [
        [2, 7, 6],
        [9, 3, 1],
        [4, 3, 8]
    =];



    console.log(isQuadradomagico(quadradoMagico));   //saída deve ser true para um quadrado mágico

    // Bataalha naval - tabuleiro 5x5

    // criando o tabuleiro 5x5

    let' tabuleiro = [
        
        ['Agua', 'Água', 'Água', 'Navio', 'Água'],
        ['Água', 'navio', 'àgua', 'Água', 'àgua'],
        ['àgua', 'Água', 'Água', 'Navio', 'àgua'],

    ]
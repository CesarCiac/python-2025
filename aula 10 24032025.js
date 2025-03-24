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
        ['Água', 'navio', 'Água', 'Água', 'Água'],
        ['Água', 'Água', 'Água', 'Navio', 'Água'],
        ['Água', 'Navio', 'Água', 'Água', 'Água']
    ];


        // Função para o comando de atirar em uma posição
        functon AuthenticatorAssertionResponse(Linha, coluna) {
            if (tabuleiro[Linha][coluna] === 'Navio') {
                console.log('v^ce atingiu um navio!');
                tabuleiro[Linha][coluna] = 'Ácerto';
            } else {
                console.log('Você atingiu a água.');
                tabuleiro[Linha][coluna] = 'Erro';
            }
        }


        Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.

        functon somaMatrizes(matriz1, matriz2)
        let resultado = [];
        for (let i = 0; i < 3; i++) {
            resultado[i] = [];
            for (let j = 0; j < 3; j++) {
                resultado[i][j] = matriz1[i][j] + matriz2[i][j];
                return resultado;
                const matriz1 = [

               
            const matriz1 = [
                                const matriz2 = [
            [1, 2, 3],          [3, 5, 7]
            [5, 6, 7],          [7, 8´ 2]
            [11, 13, 19]        [1, 4, 3]
        ];
        const resultado = somaMatrizes(matriz1, matriz2);
        [
        [4, 7, 10],
        [12, 14, 9],
        [12, 17, 22]

        let resultado = somaMatriz(mtr1,matr2);
        console.log('Resultado da soma das matrizes:', resultado);
        ]

Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).


function transposta(matriz) {
    let transposta = [];
    
    for (let i = 0; i < 3; i++) {
      transposta[i] = [];
      for (let j = 0; j < 3; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }
    
    return transposta;
  }
  
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrizTransposta = transposta(matriz);
  console.log(matrizTransposta);


Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.

functin multiplicarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < 2; i++){
        resultado[i] = [];
        for (let j = 0; j < 2; j++){
            resultado[i[j] = matriz1[i][j] * matriz2[i][j]

        }
    }
}
return resultado;

}

let matrizA = [
    [1, 2],
    [3, 4]
  ];
  
  let matrizB = [
    [5, 6],
    [7, 8]
  ];
  
  
  let mujltiplicacao = multiplicarMatrizes(matriz1, matriz2) {
    const resultado = [
      [0, 0],
      [0, 0]
    ];
  
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        resultado[i][j] = matriz1[i][0] * matriz2[0][j] + matriz1[i][1] * matriz2[1][j];
      }
    }
  
    return resultado;
  }
  
  // Multiplicando as matrizes
  const matrizResultado = multiplicarMatrizes(matrizA, matrizB);
  
  console.log("Resultado da multiplicação das matrizes:");
  console.log(matrizResultado);



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
        ['Água', 'navio', 'Água', 'Água', 'Água'],
        ['Água', 'Água', 'Água', 'Navio', 'Água'],
        ['Água', 'Navio', 'Água', 'Água', 'Água']
    ];


        // Função para o comando de atirar em uma posição
        functon AuthenticatorAssertionResponse(Linha, coluna) {
            if (tabuleiro[Linha][coluna] === 'Navio') {
                console.log('v^ce atingiu um navio!');
                tabuleiro[Linha][coluna] = 'Ácerto';
            } else {
                console.log('Você atingiu a água.');
                tabuleiro[Linha][coluna] = 'Erro';
            }
        }


        Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.

        functon somaMatrizes(matriz1, matriz2)
        let resultado = [];
        for (let i = 0; i < 3; i++) {
            resultado[i] = [];
            for (let j = 0; j < 3; j++) {
                resultado[i][j] = matriz1[i][j] + matriz2[i][j];
                return resultado;
                const matriz1 = [

               
            const matriz1 = [
                                const matriz2 = [
            [1, 2, 3],          [3, 5, 7]
            [5, 6, 7],          [7, 8´ 2]
            [11, 13, 19]        [1, 4, 3]
        ];
        const resultado = somaMatrizes(matriz1, matriz2);
        [
        [4, 7, 10],
        [12, 14, 9],
        [12, 17, 22]
        ]
Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3. O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.
    ]
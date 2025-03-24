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

Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).





Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.

Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3. O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.
    ]
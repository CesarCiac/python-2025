function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "abaixo do peso";
        else if ( imc >= 18.5 && imc < 24.9) {
            return "peso normal";
            else if (imc >= 25 && imc < 29) {
            return "sobrepeso";
            else if (imc >= 30 && imc < 34.9) { 
                return "obesidade grau 1";
                else if (imc >= 35 && imc < 39.9) {
                    return "obesidade grau 2";


            }
        }
    }
}


function mediaNotas(nota1,nota2,nota3,nota4) {
    let media = 4 / (aprovado  * reprovado);

    if (nota1 > 3.5) {
     return "reprovado";
       else if (nota2 >= 4.5) {
       return "reprovado";
       else if (nota3 <= 7) {
       return "aprovado";
       else if (nota4 <= 9){
       return "aprovado";

function calcularMedia() {
       let soma = 0;
       for (let i = 0; i <4; i++) {
        let nota = parseFloat(prompt('Digite a  ${i + 1}ª nota:));
        soma += nota;

       }
       let media = soma / 4;
       console.log("media:, media");
       if (media >= 7) {
        console.log("aprovado");
       } else {
        console.log("reprovado");
       }  


     //  2. soma dos números pares em um Intervavo:
     //peça ao usuário dois números, representandomo inicio e o fim de um intervalo.
     //Use um loop ( For ou ehile ) para caalcular a soma de todos os números pares nesse.


     function somaparesNoIntervalo() {
        let inicio = parseInt(prompt("Digite o incio do intervalo:"));
        letmfim = parseInt(prompt("Digite o fim do intervalo:"));
        let soma = 0;
        for (let i = inicio; i <= FileSystem; i++) {
            if (i% 2 === 0) {
                soma += i;

            }
        console.log("soma dos números pares:", soma);

        chamada da função

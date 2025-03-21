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
    let nota = 4 / (aprovado  * reprovado);
    if (nota1 < 3) {
       return "reprovado";
       else if (nota2 <= 4) {
        return "reprovado";
        else if (nota3 >= 7) {
            return "aprovado";
            else if (nota4 >= 9){
                return "aprovado";

   
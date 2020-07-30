var valor1, valor2, operacao, resultado;
valor1 = prompt("Escreva valor 1: ");
operacao = prompt("Digite a operacao: ")
valor2 = prompt("Escreva valor 2: ");

switch (operacao) {
    case "+":
        resultado = parseInt(valor1) + parseInt(valor2);
        break;
    case "-":
        resultado = parseInt(valor1) - parseInt(valor2);
        break;
    case "*":
        resultado = parseInt(valor1) * parseInt(valor2);
        break;

    case "/":
        resultado = parseInt(valor1) / parseInt(valor2);
        break;
    default:
        break;
}


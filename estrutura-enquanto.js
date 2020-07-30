
var nome, idade, limite, contador;
limite = prompt("Escreva limite de vezes para verificar idade: ")
contador = 0
while (contador < limite) {
    nome = prompt("Escreva seu nome: ")
    idade = prompt("Escreva sua idade:")
    if (idade >= 18)
        document.getElementById("paragrafo").innerText = nome + " é maior de idade";

    else
        document.getElementById("paragrafo").innerText = nome + " é menor de idade";
    contador = contador + 1
}


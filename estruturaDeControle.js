var nota1, nota2, media, nome;
nome = prompt("Escreva seu nome: ")
nota1 = prompt("Escreva primeira nota:")
nota2 = prompt("Escreva segunda nota: ")
media = (parseInt(nota1) + parseInt(nota2)) / 2
if (media >= 7) {
    alert("Aprovado" + nome)
}
else
    alert("Reprovado" + nome)


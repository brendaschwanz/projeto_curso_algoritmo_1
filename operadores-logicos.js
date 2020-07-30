var nota1, nota2, passou, nome;
passou = false
nome = prompt("Escreva seu nome: ")
nota1 = prompt("Escreva primeira nota:")
nota2 = prompt("Escreva segunda nota: ")
media = (parseInt(nota1) + parseInt(nota2)) / 2
if (media >= 5)
    passou = true
if (passou && (media >= 7 && media <= 9))
    alert("Aprovado" + nome)

else
    alert("Reprovado" + nome)


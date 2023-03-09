let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let result = {
  soma: Number(numberOne) + Number(numberTwo),
  subtracao: Number(numberOne) - Number(numberTwo),
  multiplicacao: Number(numberOne) * Number(numberTwo),
  divisao: Number(numberOne) / Number(numberTwo),
  restodaDivisao: Number(numberOne) % Number(numberTwo),
}

let total = result.soma / 2;
let evenOrOdd = total % 2 == 0 ? 'Par' : 'Impar';


alert("O resultado da soma dos dois números é " + result.soma)
alert("O resultado da subtração dos dois números é " + result.subtracao)
alert("O resultado da multiplicação dos dois números é " + result.multiplicacao)
alert("O resultado da divisão dos dois números é " + result.divisao)
alert("O resultado do resto da divisão dos dois números é " + result.restodaDivisao)
alert("A soma destes dois números é " + evenOrOdd)

if(numberOne == numberTwo) {
  alert("Os números inseridos são iguais") 
} else {
  alert("Os números inseridos são diferentes")
}
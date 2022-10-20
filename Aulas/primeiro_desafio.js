/* Faça um programa que calcula o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
    1 - Preço do combustivel;
    2 - Gasto médio de combustivel por km;
    3 - Distância em KM da viagem;
    */
   
console.log("Ola");

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distancia = 150;

//faz a conversão de km em litro obtendo a media cosumida
const litroCosumido = distancia / kmPorLitro;
const valorGasto = litroCosumido * precoCombustivel;

//comando toFixed é pra mostra quantas cassas decimais apareceram depois da virgula
console.log("\n O valor da viagem é = " + valorGasto.toFixed(2));

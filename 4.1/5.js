// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus

let angulo1 = 178, angulo2 = 1, angulo3 = 1;

if (angulo1 + angulo2 + angulo3 == 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log(true);
} else {
  console.log(false);
}
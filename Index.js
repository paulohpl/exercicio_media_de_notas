/* Algorítmo que calcula a média baseada em 3 notas tiradas por um aluno em um semestre da faculdade.
   Calcula e imprime o resultado. 

Média = (nota 1 + nota 3 + nota3) / 3;

Classificação: 
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

if (media < 5) {
    console.log('Reprovado');
}
else if (media >= 5 && media <=7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado, passou de semestre!');
}
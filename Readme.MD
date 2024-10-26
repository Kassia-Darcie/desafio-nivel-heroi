# Desafio classificador de nível de héroi

Projeto criado para o desafio de projeto do bootcamp GFT start - Lógica de programação da DIO, que consiste em criar um código em JavaScript para determinar o nível de um herói baseado na sua experiência (XP). O nível é atribuído com base em intervalos de XP definidos, e o resultado é exibido no console com o nome do herói e seu respectivo nível.

## Funcionalidades

O código executa as seguintes tarefas:

1. Define o nome do herói e o valor de XP.
2. Define intervalos de XP e associa um nível para cada faixa:
   - Ferro (≤ 1000)
   - Bronze (1001-2000)
   - Prata (2001-5000)
   - Ouro (5001-7000)
   - Platina (7001-8000)
   - Ascendente (8001-9000)
   - Imortal (9001-10000)
   - Radiante (> 10000)
3. Percorre a lista de intervalos e atribui o nível correspondente ao herói com base no valor de XP.
4. Exibe uma mensagem baseada no nome e nível do herói no console.

   > O Herói de nome {nomeDoHeroi} está no nível de {nivel}

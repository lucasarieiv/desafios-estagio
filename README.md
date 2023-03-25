# Desafios Target Sistemas

Optei por fazer os desafios usando Node JS

## Desafio #2
- [x] Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

```
$ node desafio2/fibonacci.js 
> 55 faz parte da sequência de fibonacci
```

## Desafio #3
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

- [x] O menor valor de faturamento ocorrido em um dia do mês;
- [x] O maior valor de faturamento ocorrido em um dia do mês;
- [x] Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**IMPORTANTE**:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

```
$ node desafio3/main.js 
O menor valor de faturamento ocorrido em um dia do mês foi: 373.7838
O maior valor de faturamento ocorrido em um dia do mês foi: 48924.2448
Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: 10
```
## Desafio #4
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

- [x] Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

```
$ node desafio4/main.js 
SP: 37.52845624346717%
RJ: 20.291360952794975%
MG: 16.170548370275327%
ES: 15.02848141496807%
Outros: 10.98115301849447%
```
## Desafio #5
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
	b) Evite usar funções prontas, como, por exemplo, reverse;

```
$ node desafio5/main.js 
> orava
```
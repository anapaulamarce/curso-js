// Operadores Aritmeticos (matematicos)
// Operadores Atribuicao 
// Operadores de Comparacao 
// Operadores Logicos 
// Operadores Bitwise

// Operadores Logicos 
// operadores logicos e, and, or, not 

// Operador Logico e (&&)
// Retorna TRUE se os dois operandos forem TRUE
// console.log(false && true);
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

// Operador logico ou (||)
// Retornar true se um dos operados forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('Pode Aplicar: ', podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado', candidatoRecusado);

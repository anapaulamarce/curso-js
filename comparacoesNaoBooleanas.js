// Falsy sao todos esses valores:
// undefined
// null
// zero
// false
// ''
// NaN - not a number

// Truthy

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
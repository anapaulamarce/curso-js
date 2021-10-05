// Operadores condicionais 

// Switch Case

let permissao; // comum, gerente, diretor

switch (permissao){ 
    case 'comum': 
    console.log("usuario comum");
    break; // parar a condicao

    case 'gerente': 
    console.log("usuario gerente");
    break; // parar a condicao

    case 'diretor': 
    console.log("usuario diretor");
    break; // parar a condicao

    default: // comando caso nao caia em nenhuma das condicoes acima 
    console.log("Usuario nao reconhecido!");
}
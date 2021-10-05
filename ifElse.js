// Operadores condicionais 
// If..Else
// Switch..Case

// If e Else
// Se a hora estiver entre as 06:00 ate 12:00 = bom dia!
// Se estiver entre 12:00 ate 18:00 = boa tarde!
// caso contrario = boa noite!

// if(condicao){
//     // codigo a ser executado 
// }
// else if (outraCondicao){
//     // codigo a ser executado
// }
// else { // caso nao caia nas condicoes anteriores
//     // codigo a ser executado 
// }


let hora = 22;

if (hora > 6 && hora < 12){
    console.log("Bom Dia");
}else if (hora > 12 && hora < 18){
    console.log("Boa Tarde");
}else {
    console.log("Boa Noite");
}


/*Leer 15 números negativos y convertirlos a positivos e imprimir dichos números. */

let num; 
let positivo;
let i =1;
alert(`Numeros negativos a positivos`)

while (i <= 15 ){
    
    num = Number(prompt(`Ingrese numero negativo: `));

    if (num > 0 || num == 0 ){
        alert(`Ingrese numero valido`)
    }else {
        positivo = num*(-1);
        alert (`Numero ingresado: ${num}
        Numero convertido: ${positivo}`);
        i++;
    

    }
    
    

}
/*Leer 10 números e imprimir solamente los números positivos.*/

let num;
let i=1;
while(i<=10){
    num = Number(prompt(`Numeros positivos
    Ingrese un numero: `));

    if (num > 0){
        alert(`Numero ingresado: ${num}, es positivo`);
    }

    i++

}


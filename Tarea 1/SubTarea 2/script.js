/*Calcular e imprimir la tabla de multiplicar de un número cualquiera. 
Imprimir el multiplicando, el multiplicador y el producto. */

let numtabla;
let res;

numtabla= Number(prompt(`Tablas de multipliacar
Ingrese la tabal de multiplicar:`));
document.write (`La tabla es la del: ${numtabla} <br>`);
for(i=1;i<=10;i++){
   

    res = numtabla*i;
  
    document.write (`${numtabla} x ${i} = ${res}`+"<br>");

}

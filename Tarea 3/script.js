/*Suponga que tiene un conjunto de calificaciones de un grupo de 40 estudiantes, 
realizar un algoritmo para calcular la calificación promedio (media) y la calificación 
más baja de todo el grupo. */


let nota; 
let suma =0;
let promedio;
let notabaja;

for (let i=1; i <=40; i++){
    nota= Number(prompt(`Ingrese nota: `));
    
    if (i==1){
        notabaja=nota;
    }else if (nota<notabaja){
        notabaja = nota;

    }
    suma =suma+nota;


}
promedio= suma /40;
alert(`Nota promedio: ${promedio}
Nota mas baja: ${notabaja}`);
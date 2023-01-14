/*Simular el comportamiento de un reloj digital, imprimiendo la hora, 
minutos y segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas. */

for (let i=00; i<=23;i++ ){//horas
    for(let j=00;j<=59;j++){//minutos
        for(let k=00; k<=59;k++){//segundos
            if (i<10 && j<10 && k<10){
                document.write(`0${i}:0${j}:0${k} <br>`);
                

            }
            
        }
    }
}

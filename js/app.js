console.log("Estamos conectados");
document.write("<h1>Mensaje de alerta desde js</h1>")
//alert("Danger.......")

var nt1 = 4.5;
var nt2 = 2.0;
var nt3 = 7.0;
var sum = nt1 + nt2 + nt3;
var prom = sum / 3;
console.log("La suma de sus notas es: ", sum);
console.log("El promedio es", prom);
if(prom >= 4){
    console.log("Usted aprobo el ramo")
}
else {
    console.log("Usted no aprobo el ramo")
}

var vArr = ["Juan Perez", 50, 4.3, true];

// console.log("Nombre: ", vArr[0])
// console.log("Edad: ", vArr[1])
// console.log("Nota: ", vArr[2])
// console.log("Casado: ", vArr[3])

// Ciclos iterativos 
// for (x=0;x<=vArr.length;x++){
//     console.log(vArr[x])
// }

// while(x<=vArr.length){
//     console.log(vArr[x])
//     break
// }
// Funciones
function mensaje(){
    console.log("Hola desde la fución")
}
mensaje();
// Validación de un formulario

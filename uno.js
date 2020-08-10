/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
let nombre;
let edad=0;
let sexo;
let peso;
let cantidadf=0;
let banderaNombre;
let banderapeso=0;

for (let i = 1; i <= 5; i++) {
    nombre = prompt("Ingresar nombre: ");
	peso = parseFloat(prompt("Ingresar peso: "));
	edad = parseInt(prompt("Ingresar tu edad"));
    sexo = prompt("Ingresar tu sexo: F/M").toLowerCase();
    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt("Error al ingresar el sexo").toLowerCase();
    }
    if(sexo=="f"){
        cantidadf++;
	}
	console.log("Cantidad mujeres " + cantidadf);
	console.log("Edad promedio "+ (edad/5));
	if(banderapeso == 0 || sexo == "m" && peso>banderapeso){
        banderaNombre=nombre;
		banderapeso=peso;
	}
	console.log("El hombre mas pesado pesa "+banderapeso);

}
}

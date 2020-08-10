/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let titular;
	let banderaTitular = 0;
	let respuesta = "si";
	let lugar;
	let sexoMas;
	let sexoFem;
	let temporada;
	let cantpersonasviajando = 0;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let personasInvierno = 0;
	let promediopersonasinvierno = 0;
	let lugarMasElegido;


	while (respuesta == "si") {
		titular = prompt("Nombre del titular: ");
		lugar = prompt("Ingrese un lugar Bariloche / Cataratas / Salta ").toLowerCase();
		if (lugar == "Bariloche") {
			contBariloche++;
		} else if (lugar == "Cataratas") {
			contCataratas++;
		} else {
			contSalta++;
		}
		temporada = prompt("Ingrese la temporada: otoño / invierno / verano / primavera ").toLowerCase();
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")) {
			temporada = prompt("Erroral ingresar la temporada").toLowerCase();
		}
		cantpersonasviajando = parseInt(prompt("Cantidad de personas viajando : "));
		while (cantpersonasviajando < 1) {
			cantpersonasviajando = parseInt(prompt("Error al ingresar la cantidad de personas"));
		}
		if (banderaTitular == 0 || cantpersonasviajando > banderaTitular) {
			banderaTitular = titular;
			sexoMas = prompt("Ingresar tu sexo: F/M").toLowerCase();
			if (!(sexoMas == "f" || sexoMas == "m")) {
				sexoMas = prompt("Error al ingresar el sexo").toLowerCase();
			}
			if (!(sexoFem == "f" || sexoFem == "m")) {
				sexoFem = prompt("Error al ingresar el sexo").toLowerCase();
			}
			switch (temporada) {
				case "otoño":

					break;
				case "invierno":
					promedioPersonasInvierno++
					personasInvierno = cantpersonasviajando;
					break;
				case "verano":

					break;
				default:

					break;
			}
			if (contBariloche > contCataratas && contBariloche > contSalta) {
				lugarMasElegido = "Bariloche";
			} else if (contCataratas >= contBariloche && contCataratas > contSalta) {
				lugarMasElegido = "Cataratas";
			} else {
				lugarMasElegido = "Salta";
			}
		}
		console.log("El lugar más elegido es " + lugarMasElegido);
		if(sexoMas ="m" ){
		console.log("Es masculino el sexo del titular que lleva más pasajeros. " + banderaTitular);}
		if(sexoFem ="f" ){
			console.log("Es femenino la titular que lleva más pasajeros. " + banderaTitular);}
		if (promediopersonasinvierno > 0) {
			console.log("El promedio de personas por viaje,  que viajan en invierno " + (personasInvierno / promediopersonasinvierno));
		}


	}

}

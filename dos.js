/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
let marca;
let respuesta = "si";
let precio = 0;
let peso=0;
let tipo;
let acumupeso=0;
let banderasol=0;
let banderaliq=0;


  while(respuesta =="si"){
    marca=prompt("Marca de los productos");
    precio=parseFloat(prompt("Ingrese el precio "));
    while (precio<0) {
        precio=parseFloat(pomrpt("Error al ingresar el precio"));  
    }
    peso=parseFloat(prompt("Ingrese los kilos del producto"));
    while (peso<0) {
        peso=parseFloat(prompt("Error al ingresar el peso"));
    }
    acumupeso+=peso;
    tipo=prompt("Que tipo de producto es solido/liquido?: ").toLowerCase();
    while (!(tipo == "solido" || tipo == "liquido")) {
        tipo=prompt("Error al ingresar el tipo de producto");
    }
    switch (tipo) {
      case "solido":
      if(banderaliq==0 || banderaliq>precio){
        banderaliq=marca;
      } 
          break;        
      case "liquidos":
      (banderasol==0 || banderasol<precio)
          banderasol=marca;
      }
          break;
 
  }
    respuesta=prompt("Quiere ingresar otro producto? si/no");
    
  console.log("El peso total de la compra es de " + acumupeso);
  console.log("La marca del más caro de los líquidos: " + banderaliq);
  console.log("La marca del más liviano de los sólidos: " + banderasol);
}


console.log("");
console.log("---------- CONSULTAR DIAS PARA CABAÑAS EN TEMPORADA DE VERANO 2024 ---------");

/*DÍAS LIBRES EN LOS MESES DEL AÑO*/
let enero = 10; 
let febrero = 15;
let marzo = 18;
/*---------------------------------*/

/*FUNCIÓN QUE RETORNA SI ES POSIBLE RESERVAR*/
function RetornarConfirmationDias(mes, cantDias){
  if(mes === "enero"){
    if (enero >= cantDias) {
      return true;
    } else {
      return false;
    } 
  } else if (mes === "febrero"){
  
    if (febrero >= cantDias) {
      return true;
    } else {
      return false;
    }    
  } else if (mes === "marzo"){
  
    if (marzo >= cantDias) {
      return true;
    } else {
      return false;
    }
  } 

}


nombreCompleto = prompt("Ingrese su nombre y apellido.").toLowerCase();

for (let i = 0; i <= 2; i++) {
  let mes;
  let cantDias;
  let cantidadPersonas;

  switch (i) {
    case 1:
      mes = prompt("Ingrese el mes que desea alojarse.").toLowerCase()

      while(mes !== "enero" && mes !== "febrero" && mes !== "marzo"){
        console.log("no hay disponibilidad en ese mes.");
        mes = prompt("Ingrese el mes que desea alojarse.").toLowerCase();
      };

      cantDias = prompt("Ingrese los días que desea alojarse.").toLowerCase();

      while (RetornarConfirmationDias(mes, cantDias) == false) {

        console.log(`no hay disponibilidad de días señor/a ${nombreCompleto}.`);

        mes = prompt("Ingrese el mes que desea alojarse.").toLowerCase();

        while(mes !== "enero" && mes !== "febrero" && mes !== "marzo"){
          console.log("no hay disponibilidad en ese mes.");
          mes = prompt("Ingrese el mes que desea alojarse.").toLowerCase();
        };

        cantDias = prompt("Ingrese los días que desea alojarse.").toLowerCase();

      };

      break;
    case 2:
      cantidadPersonas = prompt("Ingrese la cantidad de personas qeu desean alojarse.").toLowerCase();

      while (cantidadPersonas > 2) {
        console.log("Por el momento solo quedan cabañas para dos personas");
        cantidadPersonas = prompt("Ingrese la cantidad de personas qeu desean alojarse.").toLowerCase();
      };

      case 3:
          console.log(`Gracias ${nombreCompleto} por reservar en Cabañas 'Luz y Fuerza'`);

      break;
    default:
      alert("Bienvenido al complejo de cabañas 'Luz y Fuerza'. ");
      
      break;
  }

}


























  


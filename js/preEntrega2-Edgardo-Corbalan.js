// variables
let idLugarCabaniaSeleccionada;
let FechaIngresoSeleccionada;
let FechaSalidaSeleccionada;
let cantidadPersonas;

// Clases
let lugarCabanias = [
    { idCabania: 1, nombre: "cabaña Amerian Mar del Plata", cantidadPersonas : 6 },
    { idCabania: 2, nombre: "cabaña Amerian Tandil", cantidadPersonas : 5 },
    { idCabania: 3, nombre: "cabaña Amerian Pinamar", cantidadPersonas : 4},
  ];


let fechasReservadas = [
    { idUsuario:1 ,idCabania: 1, FechaInicio: "2023-12-25", FechaFin: "2024-01-15"},
    { idUsuario:2 ,idCabania: 1, FechaInicio: "2024-02-01", FechaFin: "2024-02-15"},
    { idUsuario:3 ,idCabania: 2, FechaInicio: "2024-01-01", FechaFin: "2024-01-15"},
    { idUsuario:4 ,idCabania: 2, FechaInicio: "2024-01-16", FechaFin: "2024-01-31"},
    { idUsuario:5 ,idCabania: 3, FechaInicio: "2024-01-01", FechaFin: "2024-01-15"},
    { idUsuario:6 ,idCabania: 3, FechaInicio: "2024-01-16", FechaFin: "2024-01-31"},
  ];

let usuariosReservas = [
    { idUsuario:1 ,nombre: "Marcelo Hugo", apellido: "Fernandez", email: "marcelo_hugo@gmail.com", dni: 18569524},
    { idUsuario:2 ,nombre: "Marta", apellido: "Gomez", email: "marta1953@hotmail.com", dni: 10349652},
    { idUsuario:3 ,nombre: "Gaston", apellido: "Causas", email: "gastonCausa18@gmail.com", dni: 30259452},
    { idUsuario:4 ,nombre: "Matias", apellido: "Fanelli", email: "matfan1986@gmail.com", dni: 325946258},
    { idUsuario:5 ,nombre: "Mauro", apellido: "Consoli", email: "marmoleria_belgrano@gmail.com", dni: 32500875},
    { idUsuario:6 ,nombre: "Sergio", apellido: "Cabanas", email: "ianRue_14@gmail.com", dni: 32458263},
  ];

// Funciones globales

const existeUsuarioReserva = (nroDocumento) => {
  let existe = usuariosReservas.some( usuariosReservas =>  usuariosReservas.nroDocumento === nroDocumento);
    return existe;
  }
 
const validarFechas = (FechaIngresoSeleccionada, FechaSalidaSeleccionada, idCabania) => {

  let existe = fechasReservadas.some( fechaReserva =>
    ((FechaIngresoSeleccionada > fechaReserva.FechaInicio && FechaIngresoSeleccionada < fechaReserva.FechaFin) ||
     (FechaSalidaSeleccionada  > fechaReserva.FechaInicio && FechaSalidaSeleccionada  < fechaReserva.FechaFin)
    ) && fechaReserva.idCabania === idCabania);
  return existe;
  }


const mostrarReservas = () => {
  let fechasReservadasMap = fechasReservadas.map( fechaReserva => `Id_Usuario: ${fechaReserva.idUsuario} - Id_Cabaña: ${fechaReserva.idCabania} - Ingreso: ${fechaReserva.FechaInicio} - retiro: ${fechaReserva.FechaFin}` );
    if(fechasReservadasMap.length > 0) {
      alert(fechasReservadasMap.join("\n"));
    } else {
      alert("No hay reservas registrados");
    }
};



// Menu de inicio

const menuEliminarReserva = () => {
  let estadoEliminar = true;
  while (estadoEliminar) {
    let opcionEliminar = parseInt(
      prompt(
        `
        Bienvenido a Menú de usuarios
        1 - Mostrar reserva
        2 - Eliminar reserva
        3 - Volver
        `
      )
    );

    switch (opcionEliminar) {
      case 1:
        mostrarReservas();
        break;
      case 2:
        let idReservaSeleccionada = parseInt(prompt("Ingrese el ID de la reserva a  eliminar"));
        fechasReservadas = fechasReservadas.filter(fechasReservadas => fechasReservadas.idUsuario !== idReservaSeleccionada);

        break;
      case 3:
        estadoEliminar = false;
        menuInicio();
        break;

      default:
        alert("Ingrese una opción válida");
        break;
    }
  }
};

let estado = true;
const menuInicio = () => {
    while (estado) {
        let opcion = parseInt(
          prompt(
            `
            Menú de administración de reservas
            1 - Agregar reserva
            2 - Eliminar reserva
            3 - Salir
            `
          )
        );
    
        switch (opcion) {
          case 1:

                  idLugarCabaniaSeleccionada = parseInt(
                    prompt(
                      `
                      Seleccionar la localidad
                      1 - cabaña Amerian Mar del Plata
                      2 - cabaña Amerian Tandil
                      3 - cabaña Amerian Pinamar
                      `
                    )
                  );

                  cantidadPersonas = prompt("Ingrese la cantidad de personas que desean alojarse.");
                  let i = idLugarCabaniaSeleccionada - 1
                  let cantidad = lugarCabanias[i].cantidadPersonas;
                  while (cantidadPersonas > cantidad) {
                    alert(`supera la cantidad de personas permitidas( ${cantidad})`);
                    cantidadPersonas = prompt("Ingrese la cantidad de personas que desean alojarse.");
                  };

                  FechaIngresoSeleccionada = prompt("Ingrese la fecha de ingreso que desea alojarse.");
                  FechaSalidaSeleccionada = prompt("Ingrese la fecha  que desea retirarse.");           
                  while (validarFechas(FechaIngresoSeleccionada, FechaSalidaSeleccionada, idLugarCabaniaSeleccionada)) {
                  alert("la fechas seleccionadas no se encuentran libres.");
                  FechaIngresoSeleccionada = prompt("Ingrese la fecha de ingreso  que desea alojarse.");
                  FechaSalidaSeleccionada = prompt("Ingrese la fecha  que desea retirarse.");
                  };
                 
                  let idUsuario = usuariosReservas.length +1;
                  let nombre = prompt("Ingrese el nombre del usuario");
                  let apellido = prompt("Ingrese el apellido del usuario");
                  let dni = prompt("Ingrese el dni del usuario");
                  let email = prompt("Ingrese el email del usuario");
                  let usuarioReserva = { idUsuario: idUsuario ,nombre: nombre, apellido: apellido, email: email, dni: dni};
                  let fechaReserva = { idUsuario: idUsuario ,idCabania: idLugarCabaniaSeleccionada, FechaInicio: FechaIngresoSeleccionada, FechaFin: FechaSalidaSeleccionada}
                    
                  if(existeUsuarioReserva(dni)) {
                     fechasReservadas.push(fechaReserva)
                  } else {
                    usuariosReservas.push(usuarioReserva)
                    fechasReservadas.push(fechaReserva)
                  };       
            break;
          case 2:
            menuEliminarReserva()
            break;
          case 3: 
           estado = false
           break;
          default:
            alert("Ingrese una opción válida");
            break;
        }
      }
    };
    menuInicio();


    




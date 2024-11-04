const Vehiculo = require("./claseVehiculo") //cada auto
 const Vehiculos = require("./claseVehiculos") //array

const vehiculos = new Vehiculos();

//console.log("funciona!!!!", __dirname)

function altaAuto2() {
    console.log("funciona la funcion")
   

    // crypto.randomUUID(): para generar un id automatico;

    // creamos el auto con la clase
    const nuevoAuto = new Vehiculo(1, año, modelo, marca, cantPuertas, precio, color, tipo, combustible, habilitado, kilometros);
   console.log("nuevo auto", nuevoAuto)
   //agregamos el auto al array
    vehiculos.alta(nuevoAuto)
   

    document.getElementById('resultado').innerHTML = `<p>${vehiculos.listar()}</p>`;
    vehiculos.listar()
}
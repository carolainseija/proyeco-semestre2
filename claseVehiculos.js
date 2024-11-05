class Vehiculos {
    constructor() {
        this.vehiculos = [];
        this.cargar()
    }
    alta(NuevoVehiculo) {
        if (this.vehiculos.length != 0) { // Se ejecuta cuando el array NO es vacío
            const ultimoIndex = this.vehiculos.length - 1;
            const ultimoVehiculo = this.vehiculos[ultimoIndex];
            const ultimoId = ultimoVehiculo.id;
            NuevoVehiculo.id = ultimoId + 1;
        } else { // Se ejecuta cuando el array es vacío
            NuevoVehiculo.id = 1;
        }
        this.vehiculos.push(NuevoVehiculo);
        this.guardar()
        return NuevoVehiculo;
    }

    venta(id, reservar) {
        for (let indice = 0; indice < this.vehiculos.length; indice++) {
            const vehiculosModificar = this.vehiculos[indice];
            if (vehiculosModificar.id == id) {
                vehiculosModificar.habilitado = reservar.habilitado;
                return vehiculosModificar;
            }
        }
    }
    modificacion(id, datosModificar) {
        const index = this.vehiculos.findIndex((vehiculo) => {
            return vehiculo.id == id
        });

        const vehiculosModificar = this.vehiculos[index];
        vehiculosModificar.año = datosModificar.año;
        vehiculosModificar.modelo = datosModificar.modelo;
        vehiculosModificar.marca = datosModificar.marca;
        vehiculosModificar.cantPuertas = datosModificar.cantPuertas;
        vehiculosModificar.precio = datosModificar.precio;
        vehiculosModificar.color = datosModificar.color;
        vehiculosModificar.tipo = datosModificar.tipo;
        vehiculosModificar.combustible = datosModificar.combustible;
        vehiculosModificar.habilitado = datosModificar.habilitado;
        vehiculosModificar.kilometros = datosModificar.kilometros;
        vehiculosModificar.motor = datosModificar.motor;
        vehiculosModificar.descripción = datosModificar.descripción;


        this.guardar();
        return this.vehiculos[index];

    }
    //retornanr el array
    listar() {
        return this.vehiculos;
    }
    //retornar el elemento que concuerde con el id en parametro
    buscar(id) {
        const autoBuscado = this.vehiculos.find((auto) => {
            return auto.id == id
        });
        return autoBuscado;
    }
    //eliminar el elemento que concuerde con el id y retornar un string de mensaje
    //preguntar al profe???? si se debe eliminar 
    baja(id) {
        const index = this.vehiculos.findIndex((vehiculo) => {
            return vehiculo.id == id
        });
        this.vehiculos.splice(index, 1);
        this.guardar();
        return `Vehiculo ${id} eliminado correctamente.`;
    }
    //Lee el json 
    guardar() {
        const fs = require('fs');
        //lo guarda en el array
        fs.writeFile('datosAutos.json', JSON.stringify(this.vehiculos), (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Guardado correctamente');
            }
        });
    }
    //funcion que carga los datos en un json externo
    cargar() {
        const fs = require('fs');

        fs.readFile('datosAutos.json', (error, dato) => {
            if (error) {
                console.log(error);
            } else {
                const objetoAuto = JSON.parse(dato);
                objetoAuto.forEach((auto) => {
                    this.alta(auto);
                });
            }
        })
    }

}

module.exports = Vehiculos;

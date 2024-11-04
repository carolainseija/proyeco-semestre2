class Vehiculo {
    #id
    #año
    #modelo
    #marca
    #cantPuertas
    #precio
    #color
    #tipo
    #combustible
    #habilitado
    #kilometros
    #motor
    #caracteristicas
    constructor(id,año,modelo,marca,cantPuertas,precio,color,tipo,combustible,habilitado,kilometros, motor,  caracteristicas ) {
        this.#id = id;
        this.#año = año;
        this.#modelo = modelo;
        this.#marca = marca;
        this.#cantPuertas = cantPuertas;
        this.#precio = precio;
        this.#color = color;
        this.#tipo = tipo;
        this.#combustible = combustible;
        this.#habilitado = habilitado;
        this.#kilometros = kilometros;
        this.#motor = motor;
        this.#caracteristicas = caracteristicas;
    }
    get Id(){
        return this.#id;
    }
    get Año(){
        return this.#año;
    }
    get Modelo(){
        return this.#modelo;
    }
    get Marca(){
        return this.#marca;
    }
    get CantPuertas(){
        return this.#cantPuertas;
    }
    get Precio(){
        return this.#precio;
    }
    get Color(){
        return this.#color;
    }
    get Tipo(){
        return this.#tipo;
    }
    get Combustible(){
        return this.#combustible;
    }
    get Habilitado(){
        return this.#habilitado;
     }
     get Kilometros(){
        return this.#kilometros;
     }
     get Motor(){
        return this.#motor;
     }
     get Caracteristicas(){
        return this.#caracteristicas;
     }
    
 
    set Año(NuevoAño){
        this.#año = NuevoAño;
    }
    set Modelo(NuevoModelo){
         this.#modelo = NuevoModelo;
    }
    set Marca(NuevaMarca){
         this.#marca = NuevaMarca;
    }
    set CantPuertas(NuevaCantPuertas){
        this.#cantPuertas = NuevaCantPuertas;
    }
    set Precio(NuevoPrecio){
        this.#precio = NuevoPrecio;
    }
    set Color(NuevoColor){
        this.#color = NuevoColor;
    }
    set Tipo(NuevoTipo){
        this.#tipo = NuevoTipo;
    }
    set Combustible(NuevoCombustible){
        this.#combustible = NuevoCombustible;
    }
     set Habilitado(NuevoHabilitado){
         this.#habilitado = NuevoHabilitado;
     }
     set Kilometros(cantKms){
        this.#kilometros = cantKms;
     }
     set Motor(cantKms){
        this.#kilometros = cantKms;
     }
     set Caracteristicas(cantKms){
        this.#kilometros = cantKms;
     }
}

module.exports = Vehiculo;

const express = require ('express');
const path = require('path');
const Vehiculos = require('./claseVehiculos');

const app = express ();
app.use(express.static('assets'));
const port = 3000;
app.use(express.json()); // Para recibir json por metodo POST

const vehiculos = new Vehiculos();// Creando una instancia de la clase Productos. Clase Productos esta definida en./


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/administrador', (req,res) => {
    res.sendFile(path.join(__dirname, 'administrador.html'));
})

// app.get('/funciones', (req,res) => {
//     res.sendFile(path.join(__dirname, 'funciones.js'));
// })

app.get('/claseVehiculo', (req,res) => {
    res.sendFile(path.join(__dirname, 'claseVehiculo.js'));
})

app.get('/claseVehiculos', (req,res) => {
    res.sendFile(path.join(__dirname, 'claseVehiculos.js'));
})


app.get('/info-auto/:id', (req, res)=>{
    res.sendFile(path.join(__dirname, 'info-auto.html'));
});


//rutas del api: post, get, put, delete: de los datos
//get: autos


app.get('/autos', (req, res) => {
    res.json(vehiculos.listar()); // El array me lo retorna el método listar() de la clase Productos por lo tanto tengo que hacer referencia a ese método para que el array se transforme en un json y se pueda enviar en la respuesta.
});

//get autos/:id 
app.get('/autos/:id', (req, res) => {
    const id = req.params.id; // Obtengo el valor del parámetro id (viene en la url)
    const autoBuscado = vehiculos.buscar(id);

    if (autoBuscado) {
        res.json(vehiculos.buscar(id)); // productos.buscar(id) me retorna un objeto.
        // res.json(productos.buscar(id)) enviar un json en la respuesta
    } else {
        res.status(404).json(`No se encontró el auto con id ${id}`);
    }
});


app.post('/autos', (req, res)=>{
    const auto = req.body; //req.body : todo lo que esta en el formulario
    vehiculos.alta(auto); //agregar al array

    res.json ({
    mensaje: "auto guardado",
    auto: auto,
    // id: auto.id,
    // año: auto.año,
    // modelo: auto.modelo,
    // marca: auto.marca,
    // cantPuertas: auto.cantPuertas,
    // precio: auto.precio,
    // color: auto.color,
    // tipo: auto.tipo,
    // habilitado: auto.habilitado,
    // kilometros: auto.kilometros,
    })
})

app.delete("/autos/:id", (req, res) => {
    const id = req.params.id;
    console.log("ID", id)
    res.send(vehiculos.baja(id));
})

app.put('/autos/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
console.log("body", body)
    const autoModificado = vehiculos.modificacion(id, body);

    res.json({
        mensaje: `Auto ${id} modificado correctamente`,
        datos: autoModificado
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
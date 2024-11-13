const express = require('express');
const path = require('path');
const Vehiculos = require('./claseVehiculos');

const app = express();
app.use(express.static('assets'));
const port = 3000;
app.use(express.json());

const vehiculos = new Vehiculos();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/administrador', (req, res) => {
    res.sendFile(path.join(__dirname, 'administrador.html'));
})

app.get('/sobre-nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre-nosotros.html'));
})


app.get('/info-auto/:id', (req, res) => {
    const id = req.params.id;
    if (vehiculos.buscar(id)) {
        res.sendFile(path.join(__dirname, 'info-auto.html'));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<img style="width: 100%; height: 100%;" src="/error.jpg" alt="error 404" ><img>');
    }

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
    } else {
        res.status(404).json(`No se encontró el auto con id ${id}`);
    }
});


app.post('/autos', (req, res) => {
    const auto = req.body; //req.body : todo lo que esta en el formulario
    vehiculos.alta(auto); //agregar al array

    res.json({
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
    res.send(vehiculos.baja(id));
})

app.put('/autos/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const autoModificado = vehiculos.modificacion(id, body);

    res.json({
        mensaje: `Auto ${id} modificado correctamente`,
        datos: autoModificado
    });
});

app.put('/autos/reservar/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const autoReservado = vehiculos.venta(id, body);

    res.jso1n({
        mensaje: `Auto ${id} reservado correctamente`,
        datos: autoReservado
    });
});


app.get('*', (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<img style="width: 100%; height: 100%;" src="/error.jpg" alt="error 404" ><img>');
});



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
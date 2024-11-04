const id = window.location.pathname.split('/').pop();
// const url = "http://localhost:3000/ACA VA LA URL QUE DICE INDEX.JS" => get: app.get("productos/:id")
const url = `http://localhost:3000/productos/${id}`

async function verProducto() {
    const respuesta = await fetch(url); //respuestaConElProducto
    const producto = await respuesta.json();

    const elemento = `
    <li> ID: ${producto.id}</li>
    <li> Nombre: ${producto.name}</li>
    <li> Precio: ${producto.price}</li>
    `;

    //lo muestro en html
    document.getElementById("lista-producto").innerHTML = elemento


}

verProducto();

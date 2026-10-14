// La logica del carrito el LocalStorage
const CLAVE_CARRITO = "trendyshop-carrito";

function leerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || [];
    } catch {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

const formatoCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});

function agregarProducto(producto) {
    const carrito = leerCarrito();
    const existente = carrito.find(item => item.id === producto.id);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito(carrito);
    mostrarCarrito();
    alert("Producto agregado al carrito");
}

function mostrarCarrito() {
    const lista = document.querySelector("#lista-carrito");
    if (!lista) return; // No estamos en la página del carrito.

    const carrito = leerCarrito();
    const mensajeVacio = document.querySelector("#carrito-vacio");
    const totalElemento = document.querySelector("#total-carrito");

    lista.replaceChildren();
    mensajeVacio.hidden = carrito.length > 0;

    let total = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const imagen = document.createElement("img");
        imagen.className = "producto-imagen";
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const detalles = document.createElement("div");
        detalles.className = "producto-detalles";

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.textContent = `Precio: ${formatoCOP.format(producto.precio)}`;

        const cantidad = document.createElement("input");
        cantidad.type = "number";
        cantidad.min = "1";
        cantidad.value = producto.cantidad;
        cantidad.className = "cantidad-carrito";
        cantidad.dataset.id = producto.id;
        cantidad.setAttribute("aria-label", `Cantidad de ${producto.nombre}`);

        const totalProducto = document.createElement("p");
        totalProducto.textContent = `Subtotal: ${formatoCOP.format(subtotal)}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.className = "eliminar-producto";
        botonEliminar.dataset.id = producto.id;
        botonEliminar.textContent = "Eliminar";

        detalles.append(nombre, descripcion, precio, cantidad, totalProducto, botonEliminar);
        tarjeta.append(imagen, detalles);
        lista.append(tarjeta);
    });

    totalElemento.textContent = formatoCOP.format(total);
}

document.addEventListener("click", evento => {
    const botonAgregar = evento.target.closest(".agregar-carrito");

    if (botonAgregar) {
        agregarProducto({
            id: botonAgregar.dataset.id,
            nombre: botonAgregar.dataset.nombre,
            descripcion: botonAgregar.dataset.descripcion,
            precio: Number(botonAgregar.dataset.precio),
            imagen: botonAgregar.dataset.imagen
        });
    }

    const botonEliminar = evento.target.closest(".eliminar-producto");

    if (botonEliminar) {
        const carrito = leerCarrito().filter(
            producto => producto.id !== botonEliminar.dataset.id
        );
        guardarCarrito(carrito);
        mostrarCarrito();
    }
});

document.addEventListener("change", evento => {
    if (!evento.target.matches(".cantidad-carrito")) return;

    const carrito = leerCarrito();
    const producto = carrito.find(item => item.id === evento.target.dataset.id);

    if (producto) {
        producto.cantidad = Math.max(1, Number(evento.target.value) || 1);
        guardarCarrito(carrito);
        mostrarCarrito();
    }
});

mostrarCarrito();
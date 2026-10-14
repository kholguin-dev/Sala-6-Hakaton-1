// La logica de agregar productos al catalogo.
import { getProductosRopa } from "../services/api.js"

const catalogoHTML = document.getElementById('catalogo')
const productos = await getProductosRopa()

async function renderCatalogo(){

    productos.forEach(producto => {
        const card = document.createElement('div')
        card.classList.add('col', 'd-flex', 'justify-content-center')
        
        card.innerHTML = `
            <article id="${producto.id}" class="card catalogo-card text-start >
                <div class="card-header catalogo-card-header" style="min-height: 100px;">
                    <h3 class="catalogo-card-title">${producto.title}</h3>
                </div>
                <div class="card-body catalogo-card-body">
                    <img class="catalogo-card-image" src="${producto.image}" alt="${producto.title}">
                    <h5 class="card-title catalogo-card-price">COP $<span class="fst-italic fw-bold">${producto.price}</span></h5>
                    <div class="h-2">
                    <p class="descripcion card-text catalogo-card-description">${producto.description}</p>
                    </div>                    
                    <button type="button" class="btn btn-success fw-bold catalogo-card-button">Agregar al carrito</button>
                </div>
                <div class="card-footer text-muted">
                    <span class="fw-bold">Calificación:</span> ${producto.rating.rate}.
                </div>
            </article>
        `
        catalogoHTML.appendChild(card)
    })
}

renderCatalogo()

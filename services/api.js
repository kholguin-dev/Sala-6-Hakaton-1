// Devuelve articulos desde la API FakeStore solo ropa.

const URI = 'https://fakestoreapi.com/'

export async function getProductosRopa(){
    const petition = await fetch(URI + 'products')
    const data = await petition.json()
    const categoriaRopa = data.filter(producto => producto.category.includes('clothing'))
    return categoriaRopa      
}


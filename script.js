fetch('contactanos/index.html')
        .then(respuesta => respuesta.text()) // Lo leemos como texto
        .then(html => {
            // 2. Convertimos ese texto en un documento HTML virtual
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Buscamos la seccion que traemos
            const card_contacto = doc.querySelector('#card-contacto');
            
            // pegamos dentro del contenedor del html
            if (card_contacto) {
                document.getElementById('contactanos').appendChild(card_contacto);
            } else {
                console.log("No se encontró el formulario en el archivo externo.");
            }
        })
        .catch(error => console.error('Error al traer el formulario:', error));

fetch('contactanos/index.html')
        .then(respuesta => respuesta.text()) // Lo leemos como texto
        .then(html => {
            // 2. Convertimos ese texto en un documento HTML virtual
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Buscamos la seccion que traemos
            const card_Gestion = doc.querySelector('#card-Gestion');
            
            // pegamos dentro del contenedor del html
            if (card_Gestion) {
                document.getElementById('solicitudes').appendChild(card_Gestion);
            } else {
                console.log("No se encontró el formulario en el archivo externo.");
            }
        })
        .catch(error => console.error('Error al traer el formulario:', error));

fetch('Navbar/index.html')
        .then(respuesta => respuesta.text()) // Lo leemos como texto
        .then(html => {
            // 2. Convertimos ese texto en un documento HTML virtual
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Buscamos la seccion que traemos
            const soloFormulario = doc.querySelector('#footer');
            
            // pegamos dentro del contenedor del html
            if (soloFormulario) {
                document.getElementById('footer').appendChild(soloFormulario);
            } else {
                console.log("No se encontró el formulario en el archivo externo.");
            }
        })
        .catch(error => console.error('Error al traer el formulario:', error));
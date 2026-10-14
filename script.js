fetch('contactanos/index.html')
        .then(respuesta => respuesta.text()) // Lo leemos como texto
        .then(html => {
            // 2. Convertimos ese texto en un documento HTML virtual
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // 3. Buscamos ÚNICAMENTE el formulario usando el ID que le pusimos en el Paso 1
            const soloFormulario = doc.querySelector('#formularioContacto');
            
            // 4. Si lo encontramos, lo pegamos dentro de tu contenedor
            if (soloFormulario) {
                document.getElementById('contactanos').appendChild(soloFormulario);
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
            
            // 3. Buscamos ÚNICAMENTE el formulario usando el ID que le pusimos en el Paso 1
            const soloFormulario = doc.querySelector('#card-Gestion');
            
            // 4. Si lo encontramos, lo pegamos dentro de tu contenedor
            if (soloFormulario) {
                document.getElementById('solicitudes').appendChild(soloFormulario);
            } else {
                console.log("No se encontró el formulario en el archivo externo.");
            }
        })
        .catch(error => console.error('Error al traer el formulario:', error));
document.addEventListener("DOMContentLoaded", function(){

    const formularioContacto = document.getElementById('formularioContacto');
    const formularioGestion = document.getElementById('formularioGestion');

    function validacionFormulario(formulario, mensajeExito) {
        formulario.addEventListener('submit', function (event){
            event.preventDefault();

            if (!formulario.checkValidity()) {
                event.stopPropagation();
            formulario.classList.add('was-validated'); 
            } else {
                alert(mensajeExito);
                formulario.reset();
                formulario.classList.remove('was-validated');
            }
            }, false);
    }

    if (formularioContacto) {
        validacionFormulario(formularioContacto, "¡Gracias por contactarnos! Tu mensaje ha sido enviado.");
    }
    
    if (formularioGestion) {
        validacionFormulario(formularioGestion, "¡Gracias! Tu novedad ha sido registrada exitosamente.");
    }
});

// Script para subir lentamente
function subir() {
    /* Si la página ha bajado más de 20px subimos */
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Píxeles recorridos "de una vez"
        window.scrollBy(0, -30);

        // Tiempo que tarda en subir (3 seg)
        var arriba = setTimeout('subir()', 3);
    } else {
        // Tiempo que tarda en subir (3 seg)
        clearTimeout(arriba);
    }
};

function Ilusionista() {
    // Obtenemos el id del elemento subir y lo almacenamos en la variable "subir_arriba"
    var subir_arriba = document.getElementById('subir');

    // almacenamos la posición actual del scroll en la variable "scroll"
    var scroll = window.pageYOffset || document.body.scrollTop;

    // Si el scroll es mayor a 200px el icono de subir se muestra
    if (scroll > 200) {
        subir_arriba.style.display = 'block';
    } else {
        // Si el scroll es mayor a 200px el icono de subir se oculta
        subir_arriba.style.display = 'none';
    }
};

// Cuando la ventana detecte scroll llama a la función "Ilusionista"
window.onscroll = Ilusionista;

// Mensaje troll para el formulario
function validarFormulario() {
    alert("¿De verdad pensabas que este barco iba a llegar a buen puerto?");
};

// Start Funciones Formulario
function limpiarFormulario() {
   /* Obtenemos el id "formulario" y lo reseteamos */
	 document.getElementById("formulario").reset();
};

// Comtador de carácteres
function calcular() {
   /* Obtenemos el tamaño del contenido id "contador-char" y realizamos una cuenta recesiva */
	 var contadorChar = document.getElementById("contador-char").innerHTML = 1000 -document.formulario.comentario.value.length;
};
// End Funciones Formulario

// Start Funciones Brian Gordo
function cambiarImagen() {
   /* Establecemos la imagen de Brian Gordo */
    this.setAttribute('src','../IMAGENES/brihan.png');
};

function imagenIniciar() {
    /* Establecemos la imagen del dorso */
    this.setAttribute('src',"../IMAGENES/dorso.png");
};
// End Funciones Brian Gordo

/* cuando la ventana carga, cargamos todas las funciones */
window.onload = function() {
    // Aciones Formulario
    // Limpiar formulario, limpiamos el contenido del los input "limpiar" al hacer click
  	var botonLimpiar = document.getElementById("limpiar");
  	botonLimpiar.onclick = limpiarFormulario;

    // "Enviar" formulario,
    // Llamamos a la opción troll (alert)
  	var botonEnviar = document.getElementById("enviar");
  	botonEnviar.onclick = validarFormulario;

    // Acciones Brian Gordo
    // Cambiar la imagen cuando se pase el ratón por encima (al ponerlo y quitarlo)
    var imagen = document.getElementById("dorso");

    /* Al pasar el retón por encima aparece Brian Gordo */
    imagen.addEventListener('mouseover', cambiarImagen);

    /* Al pasar el retón por encima vuelve el dorso */
    imagen.addEventListener('mouseout', imagenIniciar);
};

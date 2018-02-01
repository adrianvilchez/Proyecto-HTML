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

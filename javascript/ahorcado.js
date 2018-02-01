var arrayPeliculas = new Array("Jumanji", "El rey de la polca", "Terminator", "Terminator 2: El juicio final", "Indiana Jones y el templo maldito", "Indiana Jones y la ultima cruzada", "Indiana Jones y el reino de la calavera de cristal", "Tiburon", "Alien, el octavo pasajero", "Aliens, el regreso", "Alien 3", "Alien resurreccion", "Prometheus", "Alien: Covenant", "Terminator 3: La rebelion de las maquinas", "Terminator: La salvacion", "Terminator: Genesis", "Guardianes de la galaxia", "Guardianes de la galaxia. Vol 2", "Iron Man", "Iron Man 2", "Iron Man 3", "Los Vengadores", "Venagadores: La era de Ultron", "Thor", "Thor: El mundo oscuro", "Thor: Ragnarok", "Star Wars: Episodio IV, Una nueva esperanza", "Star Wars: El Imperio contraataca", "Star Wars: Episodio VI El retorno del Jedi", "Star Wars: Episodio I La amenaza fantasma", "Star Wars: Episodio II El ataque de los clones", "Star Wars: Episodio III La venganza de los Sith", "Star Wars: La Guerra de los Clones", "Star Wars: El Despertar de la Fuerza", "Star Wars: Episodio VIII Los ultimos Jedi", "Jurassic Park", "El mundo perdido: Jurassic Park", "Jurassic Park III", "Jurassic World", "Hellraiser", "El rey leon", "En busca del valle encantado", "Bambi", "El señor de los anillos: La comunidad del anillo");


var peliculaAleatoria = arrayPeliculas[Math.floor(Math.random() * arrayPeliculas.length)];
peliculaAleatoria = peliculaAleatoria.toUpperCase();
//alert(peliculaAleatoria);

var letrasPelicula = peliculaAleatoria.length;

var concatLetras;

var totalLetras = new Array(letrasPelicula);

var ninot = ["../imagenes/predator/cabeza.png", "../imagenes/predator/torso.png", "../imagenes/predator/bizquierdo.png", "../imagenes/predator/bderecho.png", "../imagenes/predator/pizquierda.png", "../imagenes/predator/pderecha.png" , "../imagenes/predator/paquete.png"];

var abc123 = [ "A", "B", "C", "D", "E", "F", "G" ,"H", "I", "J", "K", "L", "M", "N", "Ñ", "O" ,"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var empezar = false;
var perder = false;
var ganar = false;
var fallos = 0;

function botonActivo(abecedario) {
    // Buscamos si la letra que pulsamos está en el array "peliculaAleatoria"
    if (peliculaAleatoria.indexOf(abecedario) != -1) {

        // Creamos un arraypara almacenar las letras encontradas
        var letras = [];

        // Creamos un bucle, en el cual si "i" es menos o igual al tamaño de
        // "peliculaAleatoria" realice la comprobación de si existe la letra
        // "abecedario" en el array "peliculaAleatoria"
        for (var i = 0; i <= peliculaAleatoria.length; i++) {
            if (peliculaAleatoria[i] === abecedario) {
                // Guardamos el valor de la posición de la letra en el array
                // "letras" con el método "push"
                letras.push(i);

                // Guardamos la letra del "abecedario" en el array "totalLetras"
                // en la posición dada por la iteración del bucle
                totalLetras[i] = [abecedario];

                // Creamos un bucle
                for (var i = 0; i < letras.length; i++) {
                    document.getElementById("input"+letras[i]).value = abecedario;
                    document.getElementById("input"+letras[i]).style.textAlign = "center";
                    document.getElementById("input"+letras[i]).style.fontSize = "0.7em";
                    document.getElementById("input"+letras[i]).style.color = "#000";

                    boton = document.getElementById(abecedario);
                    boton.style.backgroundColor = "green";
                    boton.disabled = true;
                }
                sonidoAcertar();
            }
        }
    } else {
        fallos += 1;
        //alert("La letra '" + abecedario + "' no está.");

        boton = document.getElementById(abecedario);
        boton.style.backgroundColor = "red";
        boton.style.border = "1px solid #000";
        boton.disabled = true;
        sonidoPredator();
    }

    // Comprobamos los fallos y añadimos las parte
    if (fallos == 1) {
        var cabeza = document.getElementById("cabeza");
        //cabeza.id = "cabeza";
        cabeza.src = ninot[0];
        cabeza.style.height = '83px';
        cabeza.style.width = '71px';
    } else if (fallos == 2) {
        var torso = document.getElementById("torso");
        torso.src = ninot[1];
        torso.style.height = '120px';
        torso.style.width = '70px';
    } else if (fallos == 3) {
        var bizquierdo = document.getElementById("bizquierdo");
        bizquierdo.src = ninot[2];
        bizquierdo.style.height = '148px';
        bizquierdo.style.width = '54.5px';
    } else if (fallos == 4) {
        var bderecho = document.getElementById("bderecho");
        bderecho.src = ninot[3];
        bderecho.style.height = '176px';
        bderecho.style.width = '47.5px';
    } else if (fallos == 5) {
        var pizquierda = document.getElementById("pizquierda");
        pizquierda.src = ninot[4];
        pizquierda.style.height = '192px';
        pizquierda.style.width = '50.5px';
    } else if (fallos == 6) {
        var pderecha = document.getElementById("pderecha");
        pderecha.src = ninot[5];
        pderecha.style.height = '189px';
        pderecha.style.width = '48.5px';

        var paquete = document.getElementById("paquete");
        paquete.src = ninot[6];
        paquete.style.height = '29px';
        paquete.style.width = '24px';

        perderPartida();

        var botonRendirse = document.getElementById("rendirse");
        botonRendirse.innerHTML = "Jugar de nuevo";
    }
    ganarPartida();
}

// function paqueteVolador() {
//     var paquete = document.getElementById("paquete");
//     paquete.src = ninot[6];
//     paquete.style.height = '27.5px';
//     paquete.style.width = '22px';
//
//     var posicion = 0;
//     var arriba = 0;
//     var tiempo = setInterval(mover, 10);
//
//     function mover() {
//         if (posicion >= 250) {
//             clearInterval(tiempo);
//         } else {
//             posicion += 3;
//             paquete.style.left = posicion + 'px';
//             if (arriba >= 50) {
//                 clearInterval(tiempo);
//             } else {
//                 arriba += 1;
//                 paquete.style.top = arriba + 'px';
//             }
//         }
//     }
// }



function deshabilitarBotones() {
    for (var botones = 0; botones < abc123.length; botones++) {
        document.getElementById(abc123[botones]).disabled = true;
    }
    //document.getElementById("rendirse").disabled = true;
}

function ganarPartida() {
    ganar = true;
    concatLetras = totalLetras.join("");

    if (concatLetras == peliculaAleatoria && perder == false) {
        sonidoGanar();
        deshabilitarBotones();
        document.getElementById("rendirse").innerHTML = "Jugar de nuevo";
        document.getElementById("winlos").src = "../imagenes/predator/ganador.png";
    }
}

function perderPartida() {
    perder = true;

    deshabilitarBotones();

    document.getElementById("winlos").src = "../imagenes/predator/nope.png";

    for (var x = 0; x < peliculaAleatoria.length; x++) {

        // Buscamos si la letra que pulsamos está en el array "peliculaAleatoria"
        if (peliculaAleatoria.indexOf(peliculaAleatoria[x]) != -1) {

            // Creamos un arraypara almacenar las letras encontradas
            var autocompletar = [];

            // Creamos un bucle, en el cual si "i" es menos o igual al tamaño de
            // "peliculaAleatoria" realice la comprobación de si existe la letra
            // "abecedario" en el array "peliculaAleatoria"
            for (var i = 0; i <= peliculaAleatoria.length; i++) {
                if (peliculaAleatoria[i] === peliculaAleatoria[x]) {
                    // Guardamos el valor de la posición de la letra en el array
                    // "letras" con el método "push"
                    autocompletar.push(i);

                    // Guardamos la letra del "abecedario" en el array "totalLetras"
                    // en la posición dada por la iteración del bucle
                    totalLetras[i] = [peliculaAleatoria[x]];

                    // Creamos un bucle
                    for (var i = 0; i < autocompletar.length; i++) {
                        document.getElementById("input"+autocompletar[i]).value = peliculaAleatoria[x];
                        document.getElementById("input"+autocompletar[i]).style.textAlign = "center";
                        document.getElementById("input"+autocompletar[i]).style.fontSize = "0.7em";
                        document.getElementById("input"+autocompletar[i]).style.color = "#000";
                    }
                }
            }
        }
    }
    sonidoPerder();
}

function sonidoPredator() {
    var grito = document.getElementsByTagName("audio")[1];
    /* Reproducimos el sonido */
    grito.play();
}

function sonidoAcertar() {
    var acierta = document.getElementsByTagName("audio")[2];
    /* Reproducimos el sonido */
    acierta.play();
}

function sonidoGanar() {
    var gana = document.getElementsByTagName("audio")[3];
    /* Reproducimos el sonido */
    gana.play();
}

function sonidoPerder() {
    var pierde = document.getElementsByTagName("audio")[4];
    /* Reproducimos el sonido */
    pierde.play();
}

// Reiniciamos el PAD
function reiniciar() {
    document.getElementById("formulario").reset();
    fallos = 0;

    for (var i = 0; i < abc123.length; i++) {
        boton = document.getElementById(abc123[i]);
        boton.disabled = false;
        boton.style.backgroundColor = "";
        boton.style.border = "";
    }
    reiniciarNinot();
}

/* Comprobamos los fallos, si el ninot se ha completado, cuando pulsemos a
*  "jugar de nuevo" el juego se reiniciará con una nueva película y el botón
    pasará a llamarse "rendirse" */
function rendirse() {
    if (fallos == 6 || ganar == true) {
        document.getElementById("rendirse").innerHTML = "rendirse";
        recargarPelicula();
    } else {
        var rendicion = confirm("¿Quieres rendirte?");

        if (rendicion == true) {
            recargarPelicula();
        }
    }
}

// Eliminamos los inputs generados por crearPeliculas y los volvemos a crear
function recargarPelicula() {
    reiniciar();
    eliminarPelicula();
    crearPeliculas();
}

// Reseteamos las partes del muñeco en el HTML a 0.
function reiniciarNinot() {
    document.getElementById("cabeza").src = "";
    document.getElementById("torso").src = "";
    document.getElementById("bizquierdo").src = "";
    document.getElementById("bderecho").src = "";
    document.getElementById("pizquierda").src = "";
    document.getElementById("pderecha").src = "";
    document.getElementById("paquete").src = "";

    document.getElementById("winlos").src = "";
}

// Eliminamos los inputs generados por la película y volvemos a generar una
function eliminarPelicula() {
    var eliminar = document.getElementById("formulario");

    while (eliminar.firstChild) {
      eliminar.removeChild(eliminar.firstChild);
    }

    peliculaAleatoria = arrayPeliculas[Math.floor(Math.random() * arrayPeliculas.length)];
    peliculaAleatoria = peliculaAleatoria.toUpperCase();
    letrasPelicula = peliculaAleatoria.length;
    totalLetras = new Array(letrasPelicula);
    concatLetras = 0;
    perder = false;
    ganar = false;
    empezar = false;
    fallos = 0;
}

// Si la partida no ha empezado deshabilitamos los botones
function comprobarPartida() {
    if (empezar == false) {
        deshabilitarBotones();
        document.getElementById("rendirse").disabled = true;
    }
}
//window.onload = comprobarPartida;

// Creamos el botón "Jugar" cada vez que se recargue la página
function crearEmpezar() {
    comprobarPartida();
    var crearEmpezar = document.createElement("button");
    crearEmpezar.id = "empezar";
    crearEmpezar.innerHTML = "Jugar";
    crearEmpezar.onclick = eliminarJugar;

    var addEmpezar = document.getElementById("formulario");
    addEmpezar.appendChild(crearEmpezar);
}
window.onload = crearEmpezar;


// Habilitamos los botones
function activarPartida() {
    for (var botones = 0; botones < abc123.length; botones++) {
      document.getElementById(abc123[botones]).disabled = false;
    }
    document.getElementById("rendirse").disabled = false;
}


// Eliminamos el botón "Jugar"
function eliminarJugar() {
    var obtenerPadre = document.getElementById("formulario");

    var botonEmpezar = document.getElementById("empezar");
    obtenerPadre.removeChild(botonEmpezar);

    activarPartida();
    crearPeliculas();
}


// Creamos cada uno de los inputs para la pelicula en base al tamaño de la misma
function crearPeliculas() {
    //eliminarJugar();
    empezar = true;

    var entrada = new Array(letrasPelicula);
    var crear = new Array(letrasPelicula);

    for (var j = 0; j < entrada.length; j++) {
        entrada[j] = "nuevaEntrada"+j;
        crear[j] = "crearEntrada"+j;

        nuevaEntrada = entrada[j];

        nuevaEntrada = document.createElement("input");
        nuevaEntrada.id = "input"+j;
        nuevaEntrada.style.width = "15px";
        nuevaEntrada.style.height = "17px";
        nuevaEntrada.disabled = true;

        crearEntrada = crear[j];

        crearEntrada = document.getElementById("formulario");
        crearEntrada.appendChild(nuevaEntrada);


        /* Creamos la variable audio y obtenemos el primer valor del tag
         "<audio>" */
        var audio = document.getElementsByTagName("audio")[0];

        /* Reproducimos el sonido */
        audio.play();
    }

    // Autocompletamos los espacios que pueda tener las película, los camuflamos y los mandamos al array final
    if (peliculaAleatoria.indexOf(' ') != -1) {
        var todosEspacios = [];

        for (var i = 0; i < peliculaAleatoria.length; i++) {
            if (peliculaAleatoria[i] === " ") {
                todosEspacios.push(i);
                totalLetras[i] = [" "];
                for (var i = 0; i < todosEspacios.length; i++) {
                    document.getElementById("input"+todosEspacios[i]).value = " ";
                    document.getElementById("input"+todosEspacios[i]).style.backgroundImage = "url('../imagenes/predator/camuflaje.png')";
                    document.getElementById("input"+todosEspacios[i]).disabled = true;
                    document.getElementById("input"+todosEspacios[i]).opacity = 0;
                    document.getElementById("input"+todosEspacios[i]).style.border = "none";
                }
            }
        }
    }

    // Autocompletamos los dobles puntos que pueda tener las película y los mandamos al array final
    if (peliculaAleatoria.indexOf(':') != -1) {
        var doblePunto = [];

        for (var i = 0; i < peliculaAleatoria.length; i++) {
            if (peliculaAleatoria[i] === ":") {
                doblePunto.push(i);
                totalLetras[i] = [":"];
                for (var i = 0; i <= doblePunto.length; i++) {
                    document.getElementById("input"+doblePunto[i]).value = ":";
                    document.getElementById("input"+doblePunto[i]).style.textAlign = "center";
                    document.getElementById("input"+doblePunto[i]).style.fontSize = "0.7em";
                    document.getElementById("input"+doblePunto[i]).style.color = "#000";
                }
            }
        }
    }

    // Autocompletamos las comas que pueda tener las película y las mandamos al array final
    if (peliculaAleatoria.indexOf(',') != -1) {
        var coma = [];

        for (var i = 0; i < peliculaAleatoria.length; i++) {
            if (peliculaAleatoria[i] === ",") {
                coma.push(i);
                totalLetras[i] = [","];
                for (var i = 0; i < coma.length; i++) {
                    document.getElementById("input"+coma[i]).value = ",";
                    document.getElementById("input"+coma[i]).style.textAlign = "center";
                    document.getElementById("input"+coma[i]).style.fontSize = "0.7em";
                    document.getElementById("input"+coma[i]).style.color = "#000";
                }
            }
        }
    }

    // Autocompletamos los puntos que pueda tener las película y los mandamos al array final
    if (peliculaAleatoria.indexOf('.') != -1) {
        var punto = [];

        for (var i = 0; i < peliculaAleatoria.length; i++) {
            if (peliculaAleatoria[i] === ".") {
                punto.push(i);
                totalLetras[i] = ["."];
                for (var i = 0; i <= punto.length; i++) {
                    document.getElementById("input"+punto[i]).value = ".";
                    document.getElementById("input"+punto[i]).style.textAlign = "center";
                    document.getElementById("input"+punto[i]).style.fontSize = "0.7em";
                    document.getElementById("input"+punto[i]).style.color = "#000";
                }
            }
        }
    }
}

//window.onload = crearPeliculas;

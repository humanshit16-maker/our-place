document.addEventListener(
    "DOMContentLoaded",
    function () {

        const UN_DIA =
            1000 * 60 * 60 * 24;


        /* =====================================================
           MUCHAS BURBUJAS
        ===================================================== */

        const contenedorBurbujas =
            document.getElementById(
                "burbujas"
            );


        /*
            Si quieres todavía más burbujas
            en el futuro, cambia 70 por 80,
            90, etc.
        */

        const TOTAL_BURBUJAS =
            70;


        if (contenedorBurbujas) {

            for (
                let i = 0;
                i < TOTAL_BURBUJAS;
                i++
            ) {

                const burbuja =
                    document.createElement(
                        "span"
                    );


                burbuja.className =
                    "burbuja";


                const tamano =
                    12 +
                    Math.random() *
                    78;


                const izquierda =
                    Math.random() *
                    100;


                const duracion =
                    17 +
                    Math.random() *
                    20;


                /*
                    Delay negativo para que al
                    entrar a la página YA haya
                    burbujas visibles.
                */

                const retraso =
                    -(
                        Math.random() *
                        duracion
                    );


                burbuja.style.width =
                    tamano +
                    "px";


                burbuja.style.height =
                    tamano +
                    "px";


                burbuja.style.left =
                    izquierda +
                    "%";


                burbuja.style.animationDuration =
                    duracion +
                    "s";


                burbuja.style.animationDelay =
                    retraso +
                    "s";


                contenedorBurbujas.appendChild(
                    burbuja
                );
            }
        }


        /* =====================================================
           FONDOS
        ===================================================== */

        const fondos = [

            "Fondos/Fondo1.jfif",
            "Fondos/Fondo2.jfif",
            "Fondos/Fondo3.jfif",
            "Fondos/Fondo4.png",
            "Fondos/Fondo5.png",

            "Fondos/Fondo6.jfif",
            "Fondos/Fondo7.jfif",
            "Fondos/Fondo8.jfif",
            "Fondos/Fondo9.jfif",
            "Fondos/Fondo10.jfif",

            "Fondos/Fondo11.jfif",
            "Fondos/Fondo12.jpg",
            "Fondos/Fondo13.jfif",
            "Fondos/Fondo14.jfif",
            "Fondos/Fondo15.jfif"

        ];


        const fondoPrincipal =
            document.getElementById(
                "fondoPrincipal"
            );


        if (fondoPrincipal) {

            const guardado =
                localStorage.getItem(
                    "ultimoFondo"
                );


            const fondoAnterior =
                guardado === null
                    ? -1
                    : Number(
                        guardado
                    );


            let fondoNuevo =
                Math.floor(
                    Math.random() *
                    fondos.length
                );


            if (
                fondos.length > 1 &&
                fondoNuevo ===
                    fondoAnterior
            ) {

                fondoNuevo =
                    (
                        fondoNuevo +
                        1
                    ) %
                    fondos.length;
            }


            localStorage.setItem(
                "ultimoFondo",
                String(
                    fondoNuevo
                )
            );


            fondoPrincipal
                .style
                .backgroundImage =
                    'url("' +
                    fondos[
                        fondoNuevo
                    ] +
                    '")';
        }


        /* =====================================================
           CONTADOR DE DÍAS
        ===================================================== */

        const contador =
            document.getElementById(
                "diasJuntos"
            );


        function actualizarContador() {

            if (!contador) {
                return;
            }


            const ahora =
                new Date();


            const hoyUTC =
                Date.UTC(
                    ahora.getFullYear(),
                    ahora.getMonth(),
                    ahora.getDate()
                );


            const inicioUTC =
                Date.UTC(
                    2025,
                    10,
                    17
                );


            const dias =
                Math.floor(
                    (
                        hoyUTC -
                        inicioUTC
                    ) /
                    UN_DIA
                );


            if (dias < 0) {

                contador.textContent =
                    "Aún no había comenzado 💗";

            } else {

                contador.textContent =
                    dias +
                    " días juntos 💗";
            }
        }


        actualizarContador();


        setInterval(
            actualizarContador,
            60000
        );


        /* =====================================================
           FRASES
        ===================================================== */

        const frases = [

            "De todas las casualidades, tú eres mi favorita.",

            "Aunque estemos lejos, siempre encuentro una forma de sentirte cerca.",

            "Mi parte favorita de muchos días eres tú.",

            "Nuestro pequeño mundo también existe a kilómetros de distancia.",

            "Qué bonito fue encontrarnos entre tanta gente.",

            "Un día normal contigo puede convertirse en uno de mis favoritos.",

            "La distancia cambia muchas cosas, pero no cambia lo mucho que me importas.",

            "Me gusta pensar que todavía nos quedan muchísimos recuerdos por crear.",

            "Tenerte en mi vida hace que muchas cosas sean más bonitas.",

            "Me gusta este pequeño mundo que hemos construido.",

            "Contigo hasta las conversaciones más tontas terminan siendo especiales.",

            "Hay personas que llegan y hacen que los días se sientan diferentes.",

            "No estamos en el mismo lugar, pero seguimos compartiendo nuestros días.",

            "Quiero seguir acumulando días contigo.",

            "Lo bonito no siempre necesita estar cerca para sentirse cerca.",

            "Gracias por ser parte de mis días normales y de mis días especiales.",

            "Hay muchas cosas que todavía quiero vivir contigo.",

            "Nuestra historia sigue creciendo un día a la vez.",

            "Me encanta poder decir que existimos nosotros.",

            "Otro día más en nuestro pequeño universo.",

            "A veces una llamada contigo es todo lo que necesitaba mi día.",

            "La distancia tiene kilómetros; nosotros tenemos formas de acortarlos.",

            "Qué suerte poder compartir tantas tonterías contigo.",

            "Hay recuerdos que todavía no existen y ya quiero vivirlos contigo.",

            "Nuestra página cambia, nuestros días cambian y nosotros seguimos aquí.",

            "Incluso desde lejos podemos tener lugares que sean solamente nuestros.",

            "No todos los días tienen que ser enormes para convertirse en buenos recuerdos.",

            "Las mejores historias también se construyen con momentos pequeños.",

            "Un mensaje tuyo puede cambiar completamente el ambiente de un día.",

            "Siempre hay algo nuevo que descubrir de la persona que quieres.",

            "Puede que hoy sea un día cualquiera, pero sigue siendo otro día juntos.",

            "La distancia nos obliga a ser creativos para compartir el tiempo.",

            "Me gusta que podamos encontrar diversión incluso sin saber qué hacer.",

            "Internet también puede convertirse en un lugar bonito cuando estás tú.",

            "Este pequeño rincón existe porque existimos nosotros.",

            "Siempre tendremos algún juego pendiente, alguna película y algo de qué hablar.",

            "Un montón de pequeños momentos terminan creando algo enorme.",

            "Nuestro lugar no necesita existir físicamente para sentirse nuestro.",

            "Cada día nuevo agrega otra pequeña parte a nuestra historia.",

            "Tenemos kilómetros de distancia y un montón de cosas compartidas.",

            "Hay días para jugar, días para hablar y días para simplemente estar.",

            "Nunca sabemos qué terminaremos haciendo, y eso también me gusta.",

            "Compartir el tiempo importa más que decidir perfectamente qué hacer.",

            "Me alegra haber coincidido contigo.",

            "Siempre podemos volver aquí cuando no sepamos qué hacer.",

            "Qué bonito poder construir algo poco a poco entre los dos.",

            "Este día también cuenta dentro de nuestra historia.",

            "Nos quedan muchas preguntas que responder y muchas cosas que descubrir.",

            "Una página puede ser pequeña y aun así guardar un montón de nosotros.",

            "Hoy también elegimos seguir compartiendo nuestro tiempo."

        ];


        const fraseTexto =
            document.getElementById(
                "fraseTexto"
            );


        function claveDia() {

            const hoy =
                new Date();


            return (
                hoy.getFullYear() +
                "-" +
                (
                    hoy.getMonth() +
                    1
                ) +
                "-" +
                hoy.getDate()
            );
        }


        function indiceFraseDiaria() {

            const hoy =
                new Date();


            const inicio =
                new Date(
                    hoy.getFullYear(),
                    0,
                    0
                );


            const diferencia =
                hoy -
                inicio;


            const dia =
                Math.floor(
                    diferencia /
                    UN_DIA
                );


            return (
                dia +
                hoy.getFullYear()
            ) %
            frases.length;
        }


        function mostrarFraseDiaria() {

            if (!fraseTexto) {
                return;
            }


            const fechaManual =
                localStorage.getItem(
                    "fechaFraseManual"
                );


            const fraseManual =
                localStorage.getItem(
                    "fraseManual"
                );


            if (
                fechaManual ===
                    claveDia() &&
                fraseManual
            ) {

                fraseTexto.textContent =
                    '"' +
                    fraseManual +
                    '"';

                return;
            }


            fraseTexto.textContent =
                '"' +
                frases[
                    indiceFraseDiaria()
                ] +
                '"';
        }


        mostrarFraseDiaria();


        const cambiarFrase =
            document.getElementById(
                "cambiarFrase"
            );


        if (cambiarFrase) {

            cambiarFrase.addEventListener(
                "click",
                function () {

                    let nuevaFrase;


                    do {

                        nuevaFrase =
                            frases[
                                Math.floor(
                                    Math.random() *
                                    frases.length
                                )
                            ];

                    } while (
                        frases.length >
                            1 &&
                        fraseTexto
                            .textContent
                            .includes(
                                nuevaFrase
                            )
                    );


                    localStorage.setItem(
                        "fechaFraseManual",
                        claveDia()
                    );


                    localStorage.setItem(
                        "fraseManual",
                        nuevaFrase
                    );


                    fraseTexto.textContent =
                        '"' +
                        nuevaFrase +
                        '"';
                }
            );
        }


        /* =====================================================
           ROBLOX RANDOM
        ===================================================== */

        const juegosRoblox = {

            terror: [

                "DOORS",
                "Pressure",
                "Apeirophobia",
                "The Mimic",
                "Piggy",
                "Dead Silence",
                "The Intruder",
                "Residence Massacre",
                "3008"

            ],


            obby: [

                "Tower of Hell",
                "Mega Fun Obby",
                "Altitorture",
                "Steep Steps",
                "Flood Escape 2",
                "Parkour"

            ],


            parejas: [

                "Brookhaven",
                "Berry Avenue",
                "Club Roblox",
                "Livetopia",
                "Epic Minigames",
                "Speed Draw!"

            ],


            accion: [

                "Arsenal",
                "RIVALS",
                "BedWars",
                "Combat Warriors",
                "Blade Ball",
                "Frontlines"

            ],


            aventura: [

                "Blox Fruits",
                "World // Zero",
                "Arcane Odyssey",
                "Vesteria",
                "Dungeon Quest"

            ],


            supervivencia: [

                "Natural Disaster Survival",
                "3008",
                "Evade",
                "Forsaken",
                "Flee the Facility",
                "Decaying Winter"

            ],


            casual: [

                "Epic Minigames",
                "Speed Draw!",
                "Dress To Impress",
                "Work at a Pizza Place",
                "Regretevator"

            ]

        };


        let ultimoJuego =
            "";


        function todosLosJuegos() {

            return [
                ...new Set(
                    Object
                        .values(
                            juegosRoblox
                        )
                        .flat()
                )
            ];
        }


        function abrirBusquedaRoblox(
            nombre
        ) {

            const busqueda =
                encodeURIComponent(
                    nombre
                );


            window.open(
                "https://www.roblox.com/discover/?Keyword=" +
                busqueda,
                "_blank",
                "noopener,noreferrer"
            );
        }


        const elegirJuego =
            document.getElementById(
                "elegirJuego"
            );


        if (elegirJuego) {

            elegirJuego.addEventListener(
                "click",
                function () {

                    const selector =
                        document.getElementById(
                            "categoriaRoblox"
                        );


                    const resultado =
                        document.getElementById(
                            "resultadoJuego"
                        );


                    if (
                        !selector ||
                        !resultado
                    ) {
                        return;
                    }


                    const categoria =
                        selector.value;


                    const opciones =
                        categoria ===
                        "todos"

                            ? todosLosJuegos()

                            : juegosRoblox[
                                categoria
                            ];


                    let juego;


                    do {

                        juego =
                            opciones[
                                Math.floor(
                                    Math.random() *
                                    opciones.length
                                )
                            ];

                    } while (
                        opciones.length >
                            1 &&
                        juego ===
                            ultimoJuego
                    );


                    ultimoJuego =
                        juego;


                    resultado.innerHTML =
                        "";


                    const emoji =
                        document.createElement(
                            "span"
                        );


                    emoji.className =
                        "emoji-grande";


                    emoji.textContent =
                        "🎮";


                    const titulo =
                        document.createElement(
                            "h3"
                        );


                    titulo.textContent =
                        juego;


                    const texto =
                        document.createElement(
                            "p"
                        );


                    texto.textContent =
                        "Este es el elegido. ¿Le damos?";


                    const boton =
                        document.createElement(
                            "button"
                        );


                    boton.className =
                        "boton";


                    boton.textContent =
                        "🔎 Buscar en Roblox";


                    boton.addEventListener(
                        "click",
                        function () {

                            abrirBusquedaRoblox(
                                juego
                            );
                        }
                    );


                    resultado.append(
                        emoji,
                        titulo,
                        texto,
                        boton
                    );
                }
            );
        }


        /* =====================================================
           JUEGOS FAVORITOS
        ===================================================== */

        document
            .querySelectorAll(
                "[data-juego-favorito]"
            )
            .forEach(
                function (boton) {

                    boton.addEventListener(
                        "click",
                        function () {

                            abrirBusquedaRoblox(
                                boton
                                    .dataset
                                    .juegoFavorito
                            );
                        }
                    );
                }
            );


        /* =====================================================
           PREGUNTAS
        ===================================================== */

        const preguntasGenerales = [

            "¿Cuál es uno de tus recuerdos favoritos conmigo?",

            "¿Qué juego crees que más representa nuestros momentos juntos?",

            "¿Qué película te gustaría ver conmigo próximamente?",

            "¿Qué cosa hacemos juntos que nunca te aburre?",

            "¿Cuál ha sido nuestra conversación más graciosa?",

            "¿Qué canción te recuerda a mí?",

            "¿Qué cosa pequeña de nuestra relación disfrutas mucho?",

            "¿Qué momento nuestro te gustaría repetir?",

            "¿Qué juego de Roblox deberíamos volver a jugar?",

            "¿Qué actividad nueva podríamos intentar juntos?",

            "¿Cuál es una cosa que crees que tenemos en común?",

            "¿Qué diferencia entre nosotros te parece divertida?",

            "¿Qué película crees que ambos disfrutaríamos mucho?",

            "¿Qué cosa te gustaría que hiciéramos más seguido?",

            "¿Qué palabra usarías para describir nuestra relación?",

            "¿Qué momento contigo te tomó completamente por sorpresa?",

            "¿Qué cosa mía siempre reconoces inmediatamente?",

            "¿Qué videojuego crees que podríamos completar juntos?",

            "¿Cuál ha sido una de nuestras mejores noches hablando?",

            "¿Qué cosa crees que hemos aprendido el uno del otro?",

            "¿Qué actividad elegirías para pasar toda una tarde conmigo?",

            "¿Qué serie crees que deberíamos empezar juntos?",

            "¿Qué personaje de videojuego me recuerda a ti?",

            "¿Cuál es una costumbre nuestra que te gusta?",

            "¿Qué cosa random te gustaría hacer conmigo?",

            "¿Qué es lo primero que se te ocurre cuando piensas en nosotros?",

            "¿Qué género de película disfrutas más viendo conmigo?",

            "¿Qué juego competitivo crees que deberíamos intentar?",

            "¿Qué cosa te gustaría enseñarme?",

            "¿Qué cosa te gustaría que yo te enseñara?",

            "¿Cuál de nuestras bromas internas te da más risa?",

            "¿Qué plan sencillo contigo considerarías un buen día?",

            "¿Qué momento nuestro te hizo sentir especialmente feliz?",

            "¿Qué comida sería perfecta para comer mientras vemos una película juntos?",

            "¿Qué juego deberíamos abandonar para siempre porque nos hace sufrir?",

            "¿Qué actividad podríamos convertir en una tradición?",

            "¿Qué cosa te gustaría descubrir de mí que todavía no sabes?",

            "¿Qué cosa crees que yo conozco muy bien de ti?",

            "¿Cuál ha sido una de las decisiones más random que hemos tomado juntos?",

            "¿Qué personaje ficticio crees que se parece a nosotros como pareja?",

            "¿Qué juego elegirías si solamente pudiéramos jugar uno durante una semana?",

            "¿Qué película volverías a ver conmigo aunque ya la hayas visto?",

            "¿Qué momento del día prefieres para pasar tiempo conmigo?",

            "¿Qué cosa siempre consigue que terminemos riéndonos?",

            "¿Qué nuevo hobby podríamos intentar juntos?",

            "¿Qué cosa crees que hace especial nuestra forma de hablar?",

            "¿Cuál ha sido nuestro mejor descubrimiento de un juego?",

            "¿Qué cosa te gustaría guardar como recuerdo de esta etapa?",

            "¿Qué esperas que sigamos haciendo dentro de mucho tiempo?",

            "Si tuvieras que elegir qué hacemos ahora mismo, ¿qué escogerías?"

        ];


        const preguntasCategorias = {

            tiernas: [

                "¿Cuál es tu recuerdo más bonito conmigo?",

                "¿Qué detalle mío te hace sonreír?",

                "¿Qué cosa de nuestra relación valoras muchísimo?",

                "¿Qué momento conmigo guardarías para siempre?",

                "¿Qué pequeña cosa hago que te hace sentir querida?",

                "¿Qué canción te hace pensar en nosotros?",

                "¿Cuál es tu forma favorita de pasar tiempo conmigo?",

                "¿Qué mensaje mío recuerdas especialmente?",

                "¿Qué momento nuestro te hizo sentir muy feliz?",

                "¿Qué cosa nunca quieres que dejemos de hacer?",

                "¿Qué palabra bonita usarías para describirnos?",

                "¿Qué momento cotidiano conmigo disfrutas más?",

                "¿Qué detalle nuestro te parece especial?",

                "¿Qué parte de nuestra relación te da más tranquilidad?",

                "¿Cuál es una cosa que agradeces de tenerme en tu vida?",

                "¿Cuál es uno de tus momentos favoritos hablando conmigo?",

                "¿Qué cosa te gustaría que recordáramos dentro de muchos años?",

                "¿Qué momento inesperado conmigo terminó siendo especial?",

                "¿Qué cosa te hace sentir cerca de mí aunque haya distancia?",

                "¿Qué recuerdo nuestro siempre consigue sacarte una sonrisa?",

                "¿Qué cosa de nosotros te gustaría conservar siempre?",

                "¿Cuál sería una tarde perfecta conmigo?",

                "¿Qué cosa te emociona cuando sabes que vamos a hacerla juntos?",

                "¿Qué significa para ti nuestro pequeño espacio juntos?",

                "¿Qué es lo que más disfrutas de ser nosotros?"

            ],


            graciosas: [

                "¿Quién sobreviviría menos en un apocalipsis?",

                "¿Quién se perdería primero usando un mapa?",

                "¿Quién elegiría peor una película?",

                "¿Quién se dormiría primero viendo una serie?",

                "¿Quién sobreviviría menos tiempo sin internet?",

                "¿Quién se reiría primero en una situación seria?",

                "¿Quién sería peor detective?",

                "¿Quién sería peor cocinando sin receta?",

                "¿Quién tomaría la decisión más absurda en un juego?",

                "¿Quién sería eliminado primero en un reality show?",

                "¿Quién sería peor espía?",

                "¿Quién tardaría más eligiendo qué comer?",

                "¿Quién perdería primero un objeto importante?",

                "¿Quién tendría más probabilidades de quedarse despierto demasiado tarde?",

                "¿Quién haría trampa primero en un juego de mesa?",

                "¿Quién gritaría más jugando un juego de terror?",

                "¿Quién se enfadaría más perdiendo en Roblox?",

                "¿Quién compraría algo completamente innecesario?",

                "¿Quién podría dormir durante más horas?",

                "¿Quién sería peor profesor?",

                "¿Quién se distraería primero durante una tarea importante?",

                "¿Quién tendría más probabilidades de caerse haciendo un obby?",

                "¿Quién podría sobrevivir más tiempo comiendo la misma comida?",

                "¿Quién sería más dramático por una tontería?",

                "¿Quién ganaría una competición de hacer absolutamente nada?"

            ],


            profundas: [

                "¿Qué significa para ti confiar realmente en alguien?",

                "¿Qué has aprendido de nuestra relación?",

                "¿Qué crees que hace saludable una relación?",

                "¿Qué valor nunca debería faltar entre nosotros?",

                "¿Qué significa para ti sentirte escuchada?",

                "¿Qué cosa crees que podríamos mejorar juntos?",

                "¿Qué has descubierto de ti desde que estamos juntos?",

                "¿Qué significa para ti apoyar a alguien?",

                "¿Qué consideras especialmente importante cuando existe distancia?",

                "¿Qué significa para ti tener paciencia en una relación?",

                "¿Qué crees que ayuda más a resolver un desacuerdo?",

                "¿Qué cosa te hace sentir comprendida?",

                "¿Qué cualidad valoras más en una persona?",

                "¿Qué significa para ti crecer junto a otra persona?",

                "¿Qué cosa te gustaría que siempre pudiéramos hablar con confianza?",

                "¿Qué crees que hemos aprendido uno del otro?",

                "¿Qué significa para ti respetar los límites de otra persona?",

                "¿Qué parte de nuestra comunicación te parece más importante?",

                "¿Qué cosa te gustaría que yo comprendiera todavía mejor de ti?",

                "¿Qué significa para ti estar presente aunque exista distancia?",

                "¿Qué cosa te parece importante proteger en una relación?",

                "¿Qué diferencia entre nosotros crees que nos enseña algo?",

                "¿Qué significa para ti poder ser tú misma con alguien?",

                "¿Qué esperas que nunca perdamos como pareja?",

                "¿Qué significa para ti construir algo juntos?"

            ],


            futuro: [

                "¿Qué viaje te gustaría hacer conmigo?",

                "¿Qué película deberíamos guardar para verla juntos?",

                "¿Qué actividad nueva te gustaría probar conmigo?",

                "¿Qué juego te gustaría completar conmigo?",

                "¿Qué tradición podríamos crear?",

                "¿Qué comida te gustaría probar juntos?",

                "¿Qué serie te gustaría comenzar conmigo?",

                "¿Qué recuerdo te gustaría que creáramos próximamente?",

                "¿Qué experiencia nueva te gustaría compartir conmigo?",

                "¿Qué lugar te gustaría visitar algún día conmigo?",

                "¿Qué videojuego futuro te gustaría jugar conmigo?",

                "¿Qué concierto o evento te gustaría disfrutar conmigo?",

                "¿Qué actividad sencilla te gustaría hacer en persona conmigo?",

                "¿Qué película futura tienes ganas de ver conmigo?",

                "¿Qué habilidad podríamos aprender juntos?",

                "¿Qué tipo de viaje sería perfecto para nosotros?",

                "¿Qué cosa de nuestra relación te gustaría mantener dentro de muchos años?",

                "¿Qué nuevo hobby podríamos intentar?",

                "¿Qué tipo de proyecto sería divertido crear juntos?",

                "¿Qué celebración te gustaría pasar conmigo algún día?",

                "¿Qué lugar sería divertido explorar durante todo un día?",

                "¿Qué cosa te gustaría poder decir que hicimos juntos?",

                "¿Qué juego nos imaginas jugando dentro de varios años?",

                "¿Qué sueño pequeño podríamos cumplir juntos?",

                "¿Qué recuerdo futuro te gustaría mirar algún día y decir qué buen día fue?"

            ],


            random: [

                "Si fuéramos personajes de un videojuego, ¿quiénes seríamos?",

                "¿Qué animal representa nuestra relación?",

                "¿Qué superpoder escogerías si solamente funcionara cuando estamos juntos?",

                "¿Qué nombre tendría nuestro equipo en un videojuego?",

                "¿Qué mundo ficticio te gustaría visitar conmigo?",

                "¿Qué objeto llevarías si apareciéramos juntos en una isla desierta?",

                "¿Qué película describiría mejor nuestra energía?",

                "Si tuviéramos un canal juntos, ¿de qué sería?",

                "¿Qué canción pondrías durante los créditos de nuestra historia?",

                "Si pudiéramos teletransportarnos ahora mismo, ¿a dónde iríamos?",

                "¿Qué personaje ficticio crees que se parece a mí?",

                "¿Qué personaje ficticio crees que se parece a ti?",

                "¿Qué videojuego convertirías en realidad durante un día?",

                "Si solamente pudiéramos comer una cosa hoy, ¿qué elegirías?",

                "¿Qué mascota extraña tendríamos si pudiéramos tener cualquiera?",

                "¿Qué cosa completamente absurda deberíamos hacer alguna vez?",

                "¿Cómo sería el logo oficial de nosotros?",

                "¿Qué tres emojis nos representan mejor?",

                "Si nuestra relación fuera un mapa de Roblox, ¿qué tipo de mapa sería?",

                "¿Qué título tendría una película basada en nosotros?",

                "¿Qué personaje elegirías como nuestro compañero de aventura?",

                "Si pudiéramos entrar en cualquier serie durante un episodio, ¿cuál sería?",

                "¿Qué juego inventarías específicamente para los dos?",

                "¿Qué tres objetos tendría nuestro inventario si la vida fuera un videojuego?",

                "Si nuestra página tuviera una mascota virtual, ¿qué sería?"

            ]

        };


        const preguntaTexto =
            document.getElementById(
                "preguntaTexto"
            );


        const categoriaPreguntaActual =
            document.getElementById(
                "categoriaPreguntaActual"
            );


        let ultimaPregunta =
            "";


        function elegirPregunta(
            lista,
            nombre
        ) {

            if (
                !preguntaTexto ||
                !lista ||
                lista.length === 0
            ) {
                return;
            }


            let pregunta;


            do {

                pregunta =
                    lista[
                        Math.floor(
                            Math.random() *
                            lista.length
                        )
                    ];

            } while (
                lista.length > 1 &&
                pregunta ===
                    ultimaPregunta
            );


            ultimaPregunta =
                pregunta;


            preguntaTexto.textContent =
                pregunta;


            if (
                categoriaPreguntaActual
            ) {

                categoriaPreguntaActual.textContent =
                    nombre;
            }
        }


        const preguntaGeneral =
            document.getElementById(
                "preguntaGeneral"
            );


        if (preguntaGeneral) {

            preguntaGeneral.addEventListener(
                "click",
                function () {

                    elegirPregunta(
                        preguntasGenerales,
                        "💭 GENERAL"
                    );
                }
            );
        }


        document
            .querySelectorAll(
                "[data-pregunta]"
            )
            .forEach(
                function (boton) {

                    boton.addEventListener(
                        "click",
                        function () {

                            const categoria =
                                boton
                                    .dataset
                                    .pregunta;


                            const nombres = {

                                tiernas:
                                    "💗 TIERNAS",

                                graciosas:
                                    "😂 GRACIOSAS",

                                profundas:
                                    "🧠 PROFUNDAS",

                                futuro:
                                    "🌎 FUTURO",

                                random:
                                    "🎲 RANDOM"

                            };


                            elegirPregunta(
                                preguntasCategorias[
                                    categoria
                                ],
                                nombres[
                                    categoria
                                ]
                            );
                        }
                    );
                }
            );


        /* =====================================================
           QUÉ HACEMOS
        ===================================================== */

        const actividades = [

            "🎬 Ver algo pendiente de nuestra lista",

            "🎮 Jugar Outcome Memories",

            "🏃 Jugar Evade",

            "🔫 Jugar Blood Strike",

            "🦸 Ver una película de superhéroes",

            "💕 Ver una película de romance",

            "👻 Ver una película de terror",

            "😂 Ver una película de comedia",

            "🎥 Ver una película que ninguno haya visto",

            "🍿 Ver una película que uno de los dos elija",

            "📺 Empezar una serie nueva",

            "📺 Ver un episodio de una serie pendiente",

            "🎞️ Ver una película elegida completamente al azar",

            "🎵 Escuchar nuestra playlist",

            "📹 Ver videos juntos",

            "🎮 Probar un juego nuevo de Roblox",

            "❓ Hacernos preguntas de esta página",

            "💬 Tener una noche simplemente para hablar",

            "🧩 Hacer un quiz juntos",

            "🎮 Volver a un juego que hace tiempo no jugamos",

            "🎥 Ver una película animada",

            "🕵️ Ver una película de misterio",

            "🚀 Ver una película de ciencia ficción",

            "⚔️ Ver una película de acción",

            "📺 Buscar una miniserie para ver juntos",

            "🎮 Jugar algo cooperativo",

            "🎮 Jugar algo competitivo",

            "🎥 Cada uno elige una película y el azar decide",

            "📺 Ver el primer episodio de una serie random",

            "🎵 Escuchar música mientras hablamos"

        ];


        let ultimaActividad =
            "";


        const elegirActividad =
            document.getElementById(
                "elegirActividad"
            );


        if (elegirActividad) {

            elegirActividad.addEventListener(
                "click",
                function () {

                    let actividad;


                    do {

                        actividad =
                            actividades[
                                Math.floor(
                                    Math.random() *
                                    actividades.length
                                )
                            ];

                    } while (
                        actividades.length >
                            1 &&
                        actividad ===
                            ultimaActividad
                    );


                    ultimaActividad =
                        actividad;


                    const texto =
                        document.getElementById(
                            "actividadTexto"
                        );


                    if (texto) {

                        texto.textContent =
                            actividad;
                    }
                }
            );
        }


        /* =====================================================
           MÚSICA
        ===================================================== */

        const musicaAmbiente = [

            {
                titulo:
                    "Ambiente 1",

                archivo:
                    "fondo/ambiente1.mp3"
            },

            {
                titulo:
                    "Ambiente 2",

                archivo:
                    "fondo/ambiente2.mp3"
            },

            {
                titulo:
                    "Ambiente 3",

                archivo:
                    "fondo/ambiente3.mp3"
            }

        ];


        const playlist =
            [];


        for (
            let numero = 1;
            numero <= 30;
            numero++
        ) {

            playlist.push({

                titulo:
                    String(
                        numero
                    ),

                archivo:
                    "Playlist/" +
                    numero +
                    ".mp3"

            });
        }


        const audioAmbiente =
            new Audio();


        const audioPlaylist =
            new Audio();


        audioAmbiente.preload =
            "metadata";


        audioPlaylist.preload =
            "metadata";


        audioAmbiente.volume =
            0.7;


        audioPlaylist.volume =
            0.7;


        let indiceAmbiente =
            0;


        let indicePlaylist =
            0;


        let modoMusica =
            "ambiente";


        /*
            UN SOLO BOTÓN LOOP.

            Funciona con lo que esté sonando:
            - ambiente
            - playlist
        */

        let loopActivo =
            false;


        const tituloCancion =
            document.getElementById(
                "tituloCancion"
            );


        const estadoMusica =
            document.getElementById(
                "estadoMusica"
            );


        const numeroCancion =
            document.getElementById(
                "numeroCancion"
            );


        const botonPlay =
            document.getElementById(
                "playCancion"
            );


        const botonLoop =
            document.getElementById(
                "loopCancion"
            );


        const estadoLoop =
            document.getElementById(
                "estadoLoop"
            );


        const progreso =
            document.getElementById(
                "progresoMusica"
            );


        const volumen =
            document.getElementById(
                "volumenMusica"
            );


        const tiempoActual =
            document.getElementById(
                "tiempoActual"
            );


        const duracionMusica =
            document.getElementById(
                "duracionMusica"
            );


        function formatoTiempo(
            segundos
        ) {

            if (
                !Number.isFinite(
                    segundos
                )
            ) {

                return "0:00";
            }


            const minutos =
                Math.floor(
                    segundos /
                    60
                );


            const resto =
                Math.floor(
                    segundos %
                    60
                );


            return (
                minutos +
                ":" +
                String(
                    resto
                ).padStart(
                    2,
                    "0"
                )
            );
        }


        function audioActual() {

            if (
                modoMusica ===
                "playlist"
            ) {

                return audioPlaylist;
            }


            return audioAmbiente;
        }


        /* =====================================================
           LOOP
        ===================================================== */

        function aplicarLoop() {

            /*
                Aunque se lo ponemos a ambos,
                solo uno estará reproduciéndose.
            */

            audioAmbiente.loop =
                loopActivo;


            audioPlaylist.loop =
                loopActivo;


            if (botonLoop) {

                botonLoop
                    .classList
                    .toggle(
                        "activo",
                        loopActivo
                    );
            }


            if (estadoLoop) {

                if (loopActivo) {

                    if (
                        modoMusica ===
                        "ambiente"
                    ) {

                        estadoLoop.textContent =
                            "🔁 Repitiendo ambiente actual";

                    } else {

                        estadoLoop.textContent =
                            "🔁 Repitiendo canción actual";
                    }

                } else {

                    estadoLoop.textContent =
                        "Loop desactivado";
                }
            }
        }


        if (botonLoop) {

            botonLoop.addEventListener(
                "click",
                function () {

                    loopActivo =
                        !loopActivo;


                    aplicarLoop();
                }
            );
        }


        aplicarLoop();


        function actualizarPlay() {

            if (!botonPlay) {
                return;
            }


            botonPlay.textContent =
                audioActual().paused
                    ? "▶"
                    : "⏸";
        }


        function marcarActiva() {

            document
                .querySelectorAll(
                    ".cancion-item"
                )
                .forEach(
                    function (
                        boton,
                        indice
                    ) {

                        boton
                            .classList
                            .toggle(
                                "activa",

                                modoMusica ===
                                    "playlist" &&

                                indice ===
                                    indicePlaylist
                            );
                    }
                );
        }


        /* =====================================================
           AMBIENTE
        ===================================================== */

        function cargarAmbiente(
            reproducir
        ) {

            modoMusica =
                "ambiente";


            audioPlaylist.pause();


            const cancion =
                musicaAmbiente[
                    indiceAmbiente
                ];


            audioAmbiente.src =
                cancion.archivo;


            audioAmbiente.loop =
                loopActivo;


            if (tituloCancion) {

                tituloCancion.textContent =
                    cancion.titulo;
            }


            if (estadoMusica) {

                estadoMusica.textContent =
                    "🌿 Música de fondo";
            }


            if (numeroCancion) {

                numeroCancion.textContent =
                    "Ambiente " +
                    (
                        indiceAmbiente +
                        1
                    ) +
                    " / " +
                    musicaAmbiente.length;
            }


            if (progreso) {

                progreso.value =
                    0;
            }


            if (tiempoActual) {

                tiempoActual.textContent =
                    "0:00";
            }


            if (duracionMusica) {

                duracionMusica.textContent =
                    "0:00";
            }


            marcarActiva();

            aplicarLoop();


            if (reproducir) {

                audioAmbiente
                    .play()
                    .catch(
                        function () {

                            actualizarPlay();
                        }
                    );
            }


            actualizarPlay();
        }


        function siguienteAmbiente() {

            indiceAmbiente++;


            if (
                indiceAmbiente >=
                musicaAmbiente.length
            ) {

                indiceAmbiente =
                    0;
            }


            cargarAmbiente(
                true
            );
        }


        function anteriorAmbiente() {

            indiceAmbiente--;


            if (
                indiceAmbiente <
                0
            ) {

                indiceAmbiente =
                    musicaAmbiente.length -
                    1;
            }


            cargarAmbiente(
                true
            );
        }


        /*
            Si loop = true,
            el navegador repite solo
            y "ended" no pasa al siguiente.
        */

        audioAmbiente.addEventListener(
            "ended",
            function () {

                if (!loopActivo) {

                    siguienteAmbiente();
                }
            }
        );


        /* =====================================================
           PLAYLIST
        ===================================================== */

        function reproducirPlaylist(
            indice
        ) {

            if (
                indice < 0 ||
                indice >=
                    playlist.length
            ) {

                return;
            }


            modoMusica =
                "playlist";


            indicePlaylist =
                indice;


            audioAmbiente.pause();


            const cancion =
                playlist[
                    indicePlaylist
                ];


            audioPlaylist.src =
                cancion.archivo;


            audioPlaylist.loop =
                loopActivo;


            if (tituloCancion) {

                tituloCancion.textContent =
                    cancion.titulo;
            }


            if (estadoMusica) {

                estadoMusica.textContent =
                    "🎧 Playlist";
            }


            if (numeroCancion) {

                numeroCancion.textContent =
                    (
                        indicePlaylist +
                        1
                    ) +
                    " / " +
                    playlist.length;
            }


            if (progreso) {

                progreso.value =
                    0;
            }


            if (tiempoActual) {

                tiempoActual.textContent =
                    "0:00";
            }


            if (duracionMusica) {

                duracionMusica.textContent =
                    "0:00";
            }


            marcarActiva();

            aplicarLoop();


            audioPlaylist
                .play()
                .catch(
                    function () {

                        actualizarPlay();
                    }
                );


            actualizarPlay();
        }


        function siguientePlaylist() {

            indicePlaylist++;


            if (
                indicePlaylist >=
                playlist.length
            ) {

                indicePlaylist =
                    0;
            }


            reproducirPlaylist(
                indicePlaylist
            );
        }


        function anteriorPlaylist() {

            indicePlaylist--;


            if (
                indicePlaylist <
                0
            ) {

                indicePlaylist =
                    playlist.length -
                    1;
            }


            reproducirPlaylist(
                indicePlaylist
            );
        }


        audioPlaylist.addEventListener(
            "ended",
            function () {

                if (!loopActivo) {

                    siguientePlaylist();
                }
            }
        );


        /* =====================================================
           CREAR PLAYLIST
        ===================================================== */

        const listaCanciones =
            document.getElementById(
                "listaCanciones"
            );


        if (listaCanciones) {

            listaCanciones.innerHTML =
                "";


            playlist.forEach(
                function (
                    cancion,
                    indice
                ) {

                    const boton =
                        document.createElement(
                            "button"
                        );


                    boton.className =
                        "cancion-item";


                    const nombre =
                        document.createElement(
                            "span"
                        );


                    nombre.textContent =
                        "♫ " +
                        cancion.titulo;


                    const numero =
                        document.createElement(
                            "small"
                        );


                    numero.textContent =
                        String(
                            indice +
                            1
                        ).padStart(
                            2,
                            "0"
                        );


                    boton.append(
                        nombre,
                        numero
                    );


                    boton.addEventListener(
                        "click",
                        function () {

                            reproducirPlaylist(
                                indice
                            );
                        }
                    );


                    listaCanciones
                        .appendChild(
                            boton
                        );
                }
            );
        }


        /* =====================================================
           PLAY / PAUSE
        ===================================================== */

        if (botonPlay) {

            botonPlay.addEventListener(
                "click",
                function () {

                    const audio =
                        audioActual();


                    if (!audio.src) {

                        cargarAmbiente(
                            true
                        );

                        return;
                    }


                    if (audio.paused) {

                        audio
                            .play()
                            .catch(
                                function () {

                                    actualizarPlay();
                                }
                            );

                    } else {

                        audio.pause();
                    }


                    actualizarPlay();
                }
            );
        }


        audioAmbiente.addEventListener(
            "play",
            actualizarPlay
        );


        audioAmbiente.addEventListener(
            "pause",
            actualizarPlay
        );


        audioPlaylist.addEventListener(
            "play",
            actualizarPlay
        );


        audioPlaylist.addEventListener(
            "pause",
            actualizarPlay
        );


        /* =====================================================
           SIGUIENTE / ANTERIOR
        ===================================================== */

        const siguiente =
            document.getElementById(
                "siguienteCancion"
            );


        if (siguiente) {

            siguiente.addEventListener(
                "click",
                function () {

                    /*
                        Al pulsar siguiente MANUALMENTE,
                        sí cambia incluso si loop está activo.
                    */

                    if (
                        modoMusica ===
                        "playlist"
                    ) {

                        siguientePlaylist();

                    } else {

                        siguienteAmbiente();
                    }
                }
            );
        }


        const anterior =
            document.getElementById(
                "anteriorCancion"
            );


        if (anterior) {

            anterior.addEventListener(
                "click",
                function () {

                    if (
                        modoMusica ===
                        "playlist"
                    ) {

                        anteriorPlaylist();

                    } else {

                        anteriorAmbiente();
                    }
                }
            );
        }


        /* =====================================================
           VOLVER A AMBIENTE
        ===================================================== */

        const volverAmbiente =
            document.getElementById(
                "volverAmbiente"
            );


        if (volverAmbiente) {

            volverAmbiente.addEventListener(
                "click",
                function () {

                    audioPlaylist.pause();


                    cargarAmbiente(
                        true
                    );
                }
            );
        }


        /* =====================================================
           PROGRESO
        ===================================================== */

        function actualizarProgreso() {

            const audio =
                audioActual();


            if (
                Number.isFinite(
                    audio.duration
                ) &&
                audio.duration >
                    0
            ) {

                if (progreso) {

                    progreso.value =
                        (
                            audio.currentTime /
                            audio.duration
                        ) *
                        100;
                }


                if (tiempoActual) {

                    tiempoActual.textContent =
                        formatoTiempo(
                            audio.currentTime
                        );
                }


                if (duracionMusica) {

                    duracionMusica.textContent =
                        formatoTiempo(
                            audio.duration
                        );
                }
            }
        }


        audioAmbiente.addEventListener(
            "timeupdate",
            actualizarProgreso
        );


        audioPlaylist.addEventListener(
            "timeupdate",
            actualizarProgreso
        );


        if (progreso) {

            progreso.addEventListener(
                "input",
                function () {

                    const audio =
                        audioActual();


                    if (
                        Number.isFinite(
                            audio.duration
                        ) &&
                        audio.duration >
                            0
                    ) {

                        audio.currentTime =
                            (
                                Number(
                                    progreso.value
                                ) /
                                100
                            ) *
                            audio.duration;
                    }
                }
            );
        }


        /* =====================================================
           METADATA
        ===================================================== */

        function actualizarMetadata(
            audio
        ) {

            if (
                audio !==
                audioActual()
            ) {

                return;
            }


            if (duracionMusica) {

                duracionMusica.textContent =
                    formatoTiempo(
                        audio.duration
                    );
            }
        }


        audioAmbiente.addEventListener(
            "loadedmetadata",
            function () {

                actualizarMetadata(
                    audioAmbiente
                );
            }
        );


        audioPlaylist.addEventListener(
            "loadedmetadata",
            function () {

                actualizarMetadata(
                    audioPlaylist
                );
            }
        );


        /* =====================================================
           VOLUMEN
        ===================================================== */

        if (volumen) {

            volumen.addEventListener(
                "input",
                function () {

                    const nivel =
                        Number(
                            volumen.value
                        );


                    audioAmbiente.volume =
                        nivel;


                    audioPlaylist.volume =
                        nivel;
                }
            );
        }


        /* =====================================================
           ENTRAR
        ===================================================== */

        const botonEntrar =
            document.getElementById(
                "botonEntrar"
            );


        if (botonEntrar) {

            botonEntrar.addEventListener(
                "click",
                function () {

                    const entrada =
                        document.getElementById(
                            "pantallaEntrada"
                        );


                    if (entrada) {

                        entrada
                            .classList
                            .add(
                                "oculta"
                            );
                    }


                    indiceAmbiente =
                        Math.floor(
                            Math.random() *
                            musicaAmbiente.length
                        );


                    cargarAmbiente(
                        true
                    );
                }
            );
        }


        /* =====================================================
           CALENDARIO EDITABLE
        ===================================================== */

        const meses = [

            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",

            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"

        ];


        const iconosTipo = {

            importante:
                "💗",

            aniversario:
                "🌎",

            recuerdo:
                "🫧",

            juego:
                "🎮"

        };


        /*
            Aquí se guardan los eventos
            en localStorage.
        */

        const CLAVE_EVENTOS =
            "dyf_fechas_importantes_v1";


        function cargarEventos() {

            try {

                const datos =
                    JSON.parse(
                        localStorage.getItem(
                            CLAVE_EVENTOS
                        )
                    );


                if (
                    datos &&
                    typeof datos ===
                        "object"
                ) {

                    return datos;
                }

            } catch (error) {

                console.warn(
                    "No se pudieron cargar las fechas.",
                    error
                );
            }


            return {};
        }


        let eventos =
            cargarEventos();


        function guardarEventos() {

            localStorage.setItem(
                CLAVE_EVENTOS,
                JSON.stringify(
                    eventos
                )
            );
        }


        /*
            Formato:

            2026-09-02
        */

        function claveFecha(
            anio,
            mes,
            dia
        ) {

            return (
                anio +
                "-" +
                String(
                    mes +
                    1
                ).padStart(
                    2,
                    "0"
                ) +
                "-" +
                String(
                    dia
                ).padStart(
                    2,
                    "0"
                )
            );
        }


        /*
            Añadimos el aniversario original
            solamente si aún no existe.
        */

        const claveAniversario =
            "2025-11-17";


        if (
            !eventos[
                claveAniversario
            ]
        ) {

            eventos[
                claveAniversario
            ] = {

                tipo:
                    "aniversario",

                titulo:
                    "Nuestro aniversario",

                descripcion:
                    "El día en que comenzó oficialmente nuestro lugarcito: 17 de noviembre de 2025."

            };


            guardarEventos();
        }


        const fechaCalendario =
            new Date();


        let mesActual =
            fechaCalendario.getMonth();


        let anioActual =
            fechaCalendario.getFullYear();


        let diaSeleccionado =
            null;


        const tituloMes =
            document.getElementById(
                "tituloMes"
            );


        const calendarioDias =
            document.getElementById(
                "calendarioDias"
            );


        const fechaSeleccionadaTexto =
            document.getElementById(
                "fechaSeleccionadaTexto"
            );


        const tipoFecha =
            document.getElementById(
                "tipoFecha"
            );


        const tituloFecha =
            document.getElementById(
                "tituloFecha"
            );


        const descripcionFecha =
            document.getElementById(
                "descripcionFecha"
            );


        const guardarFecha =
            document.getElementById(
                "guardarFecha"
            );


        const eliminarFecha =
            document.getElementById(
                "eliminarFecha"
            );


        /* =====================================================
           EDITOR DE FECHA
        ===================================================== */

        function cargarEditor() {

            if (
                diaSeleccionado ===
                null
            ) {

                if (
                    fechaSeleccionadaTexto
                ) {

                    fechaSeleccionadaTexto.textContent =
                        "Elige un día del calendario";
                }


                if (tituloFecha) {

                    tituloFecha.value =
                        "";
                }


                if (
                    descripcionFecha
                ) {

                    descripcionFecha.value =
                        "";
                }


                return;
            }


            const clave =
                claveFecha(
                    anioActual,
                    mesActual,
                    diaSeleccionado
                );


            const evento =
                eventos[
                    clave
                ];


            if (
                fechaSeleccionadaTexto
            ) {

                fechaSeleccionadaTexto.textContent =
                    diaSeleccionado +
                    " de " +
                    meses[
                        mesActual
                    ] +
                    " de " +
                    anioActual;
            }


            if (evento) {

                if (tipoFecha) {

                    tipoFecha.value =
                        evento.tipo ||
                        "importante";
                }


                if (tituloFecha) {

                    tituloFecha.value =
                        evento.titulo ||
                        "";
                }


                if (
                    descripcionFecha
                ) {

                    descripcionFecha.value =
                        evento.descripcion ||
                        "";
                }

            } else {

                if (tipoFecha) {

                    tipoFecha.value =
                        "importante";
                }


                if (tituloFecha) {

                    tituloFecha.value =
                        "";
                }


                if (
                    descripcionFecha
                ) {

                    descripcionFecha.value =
                        "";
                }
            }
        }


        /* =====================================================
           DIBUJAR CALENDARIO
        ===================================================== */

        function dibujarCalendario() {

            if (
                !tituloMes ||
                !calendarioDias
            ) {

                return;
            }


            calendarioDias.innerHTML =
                "";


            tituloMes.textContent =
                meses[
                    mesActual
                ] +
                " " +
                anioActual;


            const primerDia =
                new Date(
                    anioActual,
                    mesActual,
                    1
                );


            /*
                Domingo = 0 en JS.

                Lo convertimos a:
                Lunes = 0
            */

            const indiceSemana =
                (
                    primerDia.getDay() +
                    6
                ) %
                7;


            const cantidadDias =
                new Date(
                    anioActual,
                    mesActual +
                        1,
                    0
                ).getDate();


            /*
                Casillas vacías antes
                del primer día.
            */

            for (
                let i = 0;
                i < indiceSemana;
                i++
            ) {

                const vacio =
                    document.createElement(
                        "div"
                    );


                vacio.className =
                    "dia-calendario vacio";


                calendarioDias
                    .appendChild(
                        vacio
                    );
            }


            const hoy =
                new Date();


            /*
                Crear los días.
            */

            for (
                let dia = 1;
                dia <= cantidadDias;
                dia++
            ) {

                const boton =
                    document.createElement(
                        "button"
                    );


                boton.type =
                    "button";


                boton.className =
                    "dia-calendario";


                const clave =
                    claveFecha(
                        anioActual,
                        mesActual,
                        dia
                    );


                const evento =
                    eventos[
                        clave
                    ];


                const numero =
                    document.createElement(
                        "span"
                    );


                numero.className =
                    "numero-dia";


                numero.textContent =
                    String(
                        dia
                    );


                boton.appendChild(
                    numero
                );


                /*
                    Si el día tiene evento,
                    colorearlo y poner icono.
                */

                if (evento) {

                    const tipo =
                        evento.tipo ||
                        "importante";


                    boton.classList.add(
                        tipo
                    );


                    const marca =
                        document.createElement(
                            "span"
                        );


                    marca.className =
                        "marca-evento";


                    marca.textContent =
                        iconosTipo[
                            tipo
                        ] ||
                        "💗";


                    boton.appendChild(
                        marca
                    );


                    boton.title =
                        evento.titulo ||
                        "Fecha marcada";
                }


                /*
                    Marcar el día de hoy.
                */

                if (
                    dia ===
                        hoy.getDate() &&

                    mesActual ===
                        hoy.getMonth() &&

                    anioActual ===
                        hoy.getFullYear()
                ) {

                    boton.classList.add(
                        "hoy"
                    );
                }


                /*
                    Día seleccionado.
                */

                if (
                    diaSeleccionado ===
                    dia
                ) {

                    boton.classList.add(
                        "seleccionado"
                    );
                }


                boton.addEventListener(
                    "click",
                    function () {

                        diaSeleccionado =
                            dia;


                        dibujarCalendario();


                        cargarEditor();
                    }
                );


                calendarioDias
                    .appendChild(
                        boton
                    );
            }
        }


        /* =====================================================
           CAMBIAR MES
        ===================================================== */

        const mesAnterior =
            document.getElementById(
                "mesAnterior"
            );


        const mesSiguiente =
            document.getElementById(
                "mesSiguiente"
            );


        if (mesAnterior) {

            mesAnterior.addEventListener(
                "click",
                function () {

                    mesActual--;


                    if (
                        mesActual <
                        0
                    ) {

                        mesActual =
                            11;


                        anioActual--;
                    }


                    diaSeleccionado =
                        null;


                    dibujarCalendario();


                    cargarEditor();
                }
            );
        }


        if (mesSiguiente) {

            mesSiguiente.addEventListener(
                "click",
                function () {

                    mesActual++;


                    if (
                        mesActual >
                        11
                    ) {

                        mesActual =
                            0;


                        anioActual++;
                    }


                    diaSeleccionado =
                        null;


                    dibujarCalendario();


                    cargarEditor();
                }
            );
        }


        /* =====================================================
           GUARDAR FECHA
        ===================================================== */

        if (guardarFecha) {

            guardarFecha.addEventListener(
                "click",
                function () {

                    if (
                        diaSeleccionado ===
                        null
                    ) {

                        alert(
                            "Primero selecciona un día del calendario."
                        );

                        return;
                    }


                    const clave =
                        claveFecha(
                            anioActual,
                            mesActual,
                            diaSeleccionado
                        );


                    eventos[
                        clave
                    ] = {

                        tipo:
                            tipoFecha
                                ? tipoFecha.value
                                : "importante",

                        titulo:
                            tituloFecha
                                ? tituloFecha.value.trim()
                                : "",

                        descripcion:
                            descripcionFecha
                                ? descripcionFecha.value.trim()
                                : ""

                    };


                    /*
                        Si dejan el título vacío,
                        ponemos uno por defecto.
                    */

                    if (
                        !eventos[
                            clave
                        ].titulo
                    ) {

                        eventos[
                            clave
                        ].titulo =
                            "Fecha especial";
                    }


                    guardarEventos();


                    dibujarCalendario();


                    cargarEditor();
                }
            );
        }


        /* =====================================================
           ELIMINAR FECHA
        ===================================================== */

        if (eliminarFecha) {

            eliminarFecha.addEventListener(
                "click",
                function () {

                    if (
                        diaSeleccionado ===
                        null
                    ) {

                        alert(
                            "Primero selecciona un día del calendario."
                        );

                        return;
                    }


                    const clave =
                        claveFecha(
                            anioActual,
                            mesActual,
                            diaSeleccionado
                        );


                    if (
                        eventos[
                            clave
                        ]
                    ) {

                        delete eventos[
                            clave
                        ];


                        guardarEventos();
                    }


                    dibujarCalendario();


                    cargarEditor();
                }
            );
        }


        /* =====================================================
           INICIAR CALENDARIO
        ===================================================== */

        dibujarCalendario();

        cargarEditor();

    }
);

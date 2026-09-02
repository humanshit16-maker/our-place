document.addEventListener("DOMContentLoaded", function () {

    const UN_DIA = 1000 * 60 * 60 * 24;


    /* =================================================
       FONDOS
    ================================================= */

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

    const fondoPrincipal = document.getElementById("fondoPrincipal");

    if (fondoPrincipal) {

        const guardado =
            localStorage.getItem("ultimoFondo");

        const fondoAnterior =
            guardado === null
                ? -1
                : Number(guardado);

        let fondoNuevo =
            Math.floor(
                Math.random() * fondos.length
            );

        if (
            fondos.length > 1 &&
            fondoNuevo === fondoAnterior
        ) {
            fondoNuevo =
                (fondoNuevo + 1) %
                fondos.length;
        }

        localStorage.setItem(
            "ultimoFondo",
            String(fondoNuevo)
        );

        fondoPrincipal.style.backgroundImage =
            'url("' +
            fondos[fondoNuevo] +
            '")';
    }


    /* =================================================
       CONTADOR DE DÍAS
    ================================================= */

    const contador =
        document.getElementById("diasJuntos");

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
                (hoyUTC - inicioUTC) /
                UN_DIA
            );

        contador.textContent =
            dias < 0
                ? "Aún no había comenzado 💗"
                : dias +
                  " días juntos 💗";
    }

    actualizarContador();

    setInterval(
        actualizarContador,
        60000
    );


    /* =================================================
       FRASES
    ================================================= */

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
            (hoy.getMonth() + 1) +
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
            hoy - inicio;

        const dia =
            Math.floor(
                diferencia /
                UN_DIA
            );

        return (
            dia +
            hoy.getFullYear()
        ) % frases.length;
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
            fechaManual === claveDia() &&
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
            frases[indiceFraseDiaria()] +
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
                    frases.length > 1 &&
                    fraseTexto.textContent.includes(
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


    /* =================================================
       ROBLOX
    ================================================= */

    const juegosRoblox = {

        terror: [
            "DOORS",
            "Pressure",
            "Apeirophobia",
            "The Mimic",
            "Piggy",
            "Dead Silence",
            "Specter 2",
            "The Intruder",
            "Residence Massacre",
            "3008"
        ],

        obby: [
            "Tower of Hell",
            "Mega Fun Obby",
            "Obby But You're on a Bike",
            "Altitorture",
            "Steep Steps",
            "Flood Escape 2",
            "Difficulty Chart Obby",
            "Parkour",
            "Tower of Jump",
            "Barry's Prison Run"
        ],

        parejas: [
            "Brookhaven",
            "Berry Avenue",
            "Club Roblox",
            "Livetopia",
            "Adopt Me!",
            "Epic Minigames",
            "Speed Draw!",
            "Together",
            "Carry Me!",
            "Copyrighted Artists"
        ],

        accion: [
            "Arsenal",
            "RIVALS",
            "BedWars",
            "Combat Warriors",
            "Blade Ball",
            "Energy Assault",
            "Phantom Forces",
            "Typical Colors 2",
            "Frontlines",
            "Untitled Tag Game"
        ],

        aventura: [
            "Blox Fruits",
            "World // Zero",
            "Arcane Odyssey",
            "Pilgrammed",
            "Vesteria",
            "Fantastic Frontier",
            "Adventure Up!",
            "Dragon Adventures",
            "Islands",
            "Dungeon Quest"
        ],

        supervivencia: [
            "Natural Disaster Survival",
            "3008",
            "Survive the Killer!",
            "Evade",
            "Forsaken",
            "Flee the Facility",
            "The Survival Game",
            "Zombie Uprising",
            "Decaying Winter",
            "Booga Booga"
        ],

        carreras: [
            "Driving Empire",
            "Midnight Racing: Tokyo",
            "Car Crushers 2",
            "Vehicle Legends",
            "Drive World",
            "Ultimate Driving",
            "Taxi Boss",
            "Project Trackday",
            "Ion Formula Racing",
            "Motorush!"
        ],

        tycoon: [
            "Theme Park Tycoon 2",
            "Restaurant Tycoon 2",
            "Retail Tycoon 2",
            "Lumber Tycoon 2",
            "Airport Tycoon",
            "Mall Tycoon",
            "My Prison",
            "Game Store Tycoon",
            "Clone Tycoon 2",
            "Miner's Haven"
        ],

        casual: [
            "Epic Minigames",
            "Speed Draw!",
            "Dress To Impress",
            "Work at a Pizza Place",
            "Natural Disaster Survival",
            "Super Bomb Survival",
            "Hide and Seek Extreme",
            "Outlaster",
            "Mic Up",
            "Regretevator"
        ]
    };


    let ultimoJuego = "";


    function todosLosJuegos() {

        return [
            ...new Set(
                Object.values(
                    juegosRoblox
                ).flat()
            )
        ];
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
                    categoria === "todos"
                        ? todosLosJuegos()
                        : juegosRoblox[categoria];

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
                    opciones.length > 1 &&
                    juego === ultimoJuego
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

                        const busqueda =
                            encodeURIComponent(
                                juego
                            );

                        window.open(
                            "https://www.roblox.com/discover/?Keyword=" +
                            busqueda,
                            "_blank",
                            "noopener,noreferrer"
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


    /* =================================================
       PREGUNTAS
    ================================================= */

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
            pregunta === ultimaPregunta
        );


        ultimaPregunta =
            pregunta;


        preguntaTexto.textContent =
            pregunta;


        if (categoriaPreguntaActual) {

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
                            boton.dataset.pregunta;


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


    /* =================================================
       QUÉ HACEMOS
    ================================================= */

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
                    actividades.length > 1 &&
                    actividad === ultimaActividad
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


    /* =================================================
       MÚSICA
    ================================================= */

    const musicaAmbiente = [

        {
            titulo: "Ambiente 1",
            archivo:
                "fondo/ambiente1.mp3"
        },

        {
            titulo: "Ambiente 2",
            archivo:
                "fondo/ambiente2.mp3"
        },

        {
            titulo: "Ambiente 3",
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
                String(numero),

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
                segundos / 60
            );


        const resto =
            Math.floor(
                segundos % 60
            );


        return (
            minutos +
            ":" +
            String(resto)
                .padStart(
                    2,
                    "0"
                )
        );
    }


    function audioActual() {

        return (
            modoMusica ===
            "playlist"
        )
            ? audioPlaylist
            : audioAmbiente;
    }


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

                    boton.classList.toggle(
                        "activa",

                        modoMusica ===
                            "playlist" &&

                        indice ===
                            indicePlaylist
                    );
                }
            );
    }


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
                (indiceAmbiente + 1) +
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

        indiceAmbiente =
            (
                indiceAmbiente +
                1
            ) %
            musicaAmbiente.length;


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


    audioAmbiente.addEventListener(
        "ended",
        siguienteAmbiente
    );


    function reproducirPlaylist(
        indice
    ) {

        if (
            indice < 0 ||
            indice >= playlist.length
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
                (indicePlaylist + 1) +
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

        indicePlaylist =
            (
                indicePlaylist +
                1
            ) %
            playlist.length;


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
        siguientePlaylist
    );


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
                        indice + 1
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


                listaCanciones.appendChild(
                    boton
                );
            }
        );
    }


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


    const siguiente =
        document.getElementById(
            "siguienteCancion"
        );


    if (siguiente) {

        siguiente.addEventListener(
            "click",
            function () {

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


    function actualizarProgreso() {

        const audio =
            audioActual();


        if (
            Number.isFinite(
                audio.duration
            ) &&
            audio.duration > 0
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
                    audio.duration > 0
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


    function metadata() {

        const audio =
            audioActual();


        if (duracionMusica) {

            duracionMusica.textContent =
                formatoTiempo(
                    audio.duration
                );
        }
    }


    audioAmbiente.addEventListener(
        "loadedmetadata",
        metadata
    );


    audioPlaylist.addEventListener(
        "loadedmetadata",
        metadata
    );


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


    /* =================================================
       BOTÓN ENTRAR
    ================================================= */

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

                    entrada.classList.add(
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


    /* =================================================
       CALENDARIO
    ================================================= */

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


    /*
        AQUÍ PODREMOS AGREGAR
        TODAS LAS FECHAS IMPORTANTES
        QUE QUIERAS.
    */

    const fechasImportantes = [

        {
            mes: 11,

            dia: 17,

            icono:
                "🌎",

            titulo:
                "Nuestro aniversario",

            descripcion:
                "El día en que comenzó oficialmente nuestro lugarcito: 17 de noviembre de 2025."
        }
    ];


    const fechaCalendario =
        new Date();


    let mesActual =
        fechaCalendario.getMonth();


    let anioActual =
        fechaCalendario.getFullYear();


    const tituloMes =
        document.getElementById(
            "tituloMes"
        );


    const calendarioDias =
        document.getElementById(
            "calendarioDias"
        );


    const eventoCalendario =
        document.getElementById(
            "eventoCalendario"
        );


    function buscarEvento(
        mes,
        dia
    ) {

        return fechasImportantes.find(
            function (evento) {

                return (
                    evento.mes ===
                        mes + 1 &&

                    evento.dia ===
                        dia
                );
            }
        );
    }


    function mostrarEvento(
        evento,
        dia,
        mes,
        anio
    ) {

        if (!eventoCalendario) {
            return;
        }


        eventoCalendario.innerHTML =
            "";


        const icono =
            document.createElement(
                "div"
            );


        icono.className =
            "evento-icono";


        icono.textContent =
            evento
                ? evento.icono
                : "🫧";


        const contenido =
            document.createElement(
                "div"
            );


        const small =
            document.createElement(
                "small"
            );


        small.textContent =
            dia +
            " " +
            meses[mes] +
            " " +
            anio;


        const titulo =
            document.createElement(
                "strong"
            );


        const descripcion =
            document.createElement(
                "p"
            );


        if (evento) {

            titulo.textContent =
                evento.titulo;


            descripcion.textContent =
                evento.descripcion;

        } else {

            titulo.textContent =
                "Un día normalito";


            descripcion.textContent =
                "Esta fecha todavía no tiene un evento especial marcado.";
        }


        contenido.append(
            small,
            titulo,
            descripcion
        );


        eventoCalendario.append(
            icono,
            contenido
        );
    }


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
            meses[mesActual] +
            " " +
            anioActual;


        const primerDia =
            new Date(
                anioActual,
                mesActual,
                1
            );


        /*
            JavaScript:
            domingo = 0

            Nosotros queremos:
            lunes = primera columna.
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
                mesActual + 1,
                0
            ).getDate();


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


            calendarioDias.appendChild(
                vacio
            );
        }


        const hoy =
            new Date();


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


            const numero =
                document.createElement(
                    "span"
                );


            numero.className =
                "numero-dia";


            numero.textContent =
                String(dia);


            boton.appendChild(
                numero
            );


            const evento =
                buscarEvento(
                    mesActual,
                    dia
                );


            if (evento) {

                boton.classList.add(
                    "especial"
                );


                const marca =
                    document.createElement(
                        "span"
                    );


                marca.className =
                    "marca-evento";


                marca.textContent =
                    evento.icono;


                boton.appendChild(
                    marca
                );
            }


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


            boton.addEventListener(
                "click",
                function () {

                    mostrarEvento(
                        evento,
                        dia,
                        mesActual,
                        anioActual
                    );
                }
            );


            calendarioDias.appendChild(
                boton
            );
        }
    }


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
                    mesActual < 0
                ) {

                    mesActual =
                        11;

                    anioActual--;
                }


                dibujarCalendario();
            }
        );
    }


    if (mesSiguiente) {

        mesSiguiente.addEventListener(
            "click",
            function () {

                mesActual++;


                if (
                    mesActual > 11
                ) {

                    mesActual =
                        0;

                    anioActual++;
                }


                dibujarCalendario();
            }
        );
    }


    dibujarCalendario();

});

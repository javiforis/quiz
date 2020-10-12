let cuestionario = document.querySelector("#juego");
let resultados = document.querySelector("#puntuacion");
let click = 0;
let boton = document.querySelector("#button1");

//-----------------------------------------------------------------

let questions = [
    {
        question: "¿Qué escenario de La Comunidad del Anillo se contruyó en una antigua base naval?",
        answers: ["Bree", "Isengard", "La cima de los vientos"],
        image: "/imagenes/Bree.png",
        expected: 0
    },
    {
        question: "¿¿Quién le dice a Frodo: Hasta el más pequeño puede cambiar el curso del futuro?",
        answers: ["Elrond", "Galadriel", "Gandalf"],
        image: "/imagenes/Galadriel.png",
        expected: 1
    },
    {
        question: "¿Cuántos guerreros ha matado Legolas en el Abismo de Helm mientras Gimli lleva dos?",
        answers: ["27", "17", "21"],
        image: "/imagenes/legolas.jpg",
        expected: 1
    },
    {
        question: "¿Qué hobbit es el primero en pedir una pinta entera de cerveza en la Posada del Pony Pisador?",
        answers: ["Merry", "Sam", "Pippin"],
        image: "/imagenes/Merry.png",
        expected: 0
    },
    {   question: "¿La hija de qué actor en la vida real hace de Elanor, su hija en la pantalla, en El Retorno del Rey?",
        answers: ["Hugo Weaving", "Sean Astin", "Bernard Hill"],
        image: "/imagenes/Sean.png",
        expected: 1
    },
    {
        question: "¿Qué fobia tiene Peter Jackson?",
        answers: ["Arañas", "Oscuridad", "Sitios cerrados"],
        image: "/imagenes/Peter.jpg",
        expected: 0
    },
    {
        question: "¿Qué miembro de la Compañía recoge el anillo en la nieve, cerca del Paso de Caradhras?",
        answers: ["Gandalf", "Boromir", "Sam"],
        image: "/imagenes/Boromir.png",
        expected: 1
    },
    {
        question: "¿Quién dice: Esta no es nuestra guerra?",
        answers: ["Barbol", "Theoden", "Elrond"],
        image: "/imagenes/Barbol.png",
        expected: 0
    },
    {
        question: "¿Quién compuso, orquestó y dirigió la música de la trilogía?",
        answers: ["Hans Zimmer", "John Williams", "Howard Shore"],
        image: "/imagenes/Howard.png",
        expected: 2
    },
    {
        question: "¿En qué año se estrenó la película El Retorno del Rey?",
        answers: ["2001", "2002", "2003"],
        image: "/imagenes/2003.png",
        expected: 2
    },
    {
        question: "¿Cuántas nominaciones a los Oscar tuvo Las Dos Torres?",
        answers: ["4", "9", "6"],
        image: "/imagenes/Nominaciones.png",
        expected: 2
    },
    {
        question: "¿Cuántos meses se tardó en rodar las tres películas?",
        answers: ["15", "12", "18"],
        image: "/imagenes/Rodaje.jpg",
        expected: 0
    },
    {
        question: "¿Qué parentesco tiene Gimli con Balin?",
        answers: ["Hijo", "Hermanos", "Primos"],
        image: "/imagenes/gimli.jpg",
        expected: 2
    },
    {
        question: "De las 11 nominaciones que tuvo El Retorno del Rey, ¿Cuántos Oscars consiguieron?",
        answers: ["9", "11", "7"],
        image: "/imagenes/nominaciones2.png",
        expected: 1
    }
];

// ---------------------------------------------------------------

let respuestaCorrecta = [];
let numeroRespuestas = questions.length;
for (i = 0; i < numeroRespuestas; i++) {
    respuestaCorrecta.push(questions[i].expected);
}

//----------------------------------------------------------------

let respuestas = []; // esto es para meter las respuestas que va clickando la persona

//----------------------------------------------------------------


let formulario = `
    <form id="juego" name ="dnd" action="" method="GET">
         <fieldset>
             <legend>${questions[click].question}</legend>
             <label for="respuesta-1">${questions[click].answers[0]}</label>
             <input id="respuesta-1" type="radio" name="correct" value="${questions[click].expected}">
             <label for="respuesta-2">${questions[click].answers[1]}</label>
             <input id="respuesta-2" type="radio" name="correct" value="${questions[click].expected}">
             <label for="respuesta-3">${questions[click].answers[2]}</label>
             <input id="respuesta-3" type="radio" name="correct" value="${questions[click].expected}">
             <img src=${questions[click].image} alt="image" title="Quiz">
         </fieldset>
    </form> `;

cuestionario.innerHTML = formulario;

function cambio(index) {
    if (click < numeroRespuestas -1) {
        click += 1;
        formulario = `
        <form id= "juego" name ="dnd" action="" method="GET">
        <fieldset>
            <legend>${questions[click].question}</legend>
            <label for="respuesta-1">${questions[click].answers[0]}</label>
            <input id="respuesta-1" type="radio" name="correct" value="${questions[click].expected}">
            <label for="respuesta-2">${questions[click].answers[1]}</label>
            <input id="respuesta-2" type="radio" name="correct" value="${questions[click].expected}">
            <label for="respuesta-3">${questions[click].answers[2]}</label>
            <input id="respuesta-3" type="radio" name="correct" value="${questions[click].expected}">
            <img src=${questions[click].image} alt="" title="Quiz">
        </fieldset>
   </form> `;
   cuestionario.innerHTML = formulario;
   respuestas[click - 1] = index;
    }
    else {
        respuestas[numeroRespuestas - 1] = index;
        comparar();
    }
}

let aciertos = 0;
let fallos = 0;

function comparar() {
    for (i = 0; i < numeroRespuestas; i++) {
        if (respuestaCorrecta[i] === respuestas[i]) {
            aciertos++;
        }
        else {
            fallos++;
        }
    }
    let resultadosFinales = `
    <div id="puntuacion">
    <p class="results"><span id="hits">${aciertos}</span> ACIERTOS<br><span id="faults">${fallos}</span> FALLOS</p>
    <a id="button" class="special" href="question.html">Vuelta a Hobbiton</a>
    </div>    
    `;
    cuestionario.innerHTML = resultadosFinales;
}

// --------------------------------------------------------------------
// INTENTOS FALLIDOS :(


// let form = document.querySelector("form")
// let respuestaUno = document.querySelector("#respuesta-1")
// let respuestaDos = document.querySelector("#respuesta-2")
// let respuestaTres = document.querySelector("#respuesta-3")
// let contador = 0 //Cambiar a -1 cuando usemos drawQuestion   contador = la pagina en la que estoy

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     if (validator(questions[contador])) {
//         event.target.submit();
//     }
// })


// function drawQuestion() {
//     let formulario = `
// <form name ="dnd" action="" method="GET">
//         <fieldset>
//             <legend>${questions[contador].question}</legend>
//             <label for="respuesta-1">${questions[contador].answers[0]}</label>
//             <input id="respuesta-1" type="radio" name="favorito" value="${questions[contador].answers[0]}">
//             <label for="respuesta-2">${questions[contador].answers[1]}</label>
//             <input id="respuesta-2" type="radio" name="favorito" value="blue">
//             <label for="respuesta-3">${questions[contador].answers[2]}</label>
//             <input id="respuesta-3" type="radio" name="favorito" value="green">
//         </fieldset>
//     </form> `;

//     // Para cada respuesta...
//         let respuestaLabel = document.createElement("label");
//         respuestaLabel.for = "respuesta-" + (i+1);
//         respuestaLabel.innerText = document.querySelector("fieldset").appendChild(respuestaLabel);

//         let respuestaInput = document.createElement("input");
//         respuestaInput.type = "radio";
//         document.querySelector("fieldset").appendChild(respuestaLabel);



//     form.innerHTML = formulario;
//     console.log(formulario)
// return drawQuestion

// }
// drawQuestion(questions);


// function validator(pregunta) {
//     let answer;
//     document.querySelector("[name='favorito']:checked").value;
//     let radioButtons = document.getElementsByName("favorito");
//     for (let i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked)
//             answer = radioButtons[i].value;
//     }
//     return (answer === pregunta.answers[pregunta.expected])

//     // for (i = 0; i < array.length; i++) {
//         //  if(answers[i] == true) {
//         //    respuestaUno.className = "el nombre de la clase creada en css en VERDE";
//         //   return false;
//         //}
//         //  else {
//         //    respuestaUno.className = "el nombre de la clase creada en css en ROJO"
//         //    return true;
//         //}
           

//     // }
//     return false;
// }
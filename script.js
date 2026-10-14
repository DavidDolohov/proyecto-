document.addEventListener("DOMContentLoaded", () => {


// =========================================================
// MENÚ DE NAVEGACIÓN
// =========================================================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");


// Comprobar que existen el botón y el menú

if (toggle && nav) {

// Abrir / cerrar menú

toggle.addEventListener("click", () => {

const open = nav.classList.toggle("open");

toggle.classList.toggle("open", open);

toggle.setAttribute(
"aria-expanded",
open
);

toggle.setAttribute(
"aria-label",
open ? "Cerrar menú" : "Abrir menú"
);

});


// Cerrar el menú al seleccionar un enlace

nav.querySelectorAll("a").forEach((link) => {

link.addEventListener("click", () => {

nav.classList.remove("open");

toggle.classList.remove("open");

toggle.setAttribute(
"aria-expanded",
"false"
);

toggle.setAttribute(
"aria-label",
"Abrir menú"
);

});

});

}



// =========================================================
// CARRUSEL DE GALERÍA
// =========================================================

const carousel = document.querySelector("[data-carousel]");


// Ejecutar solamente si existe un carrusel en la página

if (carousel) {

const track = carousel.querySelector(
".carousel-track"
);

const slides = [
...carousel.querySelectorAll(".slide")
];

const dots = [
...carousel.querySelectorAll(
".carousel-dots button"
)
];

let current = 0;
let timer;


// -----------------------------------------------------
// Cambiar de diapositiva
// -----------------------------------------------------

const go = (index) => {

// Permite avanzar o retroceder de forma circular

current =
(index + slides.length) %
slides.length;


// Mover el carrusel

track.style.transform =
`translateX(-${current * 100}%)`;


// Actualizar los indicadores

dots.forEach((dot, i) => {

const isActive = i === current;

dot.classList.toggle(
"active",
isActive
);

dot.setAttribute(
"aria-current",
isActive ? "true" : "false"
);

});

};


// -----------------------------------------------------
// Iniciar reproducción automática
// -----------------------------------------------------

const start = () => {

clearInterval(timer);

timer = setInterval(() => {

go(current + 1);

}, 4500);

};


// -----------------------------------------------------
// Botón anterior
// -----------------------------------------------------

carousel
.querySelector(".prev")
.addEventListener("click", () => {

go(current - 1);

start();

});


// -----------------------------------------------------
// Botón siguiente
// -----------------------------------------------------

carousel
.querySelector(".next")
.addEventListener("click", () => {

go(current + 1);

start();

});


// -----------------------------------------------------
// Indicadores del carrusel
// -----------------------------------------------------

dots.forEach((dot, i) => {

dot.addEventListener("click", () => {

go(i);

start();

});

});


// -----------------------------------------------------
// Pausar al pasar el mouse
// -----------------------------------------------------

carousel.addEventListener(
"mouseenter",
() => clearInterval(timer)
);


// Reanudar cuando el mouse salga

carousel.addEventListener(
"mouseleave",
start
);


// -----------------------------------------------------
// Pausar cuando el carrusel recibe el foco
// -----------------------------------------------------

carousel.addEventListener(
"focusin",
() => clearInterval(timer)
);


// Reanudar cuando pierde el foco

carousel.addEventListener(
"focusout",
start
);


// Iniciar carrusel automáticamente

start();

}



// =========================================================
// FORMULARIO DE CONTACTO
// =========================================================

const form = document.querySelector(".contact-form");


// Ejecutar solamente si existe el formulario

if (form) {

const status = form.querySelector(
".form-status"
);


// -----------------------------------------------------
// Envío del formulario
// -----------------------------------------------------

form.addEventListener("submit", (event) => {

// Evitar el envío real del formulario

event.preventDefault();


// Mostrar mensaje de confirmación

status.textContent =
"Gracias. Recibimos tu mensaje y te contactaremos pronto.";


// Limpiar los campos

form.reset();

});


// -----------------------------------------------------
// Botón "Limpiar"
// -----------------------------------------------------

form.addEventListener("reset", () => {

// Esperar a que el navegador termine el reset

setTimeout(() => {

status.textContent = "";

}, 0);

});

}

});
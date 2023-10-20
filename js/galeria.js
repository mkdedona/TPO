// Menu Hamburguesa

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
}); 


// Galeria de imagenes

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .0s";
            contador=1;
        },1500)
    }
}


// Formulario de catering

const form = document.getElementById('cotizacionForm');

        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Validación de campos
            if (!form.nombre.value) {
                isValid = false;
                alert('Por favor, ingrese su nombre.');
            }
            if (!form.apellido.value) {
                isValid = false;
                alert('Por favor, ingrese su apellido.');
            }
            if (!form.email.value) {
                isValid = false;
                alert('Por favor, ingrese su correo electrónico.');
            }
            if (!form.telefono.value) {
                isValid = false;
                alert('Por favor, ingrese su número de teléfono.');
            }
            if (!form.fecha.value) {
                isValid = false;
                alert('Por favor, seleccione la fecha del evento.');
            }
            if (!form.horario.value) {
                isValid = false;
                alert('Por favor, seleccione el horario del evento.');
            }
            if (!form.personas.value) {
                isValid = false;
                alert('Por favor, ingrese el número de personas.');
            }
            if (!form.paquete.value) {
                isValid = false;
                alert('Por favor, seleccione un paquete de catering.');
            }

            if (!isValid) {
                event.preventDefault(); // Evita el envío del formulario si no es válido
            }
        });
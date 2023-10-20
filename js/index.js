//NAVBAR
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


//RESERVAS

const reservas = document.getElementById("reservas");
let formulario = document.createElement("form");

let hoy = new Date();
let diaReserva = document.getElementById('diaReserva');
diaReserva.value = hoy.toISOString().split('T')[0];
diaReserva.setAttribute('min', diaReserva.value);

let submitBtn = document.querySelector(".submitBtn");
formulario.addEventListener("submit", fnClick);

let itemForm = document.querySelectorAll(".itemForm");


function fnClick(e) {
    e.preventDefault();
    let isValid = true;
    if( (!itemForm[0].value)||(!itemForm[1].value)||(!itemForm[2].value)||(!itemForm[3].value)||(!itemForm[4].value)||(!itemForm[5].value) ){
        isValid = false;
        alert('Por favor, complete todos los datos.');
    }else{
        alert("Tu reserva se confirmó exitosamente. ¡Nos vemos pronto!");
    }
}





// const form = document.getElementById('cotizacionForm');

//         form.addEventListener('click', function(event) {
//             let isValid = true;

//             // Validación de campos
//             if (!form.nombre.value) {
//                 isValid = false;
//                 alert('Por favor, ingrese su nombre.');
//             }
//             if (!form.apellido.value) {
//                 isValid = false;
//                 alert('Por favor, ingrese su apellido.');
//             }
//             if (!form.email.value) {
//                 isValid = false;
//                 alert('Por favor, ingrese su correo electrónico.');
//             }
//             if (!form.telefono.value) {
//                 isValid = false;
//                 alert('Por favor, ingrese su número de teléfono.');
//             }
//             if (!form.fecha.value) {
//                 isValid = false;
//                 alert('Por favor, seleccione la fecha del evento.');
//             }
//             if (!form.horario.value) {
//                 isValid = false;
//                 alert('Por favor, seleccione el horario del evento.');
//             }
//             if (!form.personas.value) {
//                 isValid = false;
//                 alert('Por favor, ingrese el número de personas.');
//             }
//             if (!form.paquete.value) {
//                 isValid = false;
//                 alert('Por favor, seleccione un paquete de catering.');
//             }

//             if (!isValid) {
//                 event.preventDefault(); // Evita el envío del formulario si no es válido
//             }
//         });
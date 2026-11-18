/* Carga dinámica de los cinco océanos desde datos.json */
const contenedorOceanos = document.getElementById("contenedor-oceanos");

function cargarOceanos() {
    fetch("mensaje.json")
        .then(res => res.json())
        .then(datos => {
            let htmlAcumulado = "";

            datos.forEach(oceano => {
                htmlAcumulado += `<div class="col">`;
                htmlAcumulado += `<div class="p-4 border border-secondary rounded h-100 tarjeta-conservacion d-flex flex-column justify-content-between">`;
                htmlAcumulado += `<div>`;
                htmlAcumulado += `<span class="text-azul fw-bold fs-5">${oceano.numero}</span>`;
                htmlAcumulado += `<h3 class="h4 fw-bold mt-2 mb-3">${oceano.nombre}</h3>`;
                htmlAcumulado += `<p class="text-secundario small mb-2"><strong class="text-white">Ubicación:</strong> ${oceano.ubicacion}</p>`;
                htmlAcumulado += `<p class="text-secundario small mb-2"><strong class="text-white">Superficie:</strong> ${oceano.superficie}</p>`;
                htmlAcumulado += `<p class="text-secundario small mb-3"><strong class="text-white">Profundidad máxima:</strong> ${oceano.profundidad}</p>`;
                htmlAcumulado += `</div>`;
                htmlAcumulado += `<p class="text-secundario small border-top border-secondary pt-3 mb-0">${oceano.caracteristicas}</p>`;
                htmlAcumulado += `</div>`;
                htmlAcumulado += `</div>`;
            });

            contenedorOceanos.innerHTML = htmlAcumulado;
        });
}

cargarOceanos();

/* Formulario validacion */
const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});
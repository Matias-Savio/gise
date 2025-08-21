const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-ampliada");
const cerrarBtn = document.querySelector(".cerrar");
const siguienteBtn = document.querySelector(".siguiente");
const anteriorBtn = document.querySelector(".anterior");

const imagenes = document.querySelectorAll(".imagen img");
let indiceActual = 0;

// Abrir modal al hacer click en imagen
imagenes.forEach((img, index) => {
  img.addEventListener("click", () => {
    indiceActual = index;
    mostrarImagen();
    modal.classList.add("show");
  });
});

function mostrarImagen() {
  // Quita el fade anterior
  modalImg.classList.remove("fade-in");

  // Cambia la imagen
  modalImg.src = imagenes[indiceActual].src;

  // Vuelve a aplicar fade después de un pequeño retraso
  setTimeout(() => {
    modalImg.classList.add("fade-in");
  }, 50);
}

// Botón cerrar
cerrarBtn.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});

function cerrarModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
}

// Abrir modal (mostrar) con display flex cuando se agrega la clase show
const observer = new MutationObserver(() => {
  if (modal.classList.contains("show")) {
    modal.style.display = "flex";
  }
});
observer.observe(modal, { attributes: true, attributeFilter: ["class"] });

// Navegación siguiente y anterior
siguienteBtn.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen();
});

anteriorBtn.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});

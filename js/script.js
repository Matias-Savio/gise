const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-ampliada");
const cerrarBtn = document.querySelector(".cerrar");

document.querySelectorAll(".imagen img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");
  });
});

cerrarBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  }
});

// Para reiniciar el display cuando se abre
const observer = new MutationObserver(() => {
  if (modal.classList.contains("show")) {
    modal.style.display = "flex";
  }
});
observer.observe(modal, { attributes: true, attributeFilter: ["class"] });

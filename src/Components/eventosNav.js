

let contador = 1;

let aparece = () => {
  document.querySelector(".navbar-expand-lg").style.display = "block";
  if (contador === 1) {
    document.querySelector(".navbar-expand-lg").classList.add("contenedorMenu");
    // document.querySelector(".navbar-expand-lg").style.display = "block"
    contador = 0;
  } else {
    document.querySelector(".navbar-expand-lg").classList.remove("contenedorMenu");
    contador = 1;
    document.querySelector(".navbar-expand-lg").style.display = "none";
  }
};

let ocultar = () => {
  if (window.screen.width === 414) {
    document.querySelector(".navbar-expand-lg").style.display = "none";
    contador = 1;
  }
};


export {ocultar,aparece}
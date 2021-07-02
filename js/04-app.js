const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

const pantallaCompleta = () => {

    document.documentElement.requestFullscreen();

}

const cerrarPantallaCompleta = () => {

    document.exitFullscreen();

}

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);
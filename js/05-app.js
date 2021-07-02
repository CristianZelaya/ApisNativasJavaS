document.addEventListener('visibilitychange', () => {

    if( document.visibilityState === 'hidden') {

        console.log('Ejecutar funcion de pausa');

    } else {

        console.log('Ejecutar funcion de reproducir...');

    }
   
})
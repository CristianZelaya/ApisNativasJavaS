const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');


const ejecutarSpeechAPI = () => {
    
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.start();
    
    recognition.onstart = () => {
        
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando....'
        
    }
    
    recognition.onspeechend = () => {
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    recognition.onresult = (e) => {
        console.log(e.results[0][0]);

        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100 )}%`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);


    }
}

microfono.addEventListener('click', ejecutarSpeechAPI);
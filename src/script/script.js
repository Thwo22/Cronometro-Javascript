let horas = 0, minutos = 0, segundos = 0, milissegundos = 0;
let intervalo
let rodando = false;

function atualizaHora() {
    const tempo = document.getElementById("tempo");
    tempo.innerText =
    (horas < 10 ? "0" + horas : horas) + ":" +
    (minutos < 10 ? "0" + minutos : minutos) + ":" +
    (segundos < 10 ? "0" + segundos : segundos) + ":" +
    (milissegundos < 100 ? "0" + milissegundos.toString().padStart(2, '0') : milissegundos);

}

function start() {
    if (!rodando) {
        rodando = true
        intervalo = setInterval(() => {
            milissegundos += 10; 
            if (milissegundos >= 1000) {
                milissegundos = 0
                segundos++;
            }
            if (segundos >= 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos >= 60) {
                minutos = 0;
                horas++;
            }
            atualizaHora();
        }, 10);
    }
}

function pause() {
    clearInterval(intervalo);
    rodando = false
}

function restart() {
    pause();
    horas = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    atualizaHora();
}


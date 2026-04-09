const btn = document.getElementById('btn-genjutsu');
const audio = document.getElementById('audio');
const body = document.body;
const itachi = document.getElementById('itachi');

let isPlaying = false;

btn.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        body.classList.add('rave-mode');
        btn.innerText = "Parar Genjutsu";
        itachi.style.animation = "bounce 0.2s infinite alternate"; // Dança mais rápido
        isPlaying = true;
    } else {
        audio.pause();
        body.classList.remove('rave-mode');
        btn.innerText = "Liberar Genjutsu (Música)";
        itachi.style.animation = "bounce 0.5s infinite alternate";
        isPlaying = false;
    }
});
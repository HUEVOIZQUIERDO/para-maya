// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Ajuste de delay si la canción comienza después de un retraso
var delay = 1; // Cambia este valor dependiendo del retraso entre la carga de la canción y las letras

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "This ain't for the best", time: 0 },
  { text: "My reputation's never been worse, so", time: 1 },
  { text: "You must like me for me", time: 5 },
  { text: "We can't make", time: 11 },
  { text: "Any promises now, can we, babe?", time: 12 },
  { text: "But you can make me a drink", time: 15 },
  { text: "Dive bar on the East Side, where you at?", time: 17 },
  { text: "Phone lights up my nightstand in the black", time: 20 },
  { text: "Come here, you can meet me in the back", time: 23 },
  { text: "Dark jeans and your Nikes, look at you", time: 26 },
  { text: "Oh damn, never seen that color blue", time: 28 },
  { text: "Just think of the fun things we could do", time: 31 },
  { text: "('Cause I like you)", time: 34 },
  { text: "This ain't for the best", time: 36 },
  { text: "My reputation's never been worse, so", time: 39 },
  { text: "You must like me for me", time: 42 },
  { text: "(Yeah, I want you)", time: 44 },
  { text: "We can't make", time: 46 },
  { text: "Any promises now, can we, babe?", time: 48 },
  { text: "But you can make me a drink", time: 50 },
  { text: "Is it cool that I said all that?", time: 53 },
  { text: "Is it chill that you're in my head?", time: 55 },
  { text: "'Cause I know that it's delicate (delicate)", time: 58 },
  { text: "Is it cool that I said all that?", time: 60 },
  { text: "Is it too soon to do this yet?", time: 63 },
  { text: "'Cause I know that it's delicate", time: 65 },
  { text: "Isn't it, isn't it, isn't it?", time: 67 },
  { text: "Isn't it?", time: 69 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time + delay && time < line.time + delay + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var timeInLine = time - (currentLine.time + delay);
    var opacity = Math.min(1, timeInLine / fadeInDuration);

    // Aplica el efecto de aparición gradual
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Usar un intervalo más corto para mejorar la precisión de la sincronización
setInterval(updateLyrics, 100); // Actualizar cada 100 ms

//función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

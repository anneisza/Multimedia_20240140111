function alertSinopsis() {
    alert("Sinopsis \"The Art of Sarah\".")
}

function alertVideoLokal() {
    alert("Memutar Trailer The Art of Sarah Subtittle Inggris dari media lokal.");
}

function alertYouTube() {
    alert("Memutar Trailer The Art of Sarah Subtittle Indonesia dari YouTube.");
}

function alertAudio() {
    alert("Memutar Soundtrack The Art of Sarah.");
}

function alertPoster() {
    alert("Poster The Art of Sarah.");
}

function alertInginPutar() {
    alert(`Klik ${"\"play\" "} untuk memutar`)
}

document.addEventListener("DOMContentLoaded", function() {
    // SINOPSIS
    var sinopsisElement = document.getElementById("sinopsis");
    if (sinopsisElement) {
        sinopsisElement.addEventListener("click", alertSinopsis)
    }
    
    // VIDEO LOKAL (klik + play)
    var videoElement = document.querySelector("video");
    if (videoElement) {
        videoElement.addEventListener("click", alertInginPutar);
        videoElement.addEventListener("play", alertVideoLokal);
    }

    // VIDEO YOUTUBE (klik)
    var youtubeContainer = document.getElementById("video-yt");
    if (youtubeContainer) {
        youtubeContainer.addEventListener("click", alertInginPutar);
    }

    // AUDIO (klik)
    var audioElement = document.getElementById("audio");
    if (audioElement) {
        audioElement.addEventListener("click", alertInginPutar);
    }

    // AUDIO (play)
    var audioElement = document.querySelector("audio");
    if (audioElement) {
        audioElement.addEventListener("play", alertAudio);
    }
    
    // GAMBAR POSTER (klik saja)
    var posterImage = document.querySelector("#image img");
    if (posterImage) {
        posterImage.addEventListener("click", alertPoster);
    }
    
});
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("miniVideo");
    const playBtn = document.getElementById("playBtn");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    // Play/pause toggle
    playBtn.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playBtn.style.display = "none";
        } else {
            video.pause();
            playBtn.style.display = "block";
        }
    });

    // Click video area to toggle play
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playBtn.style.display = "none";
        } else {
            video.pause();
            playBtn.style.display = "block";
        }
    });

    // Show play button again when video ends
    video.addEventListener("ended", function () {
        playBtn.style.display = "block";
    });

    // Fullscreen toggle
    fullscreenBtn.addEventListener("click", function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { // Safari
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE11
            video.msRequestFullscreen();
        }
    });
});

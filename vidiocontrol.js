window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('videoReel');
  const togglePlayBtn = document.getElementById('togglePlayBtn');

  togglePlayBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  window.toggleFullscreen = function () {
    const container = document.getElementById('videoContainer');
    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  window.toggleMute = function () {
    video.muted = !video.muted;
  };
});
